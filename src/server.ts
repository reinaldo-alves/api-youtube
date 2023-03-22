import express from 'express'
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';
import { shortsRoutes } from './routes/shorts.routes';

config();
const app = express();
const port = 4000

const cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
    res.send("Seja bem vindo à API do Youtube by Reinaldo Alves");
});

app.use('/user', userRoutes);
app.use('/videos', videosRoutes);
app.use('/shorts', shortsRoutes);

app.listen(port)