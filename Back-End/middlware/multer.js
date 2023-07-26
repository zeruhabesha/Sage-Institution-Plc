const multer = require("multer");


var storage = multer.diskStorage({
 destination: function (req, file, cb) {
   cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {
   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
   const fileExtension = file.originalname.split(".").pop();
   const filename = `${uniqueSuffix}.${fileExtension}`;
   cb(null, filename);
 }
});

var upload = multer({ storage: storage });
module.exports = upload;



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "uploads"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const fileExtension = file.originalname.split(".").pop();
//     const filename = `${uniqueSuffix}.${fileExtension}`;
//     cb(null, filename);
//   }
// });