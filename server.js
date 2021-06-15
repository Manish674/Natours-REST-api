const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/natours', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((err) => {
    try {
      console.log('db connected...');
    } catch (err) {
      console.log(err);
    }
  });

app.listen(8080, 'localhost', () => {
  console.log('Listening at port 8080');
});
