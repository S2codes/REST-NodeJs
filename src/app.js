const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');
const studentRouter = require('./routers/route')

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`listing at ${port}`);
})