// This file will be for updating clicks to the link shortened by the user
// it will use get request

import express from 'express';
import Url from '../models/Url.js';
const router = express.Router();

router.get('/:urlId',async (req, res) => {
    //use mongoose method updateOne
    try{    
        const url = await Url.findOne({urlId: req.params.urlId});
    if(url){
        await url.updateOne({urlId:req.params.urlId},
            {$inc: {clicks: 1}});
            return res.redirect(url.origUrl);
        }
    else{
        res.status(404).json("No URL Found");
    }}
    catch(err){
        console.log(err);
        res.status(500).json('Server Error');
    }
})

export default router;