const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: 'scon-meal', 
    api_key: '871195419121395', 
    api_secret: 'L967jXNeOVogUowpbKwwahFuVOU' 
}); 
module.exports = cloudinary;