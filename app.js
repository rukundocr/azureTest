const express = require("express")
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use(express.json());

app.get("/post", (req, res) => {
    res.status(200).json({ message: "endpoint is Live ", status: true })
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})



app.listen(port, () => console.log(`server listening on port ${port}`))
