const routerx = require('express-promise-router');

const perfilRouter = require('./perfil');
const usuarioRouter = require('./usuario');
const proyectoRouter = require('./proyecto');
const estudioRouter = require('./estudios');




const router = routerx();


router.use('/perfil', perfilRouter);
router.use('/usuario', usuarioRouter);
router.use('/proyecto', proyectoRouter);
router.use('/estudios', estudioRouter);

module.exports = router;