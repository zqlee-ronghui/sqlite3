const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

var db = new sqlite3.Database("monero.db", function(err) {
    if (err) throw err;
});
db.run("create table if not exists monero (user VARCHAR, area VARCHAR, time VARCHAR)", function(err) {
    if (err) throw err;
});

app.use(express.static('public'));

app.post('/monero_db', urlencodedParser, function (req, res) {
    var stmt = db.prepare("insert into monero(user, area, time) values(?, ?, ?)");
    stmt.run([req.body.user, req.body.area, req.body.time]);
    stmt.finalize();
    console.log(req);
    res.send("OK");
});

app.listen(3000, () => {
    console.log('http://locahost:3000');
});