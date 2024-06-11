import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello there!');
})

app.get('/about', (req, res) => {
    res.send('Testing Express...');
})

app.listen(port, () => {

    console.log('App listening on port: ' + port);

}); 