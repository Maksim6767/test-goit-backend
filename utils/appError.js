// Кастомный error (паттерн)
class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
};

module.exports = AppError;