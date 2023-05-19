1. Застосунок дозволяє користувачу реалізувати картки юзерів.
2. За допомогою REST API є можливість створювати, получати всі картки, получати або оновлювати окремі картки, а також видаляти їх.
3. Во всіх контролерах відловлюються помилки за допомогою кастомної обгортки catchAsync.
4. Збереження даних юзера відбувається в Mongo DB в наступних полях: user, tweets, followers,
   avatar. Додатково додані обов'язкові поля, такі як: email, password.
5. Для того, щоб пароль не можна було прочитати, реалізовано хешування та перевірка паролю.
6. При створенні та оновленні карток відбувається валідація даних юзера, за допомогою бібліотеки Joi.
7. Для запросів з динамічною частиною реалізована перевірка валідності id та наявності юзера.
8. Клас АppError дозволяє повертати код та текст повідомлення помилок.