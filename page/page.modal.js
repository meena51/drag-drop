import mongoose from 'mongoose';
const {Schema} = mongoose;

const Page = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
    },
    slug:{
        type: String,
        required: true
    },
    content: Object,
},
{
    timestamp: true
});

export default mongoose.model('Pages', Page);