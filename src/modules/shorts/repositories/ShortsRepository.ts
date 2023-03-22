import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

class ShortRepository {
    create(request: Request, response: Response){
        const { title, user_id, thumb, views } = request.body;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'INSERT INTO shorts (shorts_id, user_id, title, thumb, views) VALUES (?,?,?,?,?)',
                [uuidv4(), user_id, title, thumb, views],
                (error: any, result: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json(error)
                    }
                    response.status(200).json({message: "Shorts criado com sucesso"});
                }
            )
        })
    }


    getAllShorts(request: Request, response: Response){
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM shorts',
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os shorts"})
                    }
                    return response.status(200).json({message: "Shorts retornados com sucesso", shorts: results})
                }
            )
        })
    }


    getShorts(request: Request, response: Response){
        const { user_id } = request.query;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM shorts WHERE user_id = ?',
                [user_id],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os shorts"})
                    }
                    return response.status(200).json({message: "Shorts retornados com sucesso", shorts: results})
                }
            )
        })
    }


    searchShorts(request: Request, response: Response){
        const { search } = request.query;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM shorts WHERE title LIKE ?',
                [`%${search}%`],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os shorts"})
                    }
                    return response.status(200).json({message: "Shorts retornados com sucesso", shorts: results})
                }
            )
        })
    }
}

export { ShortRepository }