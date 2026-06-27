import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "fullName is required"],
    },

    phoneNumber: {
        type: String,
        required: [true, "phone number is required"],
        unique: [true, "phone number is allready exist"],
        validate: {
            validator: function (v) {
                return /^(0|0098|98)?(9\d{9})$/.test(v)
            },
            message: "phone number is no current"
        }
    },

    role: {
        type: String,
        enum: ['contractor', 'user', 'agent'],
        default: 'user'
    },

    permission: {
        type: [String],
        enum: ['file', 'project', 'read'],
        default: ['read']
    },
    contractorDetails: {
        companyName: String,
        nationalId: String,
        licenseNumber: String,
        experience: Number,
        specialties: [String]
    },


    collaboration: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collaboration",
    },
    collaborationStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected', null],
        default: null
    },

    isActive: { type: Boolean, default: true },


}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User
