import { productModel } from '../db/product';

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
}