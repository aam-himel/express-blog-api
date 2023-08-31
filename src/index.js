const app = require('./app');

const port = process.env.port || 5050;

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})