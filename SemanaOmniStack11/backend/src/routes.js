const express=require('express');
const ongController=require('./controllers/ongController')
const incidentController=require('./controllers/incidentController');
const profileCotroller=require('./controllers/profileController');
const sectionCotroller=require('./controllers/sectionController');
const routes =express.Router();

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.post('/sections',sectionCotroller.create)

routes.get('/porfile',profileCotroller.index);

routes.get('/incidents',incidentsController.index);
routes.post('/incidents',incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);

module.exports=routes;