import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

class VideoRepository {
    create(request: Request, response: Response){
        const { title, description, user_id, thumb, views, time, category, channel, avatar, color } = request.body;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'INSERT INTO videos (video_id, user_id, title, description, thumb, views, time, category, channel, avatar, color) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                [uuidv4(), user_id, title, description, thumb, views, time, category, channel, avatar, color],
                (error: any, result: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json(error)
                    }
                    response.status(200).json({message: "Vídeo criado com sucesso"});
                }
            )
        })
    }


    getAllVideos(request: Request, response: Response){
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos',
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os vídeos"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso", videos: results})
                }
            )
        })
    }


    getVideosByCat (request: Request, response: Response){
        const { category } = request.params;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos WHERE category = ?',
                [category],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os vídeos"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso", videos: results})
                }
            )
        })
    }


    getVideos(request: Request, response: Response){
        const { user_id } = request.query;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos WHERE user_id = ?',
                [user_id],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os vídeos"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso", videos: results})
                }
            )
        })
    }


    searchVideos(request: Request, response: Response){
        const { search } = request.query;
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos WHERE title LIKE ?',
                [`%${search}%`],
                (error: any, results: any, fields: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({error: "Erro ao buscar os vídeos"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso", videos: results})
                }
            )
        })
    }
}

export { VideoRepository }