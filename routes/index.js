var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('fileupload');
  // req.render(req.files)
});
router.post('/upload',function(req,res,next){
    // console.log(req.files.file);

      var fileobj=req.files.file;
      var filename=req.files.file.name;
      var filesize=req.files.file.size;	
      var filetype=req.files.file.mimetype;
      var limit=2*1024*1024;
  
  if(filetype=="image/jpeg" && filesize<=limit){

     
       fileobj.mv("public/upload/"+filename,function(err){
         if(err){
            return res.status(500).send(err);
          }
         else{
             res.send('File uploaded to ' + filetype);
         }
      });
  }
  else{
    res.send("Something is Wrong ");
    // res.render("/upload");
  }
    
  });


module.exports = router;
