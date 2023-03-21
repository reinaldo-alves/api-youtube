import { Router } from "express";
import { VideoRepository } from "../modules/videos/repositories/VideosRepository";
import { login } from '../middleware/login'

const videosRoutes = Router();
const videoRepository = new VideoRepository();

videosRoutes.post('/create-video', login, (request, response) => {
    videoRepository.create(request, response);
})

videosRoutes.get('/get-all-videos/', (request, response) => {
    videoRepository.getAllVideos(request, response);
})

videosRoutes.get('/get-videos-cat/:category', (request, response) => {
    videoRepository.getVideosByCat(request, response);
})

videosRoutes.get('/get-videos/', (request, response) => {
    videoRepository.getVideos(request, response);
})

videosRoutes.get('/search/', (request, response) => {
    videoRepository.searchVideos(request, response);
})

export { videosRoutes }