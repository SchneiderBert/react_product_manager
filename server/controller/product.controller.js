const Product = require('../models/product.model');



module.exports = {
    index: (req, res) => {
        Product.find()
        .then(products => res.json({result: products}))
        .catch(err => console.log(err))
    },
    create: (req, res) => {
        Product.create(req.body)
        .then(product => res.json({results: product}))
        .catch(err => res.json(err.errors))

    },
    show: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, useFindAndModify:false, runValidators:true})
        .then(updatedProduct => res.json({results: updatedProduct}))
        .catch(err => res.json(err.errors))

    },
    destroy: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json(err.errors))
    },


}