const express = require('express');

const app = express();

app.listen(5670, () => {
    console.log("Listening on port 5670");
});