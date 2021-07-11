const Mongoose = require("mongoose");
const validator = require('validator')

const Customer = Mongoose.model('Customers',{
    Customer_ID:{
        type:Number,
        unique:true,
        require:[true,'Must have ID']
    },
    Customer_FName:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        minLength:3,
        maxLength:12
    },
    Customer_LName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minLength:3,
        macLength:12
    },
    Customer_Phone:{
        type:String,
        required:true,
        trim:true,
        minLength:12,
        macLength:12,
        validate(value){
            if(validator.isEmpty(value) || !validator.isNumber(value)) throw new Error ('Invalid Phone number')
        }
    },
    Customer_Email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        required:true,
        minLength:10,
        maxLength:50,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email")
        }
    },
    date_became_cutomer:{
        type:Date,
        default:Date.now()
    },
    login:{},
    Password:{
        type:String,
        trim:true,
        required:true
    },
    other_details:{
        type:String,
        trim:true,
        minLength:10,
        maxLength:100,
    },
    Customer_Types_Code_FK:{
        type:Number,
        required:true
    }
})
module.exports=Customer