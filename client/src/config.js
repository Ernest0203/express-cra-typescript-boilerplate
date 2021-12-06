const dev = {
  apiUrl: 'http://localhost:2000/',
  socketUrl: 'ws://localhost:2000/'
}
const prod = {
  apiUrl: 'http://localhost:2000/'
}

export default process.env.NODE_ENV === 'production' ? prod : dev;
