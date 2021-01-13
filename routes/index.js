const routerx = require('express-promise-router');

const perfilRouter = require('./perfil');
const usuarioRouter = require('./usuario');




const router = routerx();


router.use('/perfil', perfilRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;