const {Router}=require('express');
const axios=require('axios');
const devController=require('./controllers/DevController');
const searchController=require('./controllers/SearchController');
const routes=Router();

routes.post('/devs', devController.store);
routes.get('/devs',devController.index);
routes.get('/search',searchController.index);


module.exports=routes;