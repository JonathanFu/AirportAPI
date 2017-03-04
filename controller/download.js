var AWS = require('aws-sdk');
var awsConfig = require('../config/aws.js');

exports.download = function (req, res, next) {

  AWS.config.update(awsConfig);
  var s3 = new AWS.S3();

  var filename = 'howTo.png';
  var filepath = 'buckettestdemo123';
  var s3Params = {Bucket: filepath, Key: filename};
  var mimetype = 'video/quicktime'; // or whatever is the file type, you can use mime module to find type

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  // Here we are reading the file from S3, creating the read stream and piping it to the response.
  // I'm not sure if this would work or not, but that's what you need: Read from S3 as stream and pass as stream to response (using pipe(res)).
  s3.getObject(s3Params).createReadStream().pipe(res);
};