import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/studentRoute';

const app = express();
const PORT = 4000;

//  mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//  CORS setup
app.use(cors());

routes(app);

app.get('/' , (req, res) => {
    res.send(`Our student application is running on ${PORT}`);
  });
  
  app.listen(PORT, () => {
    console.log(`Our student application is running on ${PORT}`)
  });