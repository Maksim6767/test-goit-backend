const {Router} = require('express');
const {
    createUser,
    getUserList,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../controllers');
const {
    checkUserId,
    checkCreateUserData,
    checkUpdateUserData,
} = require('../middlewares/usermiddleware');

const router = Router();

router.post('/', checkCreateUserData, createUser);
router.get('/', getUserList);
router.get('/:id', checkUserId, getUserById);
router.patch('/:id', checkUserId, checkUpdateUserData, updateUserById);
router.delete('/:id', checkUserId, deleteUserById);

module.exports = router;