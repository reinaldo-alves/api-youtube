import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { Request, Response } from 'express';

class UserRepository {
    create(request: Request, response: Response){
        const { name, email, password, avatar, color } = request.body;
        pool.getConnection((err: any, connection: any) => {
            hash(password, 10, (err, hash) => {
                if(err){
                    return response.status(500).json(err)
                }
                connection.query(
                    'INSERT INTO users (user_id, name, email, password, avatar, color) VALUES (?,?,?,?,?,?)',
                    [uuidv4(), name, email, hash, avatar, color],
                    (error: any, result: any, fields: any) => {
                        connection.release();
                        if (error) {
                            return response.status(400).json(error)
                        }
                        response.status(200).json({message: "Usuário criado com sucesso"});
                    }
                )
            })
        })
    }

    //FAZER VALIDAÇÃO PARA SABER SE EMAIL JÁ EXISTE
    login(request: Request, response: Response){
        const { email, password } = request.body;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({message: "Erro na sua autenticação!"})
                    }
                    if (!results[0]){
                        return response.status(202).json({message: "Usuário não cadastrado"})
                    }
                    compare(password, results[0].password, (err, result) => {
                        if (err) {
                            return response.status(400).json({message: "Erro na sua autenticação!"})
                        }
                        if (result) {
                            const token = sign({
                                id: results[0].user_id,
                                email: results[0].email
                            }, process.env.SECRET as string, {expiresIn: "1d"})

                            return response.status(200).json({token: token, message: "Autenticado com sucesso!"})
                        } else {
                            return response.status(200).json({message: "Senha incorreta"})
                        }
                    });
                }
            )
        })
    }

    getUser(request: any, response: any){
        const decode: any = verify(request.headers.authorization, process.env.SECRET as string);
        if(decode.email){
            pool.getConnection((error, conn) => {
                conn.query(
                    'SELECT * FROM users WHERE email = ?',
                    [decode.email],
                    (error, resultado, fields) => {
                        conn.release();
                        if (error) {
                            return response.status(400).send({
                                error: error,
                                response: null
                            })
                        }
                        return response.status(201).send({
                            user: {
                                nome: resultado[0].name,
                                email: resultado[0].email,
                                id: resultado[0].user_id,
                                avatar: resultado[0].avatar,
                                color: resultado[0].color
                            }
                        })
                    }
                )
            })
        }
    }

}

    export { UserRepository }