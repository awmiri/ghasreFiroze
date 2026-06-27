import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'برند پروژه الزامی است'],
        trim: true,
        maxlength: 100
    },

    title: {
        type: String,
        required: [true, 'عنوان پروژه الزامی است'],
        trim: true,
        maxlength: 200
    },

    description: {
        type: String,
        trim: true,
        maxlength: 2000
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    manager: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        position: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: String,
            required: true,
            match: /^09[0-9]{9}$/
        },
        telegram: {
            type: String,
            trim: true
        },
        whatsapp: {
            type: String,
            trim: true
        },

    }],

    address: {
        province: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        neighborhood: {
            type: String,
            trim: true
        },
        street: {
            type: String,
            trim: true
        },
        alley: {
            type: String,
            trim: true
        },
        plaque: {
            type: Number,
            min: 0
        },

        renewalCode: {
            type: String,
            trim: true
        }
    },

    coordinates: {
        lat: {
            type: Number,
            default: 0
        },
        lng: {
            type: Number,
            default: 0
        }
    },

    area: {
        type: Number,
        required: true,
        min: 1
    },

    landArea: {
        type: Number,
        min: 1
    },

    direction: {
        type: String,
        enum: ['north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest', 'both', 'multi'],
        default: 'multi'
    },

    totalFloors: {
        type: Number,
        default: 1,
        min: 1,
        max: 100
    },

    floorDetails: {
        groundFloor: {
            hasUnits: { type: Boolean, default: false },
            purpose: {
                type: String,
                enum: ['residential', 'commercial', 'parking', 'storage', 'mixed'],
                default: 'residential'
            }
        },
        basement: {
            hasUnits: { type: Boolean, default: false },
            purpose: {
                type: String,
                enum: ['parking', 'storage', 'facilities', 'none'],
                default: 'none'
            },
            floorCount: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        roof: {
            hasGarden: { type: Boolean, default: false },
            hasPool: { type: Boolean, default: false },
            hasCommonArea: { type: Boolean, default: false }
        }
    },

    units: {
        total: {
            type: Number,
            default: 1,
            min: 1
        },

        byFloor: [{
            floorNumber: {
                type: Number,
                required: true,
                min: -5,
                max: 100
            },
            unitCount: {
                type: Number,
                required: true,
                min: 0
            },
            unitTypes: [{
                type: String,
                enum: ['residential', 'commercial', 'office', 'storage', 'parking'],
                default: 'residential'
            }],

        }],

        byBedrooms: {
            studio: { type: Number, default: 0 },
            oneBedroom: { type: Number, default: 0 },
            twoBedroom: { type: Number, default: 0 },
            threeBedroom: { type: Number, default: 0 },
        },



        areaRange: {
            min: { type: Number, default: 0 },
            max: { type: Number, default: 0 },
            average: { type: Number, default: 0 }
        }
    },

    pricing: {
        minPrice: {
            type: Number,
            min: 0,
            default: 0
        },
        maxPrice: {
            type: Number,
            min: 0,
            default: 0
        },
        averagePrice: {
            type: Number,
            default: 0
        },
        pricePerMeter: {
            type: Number,
            default: 0
        },
        currency: {
            type: String,
            enum: ['IRT', 'IRR', 'USD', 'EUR'],
            default: 'IRT'
        },
        isNegotiable: {
            type: Boolean,
            default: true
        }
    },

    features: [{
        type: String,
        enum: [
            'elevator', 'parking', 'green_space', 'pool', 'gym', 'sauna',
            'jacuzzi', 'playground', 'security', 'cctv', 'intercom',
            'central_heating', 'central_cooling', 'smart_home', 'solar_panel',
            'emergency_power', 'fire_extinguisher', 'clubhouse', 'landscaping',
            'underground_parking', 'generator', 'water_tank', 'cctv'
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
            brand: String,
            description: String
        }),
        default: {}
    },

    projectStatus: {
        type: String,
        enum: [
            'planning',
            'foundation',         // فونداسیون
            'structure',          // اسکلت
            'enclosure',          // پوسته
            'mechanical',         // تاسیسات
            'finishing',          // نازک‌کاری
            'landscaping',        // محوطه‌سازی
            'pre_sale',           // پیش‌فروش
            'ready',              // آماده تحویل
            'delivered',          // تحویل داده شده
            'sold_out',           // کاملاً فروش رفته
            'stopped'             // متوقف شده
        ],
        default: 'planning'
    },

    progress: {
        percentage: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },

    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    estimatedCompletion: Date,
    actualCompletion: Date,

    attachments: [{
        type: {
            type: String,
            enum: ['image', 'video', 'document', '3d_model', 'blueprint', 'permit'],
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: String,
        description: String,
        isMain: {
            type: Boolean,
            default: false
        }
    }],

    projectSimilar: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],



    isPublished: {
        type: Boolean,
        default: false
    },


    viewCount: {
        type: Number,
        default: 0
    },


    propertyFiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "proPertyFile"
    }]

}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema)

export default Project