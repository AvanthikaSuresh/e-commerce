var express = require('express');
const { response } = require('../app');
const app = require('../app');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers.js')
const userHelpers=require('../helpers/user-helpers.js')
const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  productHelpers.getAllProducts().then((product)=>{
    console.log(product);
    res.render('user/view-product',{product,user});
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    res.redirect('/login');
  })
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status)
    {
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})
router.get('/cart',verifyLogin,(req,res)=>{
  res.render('user/cart')
})

module.exports = router;

