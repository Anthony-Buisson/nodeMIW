import express from 'express';
import routes from './routes';
import initDb from './db';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './middlewares/logger';

export default async() => {
    try {
        const app =  express();

        await initDb();
        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(cors());
        app.use(logger);
        routes(app);

        app.listen(process.env.PORT, ()=> {
            console.log(process.env.NODE_ENV)
        });
    }
    catch (e) {
        console.log(e);
    }
}
