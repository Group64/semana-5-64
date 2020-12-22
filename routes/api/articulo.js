const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth')


// router.get('/list', auth.verificarAlmacenero, articuloController.list);
router.post('/add', auth.verificarAlmacenero, articuloController.add);
router.put('/update', auth.verificarAlmacenero, articuloController.update);
router.put('/activate', auth.verificarAlmacenero, articuloController.activate);
router.put('/deactivate', auth.verificarAlmacenero, articuloController.deactivate);

router.get('/list', articuloController.list);
// router.post('/add', articuloController.add);
// router.put('/update', articuloController.update);
// router.put('/activate', articuloController.activate);
// router.put('/deactivate', articuloController.deactivate);


module.exports = router;