import express from 'express';
import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import { validateUrl } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../config/.env' });

const router = express.Router();

router.post(
    "/short", async(req,res)=>{
        const {origUrl} = req.body;
        const base = process.env.BASE;
        // generate unique ID
        const urlId = nanoid();
        if(utils.validateUrl(origUrl)){
            try{
                let url = await Url.findOne({origUrl});
                if(url){
                    res.json(url)
                }
                else{
                    // generate short url
                    const shortURL = `${base}/${urlId}`;
                    // store unique ID, original URL and short URL in database
                    url = new Url({
                        origUrl,
                        shortURL,
                        urlId,
                        date: new Date()
                    })
                    await url.save();
                    res.json(url);
                }
            }
            catch(err){
                console.log(err);
                res.status(500).json("Server error");
            }
    }
    else{
        console.log("Invalid URL");
        res.status(400).json("Invalid URL");
    }
})

export default router