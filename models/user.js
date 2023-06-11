import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, required: true,unique:true },
    credits: { type: Number, default: 100 },
    expert: { type: Date },
    holdings: {
        type: Map,
        default: {},
    }
})

userSchema.pre("save", async function (next) {
    next();
})

var User = mongoose.model('User', userSchema);
export default User
