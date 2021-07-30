const env = {
    database: "agents",
    username: "root",
    password: "irisgroup",
    host: "localhost",
    port: "3306", // Mssql port : 1433 , mysql port : 3306
    dialect: "mysql",
    srvPort: "3000",
    checkIPaddress: "https://api.ipify.org?format=json",
    ethusdt:'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1d&limit=1000',
    ethusdt:'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1d&limit=1000',
    secret: "@#SDfionli1818685*-+sfsf",
    storageUpload: "./public/uploads",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    expiresIn: "1h", //86400 = expires in 24 hours
    expiresTime: "3600",
  };
  module.exports = env;