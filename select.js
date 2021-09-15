var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT name, address FROM customers";

  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    console.log(result[2].name);
  });
});
