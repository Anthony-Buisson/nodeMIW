import express from 'express';
import routes from './routes/index';

export default () => {
    try {
        const app =  express();
        routes(app);
        app.listen(process.env.PORT, ()=> {
            console.log(process.env.NODE_ENV)
        });
    }
    catch (e) {
        console.log(e);
    }
}
