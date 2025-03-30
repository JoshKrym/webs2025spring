'use server'
import fs from 'fs'

export default async function handler (req, res){
    console.log(req);
    console.log(res);
    //fs.writeFileSync('./test/json', JSON.stringify);
    //return res.status(200).json({});
}
