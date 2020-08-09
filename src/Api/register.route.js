const express = require('express');
const registerRoute = express.Router();

let Register = require('./register.model');

registerRoute.post("/add", (req, res, next) => {
        console.log("calling post API :"+ req.body.name);
          const register = new Register({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
          });
          console.log("calling post API");
      
          register
            .save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: "Handling POST requests to /products",
                createdProduct: result
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        });

    // registerRoute.route('/').get(function (req, res){
    //     Business.find(function(err, business){
    //         if(err)
    //           console.log(err);
    //           else{
    //               res.json(business);
    //           }
    //     });
    // });

    // registerRoute.route('/edit/:id').get(function (req,res){
    //     let id = req.param.id;
    //     Business.findById(id, function(err, business){
    //         res.json(businessRoutes);
    //     });
    // });

    // registerRoute.route('/update/:id').post(function (req,res){
    //     Business.findById(req.params.id, function(err, business){
    //         if(!business)
    //           res.status(404).send("data is not found");
    //         else{
    //             business.person_name = req.body.person_name;
    //             business.business_name = req.body.business_name;
    //             business.business_nic_number = req.body.business_nic_number;

    //             business.save().then(business => {
    //                 res.json('Update Complete');
    //             })
    //                 .catch(err => {
    //                     res.status(400).send('unable to update database');
    //                 });
    //         }
    //     });
    // });


    // registerRoute.route('/delete/:id').get(function (req,res){
    //     Business.findByIdAndRemove({_id:req.params.id}, function(err,business){
    //         if(err)res.json(err);
    //         else res.json('Successfully removed');           
    //     });
    // });

    module.exports = registerRoute;