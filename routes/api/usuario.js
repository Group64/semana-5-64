const router = require('express').Router();
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth')

router.get('/list', auth.verificarAdministrador, usuarioController.list);
router.post('/register', auth.verificarAdministrador, usuarioController.register);
router.put('/update', auth.verificarAdministrador, usuarioController.update);
router.post('/login', usuarioController.login);

module.exports = router;