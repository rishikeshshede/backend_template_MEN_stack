require("dotenv").config();
const AWS = require("aws-sdk");

// ############### AWS configs ###############

const S3 = new AWS.S3({
  endpoint: "s3.amazonaws.com",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  Bucket: process.env.BUCKET,
  signatureVersion: "v4",
  region: process.env.REGION,
});

module.exports = {
  S3,
  AWS_BUCKET: process.env.BUCKET,
};
