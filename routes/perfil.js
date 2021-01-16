const routerx = require('express-promise-router');
const perfilController = require('../controllers/PerfilController');



const router = routerx();

router.get('/query', perfilController.query);
router.get('/listLanguages', perfilController.listLanguages);
router.get('/listTools', perfilController.listTools);

router.get('/redes', perfilController.listRedSocial);


router.put('/activate', perfilController.activate);
router.put('/deactivate', perfilController.deactivate);
module.exports = router;