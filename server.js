const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
// const fetch = require('node-fetch');
require("dotenv").config();

const app = express();
const port = 3200;
const corsOption = {
  origin: true,
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};

app.use(cors(corsOption));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  
app.get('/likes', (req, res) => {
    axios.get('https://discuss.layer5.io/directory_items.json?period=all&order=likes_received')
        .then(response => {
            const data = response.data.directory_items;
            res.end(JSON.stringify({ data}))
           
    console.log("data fetched successfully");
  })
  .catch(error => {
    console.log(error);
  });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));