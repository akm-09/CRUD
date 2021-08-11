const Router = require('express');
const PostController = require('../controllers/postController.js');

let router = new Router();

router.post('/create_post', PostController.create);
router.get('/get_all_post', PostController.getAll);
router.get('/get_one_post/:id', PostController.getOne);
router.put('/update_post/:id', PostController.update);
router.delete('/delete_one_post/:id', PostController.delete);

module.exports = router;