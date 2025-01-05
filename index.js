const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! ci-cdgit ');
});

app.get('/user', (req, res) => {
    res.send('hii jai sri ram');
});
app.get('/user/check', (req, res) => {
    res.send('hii working fine raj srivastava do it.. see');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});