
require('dotenv').config()
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const s3 = new S3({
    bucket_name: process.env.AWS_BUCKET_NAME,
    region: process.env.AWS_REGION,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    access_key: process.env.AWS_ACCESS_KEY
})

function uploadToS3 (files){
    
    const fileStream = fs.createReadStream(files);
    
    const uploadParams = {
        Bucket: s3.bucket_name,
        Body: fileStream,
        key: file.filename
    }

    return s3.upload(uploadParams).promise()
}
exports.uploadToS3 = uploadToS3;
