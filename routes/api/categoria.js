const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth')


router.get('/list', auth.verificarAlmacenero, categoriaController.list);
router.post('/add', auth.verificarAlmacenero, categoriaController.add);
router.put('/update', auth.verificarAlmacenero, categoriaController.update);
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate);
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate);

// router.get('/list', categoriaController.list);
// router.post('/add', categoriaController.add);
// router.put('/update', categoriaController.update);
// router.put('/activate', categoriaController.activate);
// router.put('/deactivate', categoriaController.deactivate);


module.exports = router;