const routerx = require('express-promise-router');
const proyectoController = require('../controllers/ProyectoController');



const router = routerx();

router.get('/query', proyectoController.query);

router.put('/activate', proyectoController.activate);
router.put('/deactivate', proyectoController.deactivate);

router.get('/list', proyectoController.list);


module.exports = router;