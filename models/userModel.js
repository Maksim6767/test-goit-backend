const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, 
    },
    tweets: {
        type: Number,
        required: true,
    },
    followers: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true });

userSchema.pre('save', async function (next) { 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
});

userSchema.methods.checkPassword = (candidate, hash) => bcrypt.compare(candidate, hashedPassword);

const User = mongoose.model('User', userSchema);

module.exports = User;
