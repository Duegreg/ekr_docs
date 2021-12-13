import express from 'express';
import router from './src/router.js';

const app = express();
const port = 9000;

app.listen(port, () => {
    console.log(`Backend is running on port ${port}.`);
});
app.use(express.json())
//app.use(express.urlencoded({ extended: true }));

app.use('/', router);