const express = require('express');
const { PORT } = require('./config/server');
const cors = require('cors');
const routes = require('./routes');

const app = express();
require('./config/mongoose');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));