var db=require('../config/connection')
var collection=require('../config/collections')
var ObjectID=require('mongodb').ObjectID

module.exports={

    addProduct:(product)=>{
        return new Promise(async(resolve,reject)=>{
            
            products=await db.get().collection('product').insertOne(product).then((response)=>{
                id=response.insertedId
                console.log("hhh");
                console.log(id);
                resolve(id)
                
            })
            
            })
        
        },
        getAllProducts:()=>{
            return new Promise(async(resolve,reject)=>{
                let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
                resolve(products)
            })
        },
        // deleteProduct:(proId)=>{
        //     return​ ​new​ ​Promise​(​(​resolve​,​ ​reject​)​ ​=>​ ​{ 
        //         ​      ​db​.​get​(​) 
        //         ​        ​.​collection​(​collection​.​PRODUCT_COLLECTION​) 
        //         ​        ​.​removeOne​(​{​ ​_id​:​proId​​ ​}​) 
        //         ​        ​.​then​(​response​)​; 
        //         ​      ​resolve​(​response​)​; 
        //         ​    ​}​)​;
        // }
         ​deleteProduct​: ​(​proId​)​ ​=>​ ​{ 
            ​    ​return​ ​new​ ​Promise​(​(​resolve​,​ ​reject​)​ ​=>​ ​{ 
            ​      ​db​.​get​(​) 
            ​        ​.​collection​(​collection​.​PRODUCT_COLLECTION​) 
            ​        ​.​removeOne​(​{​ ​_id​: ​ObjectID​(​proId​)​ ​}​) 
            ​        ​.​then​(​response​)​; 
            ​      ​resolve​(​response​)​; 
            ​    ​}​)​; 
            ​  ​}​,
         
        }  
    
