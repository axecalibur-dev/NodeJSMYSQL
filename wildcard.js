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
  var sql = "SELECT * FROM customers WHERE address LIKE '%1'";

  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});
