import { productModel } from '../db/product';
import { commentModel } from '../db/comment';

export default (app) => {
    app.get('/', async(req, res) => {
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        }
        catch (err) {
            return res.status(500).json({
                'error': err,
                'message': 'Error lors de la requête'
            });
        }
    });

    /**
     * Get a product
     */
    app.get('/product/:bar_code', async(req, res) => {
        const barCode = req.params.bar_code;

        try {
            const product = await productModel.findOne({ bar_code: barCode });
            res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({
                'error': true,
                'message': 'Error lors de la requête'
            });
        }
    });

    /**
     * Create one product
     */
    app.post('/product', async(req, res) => {
        try {
            const {
                name,
                brand,
                bar_code,
                grade,
                quantity,
                pictures,
                ingredients
            } = req.body;

            const request = new productModel({
                name,
                brand,
                bar_code,
                grade,
                quantity,
                pictures,
                ingredients
            });

            const inserted = await request.save();

            if(inserted && inserted._id){
                return await res.json(inserted);
            }else{
                return res.status(500).json({
                    status: 'fail',
                    message: 'Le produit n\'a pas pu être inséré'
                });
            }
        }
        catch (err) {
            console.log(err.message);
            return res.status(500).json({
                'error': true,
                'message': 'Error lors de la requête'
            });
        }
    });

    /**
     * Create a comment
     */
    app.post('/comment/:food_code', async(req, res) => {
        try {
            const food_code = req.params.food_code;
            const produitExiste = await productModel.findOne({bar_code: food_code });

            if(produitExiste == null){
                return res.status(404).json({
                    status: 'fail',
                    message: 'Le produit concerné n\'a pas été trouvé'
                });
            }

            const { date, title, text } = req.body;
            const request = new commentModel({date, title, text, food_code});
            const inserted = await request.save();

            if(inserted && inserted._id){
                return await res.json(inserted);
            }else{
                return res.status(500).json({
                    status: 'fail',
                    message: 'Le commentaire n\'a pas pu être inséré'
                });
            }
        }
        catch (err) {
            console.log(err.message);
            return res.status(500).json({
                'error': true,
                'message': 'Error lors de la requête'
            });
        }
    });

    /**
     * Get a comment
     */
    app.get('/comment/:_id', async(req, res) => {
        const comment_id = req.params._id;

        try {
            const comment = await commentModel.findOne({ _id: comment_id });
            res.status(200).json(comment);
        }
        catch (err) {
            return res.status(500).json({
                'error': true,
                'message': 'Error lors de la requête'
            });
        }
    });

    /**
     * Get comments on a product
     */
    app.get('/comments/:food_code', async(req, res) => {
        const bar_code = req.params.food_code;

        try {
            const comments = await commentModel.find({ food_code: bar_code });
            res.status(200).json(comments);
        }
        catch (err) {
            return res.status(500).json({
                'error': true,
                'message': 'Error lors de la requête'
            });
        }
    });
}