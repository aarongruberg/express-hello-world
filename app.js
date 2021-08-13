const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// replacing this function
//app.get("/", (req, res) => res.send("Hello there!"));

// with this one to log header data to the console
app.get("/", (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.send("Hello from Render!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
