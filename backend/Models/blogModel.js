import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },

    subTitle: {
        type: String,
        required: [true, 'sub title is required']
    },

    studyTime: {
        type: Number,
        default: 5
    },

    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },

    typeBlog: {
        type: String,
        enum: ['blog', 'news']
    },


    content: [{
        heading: {
            type: String,
            trim: true
        },
        text: {
            type: String,
            trim: true
        },
        image: {
            url: {
                type: String,
            },
            alt: {
                type: String,
                trim: true
            },

        },

        catId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true

        }
    }]

}, { timestamps: true })


const Blog = mongoose.model("Blog", blogSchema)

export default Blog