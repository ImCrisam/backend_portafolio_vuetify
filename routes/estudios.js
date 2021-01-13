const routerx = require('express-promise-router');
const EstudiosController = require('../controllers/EstudiosController');



const router = routerx();

router.get('/query', EstudiosController.query);

router.put('/activate', EstudiosController.activate);
router.put('/deactivate', EstudiosController.deactivate);

router.get('/list', EstudiosController.list);


module.exports = router;