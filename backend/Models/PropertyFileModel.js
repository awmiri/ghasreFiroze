import mongoose from "mongoose";

const proPertyFileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },

    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 2000
    },
    brand: {
        type: String,
        required: [true, 'brand is required ']
    },

    propertyType: {
        type: String,
        enum: ['apartment', 'villa', 'office', 'shop', 'land', 'building', 'warehouse', 'restaurant', 'hotel'],
        required: true
    },

    address: {
        province: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            required: false
        },
        street: {
            type: String,
            required: false
        },
        alley: {
            type: String,
            required: false
        },
        plaque: {
            type: Number,
            required: false
        },
        postalCode: {
            type: String,
            required: false
        },
        coordinates: {
            lat: { type: Number, default: 0 },
            lng: { type: Number, default: 0 }
        }
    },

    floor: {
        type: Number,
        required: false,
        min: -5,
        max: 100
    },

    totalFloors: {
        type: Number,
        default: 1,
        min: 1
    },

    area: {
        type: Number,
        required: true,
        min: 1
    },

    landArea: {
        type: Number,
        required: false,
        min: 1
    },

    parking: {
        count: {
            type: Number,
            default: 0,
            min: 0
        },
        list: [{
            type: {
                type: String,
                enum: ['covered', 'open', 'basement', 'roof', 'underground', 'mechanical'],
                default: 'open'
            },
            number: {
                type: Number,
                min: 1
            },
            area: {
                type: Number,
                default: 0
            },
            isOwned: {
                type: Boolean,
                default: true
            }
        }]
    },

    units: {
        total: {
            type: Number,
            default: 1,
            min: 1
        },

        byFloor: [{
            number: {
                type: Number,
                required: true
            },
        }],
    },

    rooms: {
        bedrooms: {
            type: Number,
            default: 0,
            min: 0
        },
        livingRooms: {
            type: Number,
            default: 1,
            min: 1
        },
        toilets: {
            type: Number,
            default: 1,
            min: 0
        },
        bathrooms: {
            type: Number,
            default: 1,
            min: 0
        },
        kitchens: {
            type: Number,
            default: 1,
            min: 0
        },
        balconies: {
            type: Number,
            default: 0,
            min: 0
        }
    },

    features: [{
        type: String,
        enum: [
            'elevator', 'parking', 'warehouse', 'pool', 'gym', 'sauna', 'jacuzzi',
            'fireplace', 'balcony', 'terrace', 'garden', 'security', 'cctv',
            'intercom', 'central_heating', 'central_cooling', 'smart_home',
            'solar_panel', 'water_well', 'emergency_power', 'fire_extinguisher',
            'playground', 'clubhouse', 'landscaping', 'underground_parking'
        ]
    }],

    materials: {
        type: Map,
        of: new mongoose.Schema({
            name: { type: String, required: true },
            category: {
                type: String,
                enum: ['structural', 'finishing', 'mechanical', 'electrical', 'plumbing', 'insulation']
            },
            quality: {
                type: String,
                enum: ['premium', 'standard', 'economy'],
                default: 'standard'
            },
            description: String,
            brand: String
        }),
        default: {}
    },

    pricing: {
        price: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        pricePerMeter: {
            type: Number,
            default: 0
        },
        isNegotiable: {
            type: Boolean,
            default: true
        },

    },

    year: {
        type: Number,
        required: true,
        min: 1300,
        max: new Date().getFullYear() + 5
    },

    propertyStatus: {
        type: String,
        enum: ['new', 'under_construction', 'renovated', 'old', 'pre_sale'],
        default: 'old'
    },

    attachments: [{
        type: {
            type: String,
            enum: ['image', 'video', 'document', '3d_model']
        },
        url: {
            type: String,
            required: true
        },
        title: String,
        isMain: {
            type: Boolean,
            default: false
        }
    }],

    isPublished: {
        type: Boolean,
        default: false
    },
    viewCount: {
        type: Number,
        default: 0
    },

    transactionType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransactionType',
        required: true
    },

    verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },

    publishDate: Date,
    expiryDate: Date,

}, {
    timestamps: true
});


const proPertyFile = mongoose.model("proPertyFile", proPertyFileSchema)
export default proPertyFile