
var mongoose = require('mongoose');
require("../models/product.js");
var Product = mongoose.model('Product');


module.exports = {
    addProduct: function(req, res){
            var errors = {};
            console.log("Req . body",req.body);
            name = {}
            qty = {}
            price = {}

            if(req.body.name.length< 3){
                name.message= "Name of the Product should be atleast 3 characters";
            }

            if(req.body.qty < 0 ){
                qty.message = "Product must contain a Quantity";

            }
            if(req.body.price < 0 ){
                price.message = "Product must contain a Price";

            }


            errors = {name: name, qty : qty, price: price};

            if(name.message || qty.message || price.message){
                console.log("Errors before Json", errors);
                res.json({message: "custom", data : errors});
                return;
            }

            else{

                Product.create(req.body, function(err, data) {

                            if(err){
                                res.json({message :"Error", data : err})
                            }
                            else{


                                        res.json({message :"Success", data : data})
                                    }





                });
            }

    },
    getAllProducts: function(req, res){
        Product.find({}, function(err,data){
            if(err){
                res.json({message :"Error", data : err})
            } else {
                res.json({message :"Success", data : data})
            }
        })
    },
    getOneProduct: function(req,res){
        Product.find({}, function(err,data){
            if(err){
                res.json({message :"Error", data : err})
            }else{

                console.log("Get ONe Product : ", data[req.params.id-1]);
                res.json({message :"Success", data : data[req.params.id-1]})
            }
        })
    },


    deleteProduct: function(req, res) {
        Product.find({}, function(err,data){
            if(err){
                res.json({message :"Error", data : err})
            }else{
                var prod = data[req.params.id-1];
                Product.remove({_id: prod._id}, function(err,data) {
                if(err) {
                    return res.json({message :"Error", data : err});
                }
                else {
                    return res.json({message:"Success", data: data})
                }
            });
            }
        });
    },

    updateProduct: function(req, res){

            var errors = {};
            console.log("Req . body",req.body);
            name = {}
            qty = {}
            price = {}

            if(req.body.name.length< 3){
                name.message= "Name of the Product should be atleast 3 characters";
            }

            if(req.body.qty < 0 ){
                qty.message = "Product must contain a Quantity";

            }
            if(req.body.price < 0 ){
                price.message = "Product must contain a Price";

            }


            errors = {name: name, qty : qty, price: price};

            if(name.message || qty.message || price.message){
                console.log("Errors before Json", errors);
                res.json({message: "custom", data : errors});
                return;
            }
            console.log("Reached update")
            Product.find({}, function(err,data){
                if(err){
                    res.json({message :"Error", data : err})
                }else{
                    var prod = data[req.params.id-1];
                    console.log("product",prod )
                    console.log("req.body",req.body )
                    Product.updateOne({_id: prod._id}, { $set: {name : req.body.name, qty: req.body.qty, price : req.body.price} } , function(err, data){
                        if(err) {
                            return res.json({message :"Error", data : err});
                        }
                        else {
                            console.log("product",data )
                            return res.json({message:"Success", data: data})
                        }

                    });
                }
            });
    }

    // newReview: function(req, res) {
    //     console.log("in newReview");

    //             Review.create(req.body, function(err, review){
    //                 console.log("creating review")
    //                 if (err){
    //                     res.json({message :"Error", data : err})
    //                 } else {
    //                     console.log("req.body", req.body);
    //                     Product.update({_id: req.params.id}, {$push: {reviews: req.body}},{runValidators: true}, function(err, data){

    //                         if(err){
    //                             res.json({message :"Error", data : err});
    //                         }else{
    //                             console.log("adding review to Product")
    //                             res.json({message:"Success", data: data});
    //                         }
    //                     });
    //                 }
    //             });
    //         }



}
