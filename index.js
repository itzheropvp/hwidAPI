const express = require('express');
const app = express();

const listHwid = {}

app.get('/', (req,res) => {
    res.json({'message': 'well come'}) 
});

app.get('/verify/user', (req,res) => {
    const hwid = req.query.hwid;
    if (!hwid) return res.json({message:'Did you forgot to put the HWID?'});

    listHwid.push(hwid)

    res.status(200).json({
        message:'received data of hwid',
        data: {
            hwid: hwid,
            isAlreadyUsed: false,
        }
    })
});

app.listen(process.env.PORT, () => {
    console.log('listening server')
});