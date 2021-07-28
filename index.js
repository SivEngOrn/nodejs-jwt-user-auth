const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');

//import route
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log('Connected to Database')
);



//middle ware
app.use(express.json());

//route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log('Server is runing...'));
