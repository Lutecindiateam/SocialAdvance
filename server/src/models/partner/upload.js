const mongoose = require("mongoose")


const applySchema = new mongoose.Schema(

{
    
   name:{

        type: String,

        required: true,
        trim: true

    },

    address:{

        type:String,

        required: true,
        trim: true

    },
    phone :{

        type:Number,

        required: true,
        trim: true

    }

},

{timestamps: true}

)

module.exports = mongoose.model('upload', applySchema)