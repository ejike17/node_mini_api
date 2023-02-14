const express = require('express');
const app = express();

const coders = {
  Marshal: {
    age: 29,
    birthName: "Code Marshal",
    birthLocation: "Lagos Nigeria",
  },
  John: {
    age: 24,
    birthName: "Ejike John",
    birthLocation: "Anambra Nigeria",
  },
  Ejike: {
    age: 24,
    birthName: "Anumba Chekwube",
    birthLocation: "New York, USA",
  },
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:coderName', (req, res) => {
    const codersName = req.params.coderName;
    if (coders[codersName]) {
        res.json(coders[codersName])
    } else {        
        res.json(coders['Ejike'])
    }
})

app.listen(8080, () => {
    console.log('Port is listening on port 8080...');
})