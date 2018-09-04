const Product = require('../models/node.model');

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            line: req.body.line,
            status: req.body.status
        }
    );

    product.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Product Created successfully')
    })
};

// controllers/products.controller.js
exports.product_details = function (req, res) {

    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        //  res.send(product);
    })
    //if (req.body.result.action == "faq-delivery"){

    return res.json({
        speech: 'Here is the status',
        displayText:'Feeling happy',
        source: 'My firs webhoook'
    });
   // }

};

// controllers/products.controller.js
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

// controllers/products.controller.js
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};