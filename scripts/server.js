// IMPORT DEPENDENCIES
// --------------------------------------------------------------
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import io from 'socket.io';
import http from 'http';
import path from 'path';

// SET MONGODB WITH MONGOOSE
// --------------------------------------------------------------

// leveraged mongoose promise with ES6 promise
mongoose.Promise = Promise;

// mongolab cloud URI
const labURI = '';
const localURI = 'mongodb:http//localhost/nytreact';
// connect to mongodb with mongoose
mongoose.connect(localURI);
const db = mongoose.connection;

// on error, console log out error
db.on('error', (err) => console.log(err));

// on success, console log a message
db.on('open', () => console.log('successfully connected to mongodb!'));

// CONFIGURING EXPRESS
// --------------------------------------------------------------

// create new instance of express app
const app = express();
const port = process.env.PORT || 3000;

// express midware for parsing req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

// express midware for http request other than get/post
app.use(methodOverride('_method'));

// serve static files such as js and css
app.use(express.static(path.join(__dirname, '/public')));

// handle HTTP request with router
import apiRouter from './controllers/api.js';

app.use('/', apiRouter);

// CONFIGURING SOCKET.IO
// --------------------------------------------------------------

// capture app's server object with http
const server = http.createServer(app);

// allow socket.io to listen on server
const socket = io(server);

// handle socket request
import notificationSocket from './sockets/notification.js';
const notification = notificationSocket(socket);

// START SERVER
// --------------------------------------------------------------
server.listen(() => console.log(`listening to port: ${port}`))

