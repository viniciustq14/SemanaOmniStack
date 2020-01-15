const {Router}=require('express');
const axios=require('axios');

const routes=Router();

routes.post('/devs', (req,res)=>{
    const{github_username, techs} =req.body;
    const apiResponse=await axios.get('https://api.github.com/users/${github_username}');
    const {name=login,avatar_url,bio}=apiResponse.data;
    //console.log(name,avatar_url,bio,github_username);
    const techsArray=techs.split(',').map(tech=>tech.trim());
   const dev= await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs:techsArray,
    })
    
    return res.send(dev);
});



module.exports=routes;