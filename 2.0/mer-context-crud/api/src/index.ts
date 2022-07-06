import express from 'express';
import { PORT } from './config/config';
import { dbConnection } from './config/database';
import { postsRouter } from './routes/posts.routes';

const app = express();

//DataBase
dbConnection();

//Routes
app.use(postsRouter);

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

