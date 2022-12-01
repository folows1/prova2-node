const express = require('express');
const customerRouter = require('./router/customer.router');
const productRouter = require('./router/product.router');
const orderedRouter = require('./router/ordered.router');

const app = express();
const port = 3001;
app.use(express.json());

app.use('/api/v1/customer', customerRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/ordered', orderedRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

