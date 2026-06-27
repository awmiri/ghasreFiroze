import mongoose from "mongoose";


const collaborationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    requestType: {
        type: String,
        enum: ['contractor', 'buyer', 'seller', "tenant", 'agent'],
        required: [true, 'requestType is Required']
    },

    status: {
        type: String,
        enum: ['pending', 'reviewing', 'approved', 'rejected'],
        default: 'pending'
    },

    desc: {
        type: String
    },

    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },

    reviewedAt: Date,

    details: {
        experience: String,
        specialties: [String],
        previousProjects: [String],
        references: [{
            name: String,
            relationship: String
        }]
    },

})