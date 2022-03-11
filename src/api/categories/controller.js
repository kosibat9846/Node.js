const {Category} = require('./model');



const create = async  ({body}, res , next) => {


    try {

        const category = await Category.create(body);
        return res.status(201).json(category);

    }catch (e) {
        return next(e);
    }


};

const index = async ({query}, res, next) => {


    try {
    const categories = await Category.query();
    res.json(categories)
    } catch (e) {
        next(e);
    }
};



const show = async ({params}, res, next) => {
    const id = params.id;

    try {
        const category = await Category.findById(id);
        if (category) return res.status(200).json(category);
        return res.status(404);
    } catch (e) {
        next(e);
    }
};

const update = async ({body, params}, res, next) => {
    const id = params.id;
    const {name} = body;


    try {
        const category = await Category.findById(id);
        if (category) {
            category.name = name;
            await category.save();
            return res.json(category);
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
        const category = await Category.findById(id);
        if(category){
            await category.remove();
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

























