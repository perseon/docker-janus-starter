//import express from 'express';

const util = require('util')

const fs = require('fs');

var cors = require('cors');

const readdir = util.promisify(fs.readdir)

const readRecords = function (path)  {

  let files = null
  
  try {
    
    files = readdir(path)
    
  } catch (error) {
    
    console.log(error)
  }
  
  return files
}

const r = require('rethinkdb')
r.connect({ host: 'rdb', port: 28015 }, function(err, conn) {
  if(err) throw err;
  //r.db('rtc').delete();
});




// import socketIO from "socket.io";

export default (app, http) => {
  // app.use(express.json());
  const fileUpload = require('express-fileupload');
  app.use(fileUpload());
  app.use(cors());
  //
   app.get('/records', (req, res) => {

    readRecords('/home/ovid/rcs').then((recs)=>res.json({msg: recs}));

   });

  app.post('/uploadImg', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({msg:'No files were uploaded.'});
    }
    
  req.files.image.mv(`public/imgs/${req.body.name}`, function(err) {
    if (err)
      return res.status(500).send(err);
    res.json({msg:'ok'});
  });
});
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
