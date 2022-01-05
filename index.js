const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("This is sample NodeJS App.");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
    console.log("Environment Variables");
    console.log("========================");
    console.log(process.env);
});
