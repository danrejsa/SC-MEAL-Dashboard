
const express = require('express');
const router = express.Router();
const postUser = require('../controller/user/postUser');
const postLogin = require('../controller/user/loginAuth');
const postProjectInfo = require('../controller/project/postProject');
const postIndicators = require('../controller/indicators/postIndicators');
const getIndicators = require('../controller/indicators/getIndicators');
const postToolkits = require('../controller/toolkits/postToolkits');
const fileUpload = require('../Middleware/uploadFile');
const postMovs = require('../controller/mov/postMovs');
const getAllproject = require('../controller/project/getAllproject');
const viewIndicators = require('../controller/indicators/viewIndicators');
const updateIndictaors = require('../controller/indicators/updateIndictaors');
const getOneIndicator = require('../controller/indicators/getOneIndicator');
const bodyParser = require('body-parser');
const {uploadToS3} = require('../Middleware/s3')

router.use(bodyParser.json());




router.post('/register', postUser);
router.post('/login', postLogin);
router.post('/create', postProjectInfo);
router.post('/create-indicator', postIndicators);
router.get('/get-indicators', getIndicators);
router.post('/toolkits',  fileUpload, uploadToS3, postToolkits);
router.post('/movs', fileUpload, postMovs);
router.get('/projects', getAllproject);
router.get('/view-indicators', viewIndicators);
router.put('/update-indicator/:id', updateIndictaors);
router.get('/get-indicator/:id', getOneIndicator)



module.exports = router;
