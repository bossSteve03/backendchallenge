require('dotenv').config();
const app = require('./index.js');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is now up and running, ready to listen on port ${port}`)
})
