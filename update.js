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
  var sql =
    "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result + result.affectedRows);
  });
});
