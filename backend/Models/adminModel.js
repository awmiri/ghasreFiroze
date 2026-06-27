import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: [true, "phone number is required"],
        unique: [true, "phone number is allready exist"]
    },
    fullName: {
        type: String,
        required: [true, "full name is required"]
    },
    permission: {
        type: [String],
        enum: ["file", "user", "project", "blog", "admin", 'transactiontype', 'collaboration'],
        default: []
    },
    role: {
        type: String,
        enum: ["admin", 'superAdmin'],
        default: "admin"
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })


AdminSchema.pre('save', function (next) {

    if (this.role === superAdmin && this.permission.length === 0) {
        this.permission = ["file", "user", "project", "blog", "admin", 'transactiontype', 'collaboration']
    }
    return next
})

const Admin = mongoose.model("Admin", AdminSchema)

export default Admin
