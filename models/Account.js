const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
})
// AccountSchema.virtual('batch',{
//     ref:'batches',
//     foreignField:'account',
//     localField:'_id'
//   })
//   AccountSchema.set('toObject', { virtuals: true });
//   AccountSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.models.Account || mongoose.model('Account',AccountSchema);