const {Product} = require('./model');



const create = async  ({body}, res , next) => {


    try {

        const product = await Product.create(body);
        return res.status(201).json(product);

    }catch (e) {
        return next(e);
    }


};

const index = async ({query}, res, next) => {


    try {
    const products = await Product.query();
    res.json(products)
    } catch (e) {
        next(e);
    }
};



const show = async ({params}, res, next) => {
    const id = params.id;

    try {
        const product = await Product.findById(id);
        if (product) return res.status(200).json(product);
        return res.status(404);
    } catch (e) {
        next(e);
    }
};

const update = async ({body, params}, res, next) => {
    const id = params.id;
    const {name,category,description} = body;


    try {
        const product = await Product.findById(id);
        if (product) {
            product.name = name;
            product.category= category;
            product.description= description
            await product.save();
            return res.json(product);
        } else {
            return res.status(404);
        }
    } catch (e) {
        next(e);
    }

};

const destroy = async ({params}, res, next) => {
    const id = params.id;
    try {
        const product = await Product.findById(id);
        if(product){
            await product.remove();
            return res.status(204).end();
        }
        return res.status(404).end();

    } catch (e) {
        next(e)
    }
};




module.exports = {
    create,index, show, update, destroy
};

























