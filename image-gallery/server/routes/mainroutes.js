const express = require("express");
const router = express.Router();
const post = require('../../models/post'); 

router.get("/", async (req,res)=>{

    try{
    const data = await post.find();
    res.render('index',{data});
    } catch(error){
     console.log(error);
    }
    });
    
    router.get("/add-post", async (req,res)=>{
    
          try{
          const data = await post.find();
          res.render('admin/add-post',{data});
          } catch(error){
           console.log(error);
          }
          });
    
    
    router.post('/add-post', async (req, res) => {
      try {
        
        const { title, summary, url , eventName  } = req.body;
    
        const newPost = new post({
          title,       
          summary,    
          url,
          eventName         
        });
    
        
        await newPost.save();
    
        res.redirect('/'); 
    
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error'); 
      }
    });
    
    router.get('/search', async (req, res) => {
      const query = req.query.query;  
      let results = [];
      let eventName = query;
      if (query) {
         
          results = await post.find({ eventName: new RegExp(query, 'i') });
      }
  
      res.render('search', { results,eventName });
  });

 router.get('/add' ,(req,res)=>{
       res.render('login');
 });

  router.post('/admin-login', async (req, res) => {
    try {
        const { username, password } = req.body;

       
        if (username === 'admin@dev' && password === 'deepak@dev') {
           
            res.redirect('/add-post');
        } else {
            
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).send('An error occurred. Please try again later.');
    }
});


    

module.exports = router;