var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers.js')
/* GET users listing. */
    router.get('/' , function(req, res, next) {
      productHelpers.getAllProducts().then((product)=>{
        console.log(product);
        res.render('admin/view-product',{admin:true,product});
      })
     
   });
   router.get('/add-product',function(req,res){
     res.render('admin/add-product')
   })
   router.post('/add-product',(req,res)=>{
    //  console.log(req.body)
    //  console.log(req.files.Image)
     productHelpers.addProduct(req.body).then((id)=>{
       console.log("lala");
       console.log(id);
     
       let image=req.files.Image
       image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
         if(!err){
          res.render('admin/add-product') 
         }else{
           console.log(err);
         }
        })
       res.render("admin/add-product")
        })
   
      })
      router.get('/delete-product/:id',(req,res)=>{
          let proId=req.params.id
          console.log("Nothing");
          productHelpers.deleteProduct(proId).then((response)=>{
            console.log("gooo");
            res.redirect('/admin/')
          })
      })
module.exports = router;
