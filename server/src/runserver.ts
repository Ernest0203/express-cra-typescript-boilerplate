import config from 'config';
import mongoose from 'mongoose';
import server from './server';

const gracefulShutdownTime: number = 15000;
let ONLINE: boolean = true;

const mongoUri = config.get('db.mongo.uri');
mongoose.connect(mongoUri, {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(() => console.info('MongoDB connected...'))
  .catch(err => console.info(err));

//postgres.authenticate().
//  then(() => console.info('Postgres connected'));

console.info('NODE_ENV', process.env.NODE_ENV);
const HOST = config.get('server.host');
const PORT = config.get('server.port');

server.get('/health-check', (req, res) => {
  ONLINE ? res.send('OK') : res.status(503).send('Server shutting down');
});

server.get('/long-response', (req, res) =>
  setTimeout(() => res.send('Finally! OK'), gracefulShutdownTime),
);

const instance = server.listen(PORT, HOST);

instance.on('listening', () => console.info('Available on:', `${HOST}:${PORT}`));
instance.on('error', (error) => console.error(error));

const gracefulShutdownHandler = function gracefulShutdownHandler(signal) {
  console.log(`⚠️ Caught ${signal}, gracefully shutting down`);
  ONLINE = false;

  setTimeout(() => {
    console.log('Shutting down application');
    // stop the server from accepting new connections
    instance.close(function () {
      console.log('All requests stopped, shutting down');
      // once the server is not accepting connections, exit
      process.exit();
    });
  }, 0);
};

// The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
process.on('SIGINT', gracefulShutdownHandler);

// The SIGTERM signal is sent to a process to request its termination.
process.on('SIGTERM', gracefulShutdownHandler);

module.exports = instance;