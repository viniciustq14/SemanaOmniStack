const Dev = require('../models/dev');
const parseStringToArray=require('./uteis/ParseStringToArray');
module.exports={
    async indexedDB(req,res){
        const {latitude,longitude,techs} =req.query;
        const techsArray=parseStringToArray(techs);
        const devs= await Dev.find({
            techs:{
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordenate:[longitude,latitude]
                    },
                    $maxDistance:10000,
                }
            }
        });

        return res.json({dev});
    }


};
