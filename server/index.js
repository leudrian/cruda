const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgame",
})

/**app.get("/", (req,res) => {
    let SQL =
    "INSERT INTO games { name, cost, category} VALUES { 'FAR CRY 5', '120', 'Ação' } ";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
});

app.get('/', (req, res) => {
    res.send("hello world")
});*/

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?,?,? )"

    db.query(SQL, [name, cost, category], (err, ressult) => {
        console.log(err);
    })
})

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from games";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else req.setEncoding(result);
    });
});

app.post("/register")

app.listen(3001, () => {
    console.log('rodado o servidor');
});