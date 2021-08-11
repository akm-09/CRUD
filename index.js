const express = require('express'),
mongoose = require('mongoose'),
app = express();
require('dotenv').config();

let router = require('./routers/routers');

app.set('port', process.env.PORT || 9000)
let url = `mongodb://localhost/myDb`;      
let configObj = { useNewUrlParser:true, useUnifiedTopology:true }

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/posts', router);

async function runApp() {
    try {
        await mongoose.connect(url, configObj);

        app.listen(app.get('port'), () => {
            console.log(`Server is running. Port: ${app.get('port')}`);
        });

    } catch (error) {
        console.log(error);
    }
}

runApp();