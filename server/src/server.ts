import express, {Application} from 'express';
import routes from './routes/index';
import errorHandler from './middlewares/errorHandler';

const app: Application = express(); 

app.use(express.json());
app.use(routes);
app.use(errorHandler);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../', '../', 'client', 'build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', '../', 'client', 'build', 'index.html'));
//   });
// }

export default app;