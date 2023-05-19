const { catchAsync } = require('../utils');
const User = require('../models/userModel');

/**
 * 1. Вытягиваем password и распыляем остальные проперти из тела запроса 
 * 2. Генерируем соль (вынесли в хук Модели)
 * 3. Хешируем пароль (вынесли в хук Модели)
 * 4. Создаем нового юзера в БД
 * 5. Обнуляем пароль
 * 6. Выводим нового юзера в ответе
*/

const createUser = catchAsync(async (req, res) => {
    const newUser = await User.create(req.body);
      
    newUser.password = undefined;
  
    res.status(201).json({
      user: newUser,
    });
});

module.exports = createUser;