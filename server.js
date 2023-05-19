const express = require('express');
const cors = require('cors');
require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan'); //Logger
const mongoose = require('mongoose');

dotenv.config({ path: './.env' }); 

const userRoutes = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev')); 

mongoose
  .connect(process.env.DB_HOST)
  .then((con) => {
    console.log('Mongo DB successfully connected..'.bgYellow)
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  req.time = new Date().toLocaleString('uk-UA');

  next();
});

app.use('*', (req, res) => {
  res.status(404).json({
    msg: 'Resource not found..'
  })
});

app.use((err, req, res, next) => {
  const msg = Array.isArray(err.message) ? err.message.join(';') : err.message;
  res.status(err.status || 500).json({
    msg,
    stack: err.stack
  })
});

const port = 3000;

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server up and running on port: ${port}`.bgBlue);
});
