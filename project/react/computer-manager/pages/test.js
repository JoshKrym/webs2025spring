'use strict'
const fs = require('fs')

export default async function handler (req, res){
    console.log(req);
    console.log(res);
    fs.readFileSync('./test/json', req);
    //return res.status(200).json({});
}
