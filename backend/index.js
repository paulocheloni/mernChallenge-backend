const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const router = ('./routes.js');

app.use(bodyParser.json);

app.all(/\//, router);

app.listen(3030, 'rodando na porta 3030');
