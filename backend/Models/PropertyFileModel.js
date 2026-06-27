import mongoose from "mongoose";

const specificationSchema = new mongoose.Schema({
    key: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const unitDetailSchema = new mongoose.Schema({
    unitNumber: { type: Number, required: true },
    floor: { type: Number, required: true },
    meterage: { type: Number, required: true },
    specifications: [specificationSchema],
    pricing: {
        price: { type: Number, required: true, default: 0 },
        rent: { type: Number, default: 0 },
        pricePerMeter: { type: Number, default: 0 }
    },
    attachments: [{ type: { type: String }, url: String, isMain: Boolean }],
    isAvailable: { type: Boolean, default: true }
});

const proPertyFileSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, trim: true, maxlength: 2000 },
    brand: { type: String, required: true },

    propertyType: {
        type: String,
        enum: ['apartment', 'villa', 'office', 'shop', 'land', 'building', 'warehouse', 'restaurant', 'hotel', 'garden'],
        required: true
    },
    dealType: {
        type: String,
        enum: ['sell', 'full_mortgage', 'mortgage_rent', 'pre_sell', 'swap'],
        required: true
    },

    year: { type: Number, required: true },
    landArea: { type: Number },
    buildingFacade: [{ type: String }],

    features: [{ type: String }],

    buildingSpecifications: [specificationSchema],

    address: {
        province: { type: String, required: true },
        city: { type: String, required: true },
        neighborhood: { type: String },
        street: { type: String },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    units: [unitDetailSchema],

    isPublished: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    transactionType: { type: mongoose.Schema.Types.ObjectId, ref: 'TransactionType', required: true }
}, {
    timestamps: true
});

proPertyFileSchema.index({ "address.neighborhood": 1, dealType: 1, propertyType: 1 })

proPertyFileSchema.index({ "units.specifications.key": 1, "units.specifications.value": 1 });
proPertyFileSchema.index({ "buildingSpecifications.key": 1, "buildingSpecifications.value": 1 });

proPertyFileSchema.index({ "address.coordinates": "2dsphere" });


const proPertyFile = mongoose.model("proPertyFile", proPertyFileSchema);
export default proPertyFile;