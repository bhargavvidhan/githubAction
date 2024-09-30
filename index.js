const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send([{ name: 1, value: 'one' }, { name: 2, value: 'two' }]);
});



const port = 3000;

app.set('port', process.env.PORT || 3000);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});