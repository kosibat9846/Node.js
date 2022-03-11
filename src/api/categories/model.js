
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema(
    {

    name: {

        type: String,
        required: true,
    },
        subcategory: [

            {
                name: {

                    type: String,

                }
            }
        ]

});

module.exports = {

    CategorySchema,
    Category: mongoose.model('Category', CategorySchema)

};