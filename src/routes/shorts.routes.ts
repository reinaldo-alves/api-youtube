import { Router } from "express";
import { ShortRepository } from "../modules/shorts/repositories/ShortsRepository";
import { login } from '../middleware/login'

const shortsRoutes = Router();
const shortRepository = new ShortRepository();

shortsRoutes.post('/create-shorts', login, (request, response) => {
    shortRepository.create(request, response);
})

shortsRoutes.get('/get-all-shorts/', (request, response) => {
    shortRepository.getAllShorts(request, response);
})

shortsRoutes.get('/get-shorts/', (request, response) => {
    shortRepository.getShorts(request, response);
})

shortsRoutes.get('/search/', (request, response) => {
    shortRepository.searchShorts(request, response);
})

export { shortsRoutes }