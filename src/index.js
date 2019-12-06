import express from 'express';
import routes from './routes';
import initDb from './db';

export default async() => {
    try {
        const app =  express();

        await initDb();
        routes(app);

        app.listen(process.env.PORT, ()=> {
            console.log(process.env.NODE_ENV)
        });
    }
    catch (e) {
        console.log(e);
    }
}
