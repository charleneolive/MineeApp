
// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const crypto = require('crypto');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const GridFsStorage = require('multer-gridfs-storage');
const bodyParser = require('body-parser');
// build in module from node
const path = require('path');

require('dotenv').config();
// importing files
const mywallRouter = require('./routes/mywall');
const profileRouter = require('./routes/profile');
// Define Global Variables
const app = express();
const log = console.log;
// need to locate the port
const PORT = process.env.PORT || 8080; // Step 1


// Step 2
// point whereever we are running the application
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
    useNewUrlParser: true
});
const connection= mongoose.connection;

// Configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
// need to have the right configuration
app.use('/mywall', mywallRouter);
app.use('/profile', profileRouter);

// Step 3
//  need to check if the app is in production
// need build folder in order to put react app into own server
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));
// any order route that the user goes that is not related to the previously configured route, then keep sending them the application
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

let gfs
connection.once('open',()=> {
    // Init stream
    gfs= Grid(connection.db,mongoose.mongo);
    gfs.collection('uploads');
    console.log('MongoDB database connection established successfully')
})

// Create storage object
const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    file:(req,file)=> {
        return new Promise((resolve,reject)=> {
            crypto.randomBytes(16,(err,buf)=> {
                if(err){
                    return reject(err);
                }
                const filename=file.originalname;
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            })
        })
    }
})

const upload = multer({storage});

app.post('/upload',upload.single('file'),(req,res,err)=> {
    if(err) {
        console.log(err)
    }
    res.status(201).send()
})

app.get('/file/:filename',(req,res)=> {
    // get filename from url
    gfs.files.findOne({filename:req.params.filename},(err,file)=> {
        console.log(file)
        // check if file    
        if(!file || file.length===0) {
            return res.status(404).json({
                err:'No file exists'
            })
        }

        // file exists
        return res.json(file)
    })
})

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});