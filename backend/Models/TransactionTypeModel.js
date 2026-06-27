import mongoose, { mongo } from "mongoose";


const transActionTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title for transaction requierd']
    },

    fields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: {},
        required: true

    },

    fieldsMetadata: {
        type: Map,
        of: new mongoose.Schema({
            label: String,
            fieldType: String,
            isRequired: Boolean,
            options: [String]
        }),
        default: {}

    }
})


const TransActionType = mongoose.model("TransAction", transActionTypeSchema)

export default TransActionType
