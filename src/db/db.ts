import mysql from 'mysql2';

function getDBConnection(): mysql.Connection {
  const {
    MYSQL_HOST: HOST,
    MYSQL_USER: USER,
    MYSQL_PASSWORD: PASSWORD,
    MYSQL_DB: DB,
  } = process.env;
  
  var dbConnection: mysql.Connection;
  
  dbConnection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB
  })
  
  dbConnection.connect();

  return dbConnection;    
}

export default getDBConnection;