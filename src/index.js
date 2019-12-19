import express from 'express';
import routes from './routes';
import initDb from './db';
import bodyParser from 'body-parser';

export default async() => {
    try {
        const app =  express();

        await initDb();
        app.use(bodyParser.urlencoded({ extended: true}));
        routes(app);

        app.listen(process.env.PORT, ()=> {
            console.log(process.env.NODE_ENV)
        });
    }
    catch (e) {
        console.log(e);
    }
}
