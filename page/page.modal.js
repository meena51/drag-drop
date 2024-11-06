import mongoose from 'mongoose';
const { Schema } = mongoose;

const PageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
    },
    slug: {
        type: String,
        required: true,
    },
    content: Object,
}, {
    timestamps: true  // Corrected option name
});

export default mongoose.model('Page', PageSchema);
