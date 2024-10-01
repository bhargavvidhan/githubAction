const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send([{ name: 1, value: 'one' }, { name: 2, value: 'two' }, { name: 3, value: 'three' }]);
});



const port = 8080;

app.set('port', process.env.PORT);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});