// Обертка для отлова ошибок (чтобы не писать везде try-catch)
module.exports = (fn) => (req, res, next) => {
    fn(req, res, next).catch((err) => next(err))
};