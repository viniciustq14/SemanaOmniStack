const axios = require('axios');
const Dev = require('../models/dev');
const parseStringToArray=require('./uteis/ParseStringToArray');

module.exports = {
    async index(req,res){
        const devs= await Dev.find();

        return res.json(devs);
    },


    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {


            const apiResponse = await axios.get('https://api.github.com/users/${github_username}');

            const { name = login, avatar_url, bio } = apiResponse.data;
            //console.log(name,avatar_url,bio,github_username);
            const techsArray = parseStringToArray(techs);
            const location = {
                type: 'Point',
                coordenate: [latitude, longitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        return res.send(dev);
    }
};