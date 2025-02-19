const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
