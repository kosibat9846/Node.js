
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({


    name: {

        type: String,
        required: true
    },

    category:{

        type: String,

    },

    subcategory: {

        type: String
    },

    description: {

        type: String,
        required: true

    },

    measurement: {

        type: String,
        required:true
    },

    accession_number: {

        type: String,
        required: true
    },

    price:

        {
            gross_price:{

                type: Number,
                required: true

            },
            nett_price:{
                type: Number,
                required:true
            }
        },

    quantity: {
        type: Number,
        required: true
    },

    availability:{
        type: Boolean,
        required: true
    },

    product_details: {

            material: { type:String },
            norm: { type:String},

            diameter: {

                    diameter: {type:String},
                    external_diameter: {type:String},
                    inside_diameter: {type:String},
                    drill_diameter: {type:String},     ///eirtło
                    shank_diameter: {type:String},  ///trzon
                    flange_diameter: {type:String},  ////kołnierz



            },


            dimensions: {

                    height: {type:String},
                    width: {type:String},
                    length: {type:String},
                    thickness: {type:String}
            },

            bulk_pack: {type:Number},
            corps_material: {type:String},
            anti_corrosion_protection: {type:String},


            thread: {

                thread_size:{type:String},      //gwint
                thread_length:{type:Number}
            },

            pin_length: {type:Number},
            hole_size: {type: Number},
            hardness_class:{type: Number},

            head: {
                head_diameter: {type:String},
                head_length:{type:String}
            },

            socket_type: {type:String}

    },

    image_url: {
        type: String,

    }
});

module.exports = {

    ProductSchema,
    Product: mongoose.model('Product', ProductSchema)

};