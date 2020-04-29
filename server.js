const express = require('express');
const app = express();



let port = 8000;
app.listen(port, () => console.log('Listening on port ' + port));