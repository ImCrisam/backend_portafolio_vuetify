const routerx = require('express-promise-router');
const perfilController = require('../controllers/PerfilController');



const router = routerx();

router.get('/query', perfilController.query);

router.put('/activate', perfilController.activate);
router.put('/deactivate', perfilController.deactivate);

router.get('/list', perfilController.list);


module.exports = router;