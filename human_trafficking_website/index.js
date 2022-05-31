// Author: David Murdock
// Descr: A website to help [STOP] Human Trafficking (including provided data and sources)

// STARTUP NODE STUFF
const PORT = process.env.PORT || "3000";
let hostname = process.env.RDS_HOSTNAME || "127.0.0.1";
let rds_port = process.env.RDS_PORT || "5432";
let rds_db_name = "human_trafficking";
let rds_username = process.env.RDS_USERNAME || "postgres";
let rds_password = process.env.RDS_password || "1El2Is5us10!";


// import a module
const express = require("express"); // could use let (gives us access to the express library)
// const serveStatic = require("serve-static");


// create an object/instance of type express
const app = express();


// Making it possible to use EJS
app.set("view engine","ejs");

// making it possible to use POST methods
app.use(express.urlencoded({extended:true}));

let path = require("path");


// serving static files using Express (connecting to the bootstrap)
app.use(express.static("public"));
// app.use("/static", express.static(path.join(__dirname, "css")));


// set up database connection
const knex = require("knex") (
{
    client: "pg",
    connection: {
        host: hostname,
        user: rds_username,
        password: rds_password,
        database: rds_db_name,
        post: rds_port,
    },
});


// Creating a path to the index.html file
app.get("/", (req, res) => {
    // res.send('[STOP] Human Trafficking');

    knex.select().from("trafficking_data").orderBy("case").then(
        // when knex.select runs, "result" will be an array with all of the results in the table
        (result) => {
            res.render("index",{aCases: result}); // the "result" array is now the data's array in the ejs file
        } // putting the results of the table into an array 
    ).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

// rerouting "/home" to "/" (index.js (home page))
app.get("/home",(req,res)=>{
    res.redirect("/");
});


// Creating a path to the viewdata.ejs file
app.get('/viewdata', (req, res) => {
    // allows you to use the words of a SQL statement as Javascript functions almost :)
    knex.select().from("trafficking_data").orderBy("case").then(
        // when knex.select runs, "result" will be an array with all of the results in the table
        (result) => {
            res.render("viewdata",{aCases: result}); // the "result" array is now the data's array in the ejs file
        } // putting the results of the table into an array 
    ).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

// Creating a path to the index.ejs file
app.get('/index', (req, res) => {
    // allows you to use the words of a SQL statement as Javascript functions almost :)
    knex.select().from("trafficking_data").orderBy("case").then(
        // when knex.select runs, "result" will be an array with all of the results in the table
        (result) => {
            res.render("viewdata",{aCases: result}); // the "result" array is now the data's array in the ejs file
        } // putting the results of the table into an array 
    ).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});


app.get("/addcase",(req,res)=>{
    res.render("addcase");
});



// post method to add a case
app.post("/addcase", (req,res)=>
{
    // let iCase = req.body.case;
    // let dDateMissing = req.body.date_missing;


    // let sDonutName = req.body.donut_name;
    // let iPrice = req.body.price;
    // let sType = req.body.type;

    knex("trafficking_data").insert(req.body).then((results) => {
        res.redirect("/viewdata");
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });

    // CAN USE THIS IF YOU DON'T WANT TO DO EACH INDIVIDUAL ATTRIBUTE (FORM INPUT)
    // AS LONG AS THE NAMES/ID'S OF THE FORM INPUTS ARE THE EXACT SAME AS THE POSTGRES DATABASE COLUMN NAMES :)
    // knex("donuts").insert(req.body).then(mybands => {
    //     res.redirect("/displaydonuts");
    // });
});


// form to edit a case
app.get("/edit/:caseid", (req,res) => {
    // allows you to use the words of a SQL statement as Javascript functions almost :)
    knex.select().from("trafficking_data").where("case",req.params.caseid).then((result) => {
            res.render("editcase",{aCase: result}); // the "result" "array" is now the aCase array in the ejs file
            // aCase is only going to return the one record that you're editing
        } // putting the results pulled from the database into an array 
    ).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

// post method to edit a case
app.post("/edit/:caseid", (req,res) => {
    // allows you to use the words of a SQL statement as Javascript functions almost :)
    knex("trafficking_data").where("case",req.params.caseid).update({
        // changing/updating/editing the values in the file
        date_missing: req.body.date_missing,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age_at_missing: req.body.age_at_missing,
        city: req.body.city,
        state: req.body.state,
        gender: req.body.gender,
        race: req.body.race
        
    }).then((result) => {
            res.redirect("/viewdata"); // the "result" "array" is now the aCase array in the ejs file
        }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

// post method to delete a case
app.get("/delete/:caseid", (req,res) => {
    knex("trafficking_data").where("case", req.params.caseid).del().then((result)=> { // delete the record
        res.redirect("/viewdata")}).catch(err => {
            console.log(err);
            res.status(500).json({err});
        }); // go back to the viewdata route (to get to the viewdata.ejs page)
});


// sends a message to the conosle when the website goes live
app.listen(PORT, () => console.log("Website active"));
