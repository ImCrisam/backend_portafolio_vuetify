const routerx = require('express-promise-router');

const perfilRouter = require('./perfil');




const router = routerx();


router.use('/perfil', perfilRouter);

module.exports = router;