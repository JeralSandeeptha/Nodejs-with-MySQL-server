const express = require('express');
const cors = require('cors');

const bookRoutes = require('./routes/books');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

app.listen(4000, () => {
    console.log('Server is running at port 4000');
});