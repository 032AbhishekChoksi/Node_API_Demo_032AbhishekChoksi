// console.log("Server running");
const express = require("express");
const app = express();

// Define middleware In APP (Use: Data to JSON convert)
app.use(express.json());

// Initialization Routes
app.use("/api", require("./routes/app.routes"));

// Listen for Requests
let PORT = 4000;
app.listen(PORT, function () {
    console.log("Ready to go!");
    console.log("PORT Number: " + PORT);

});