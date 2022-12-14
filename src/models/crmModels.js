import mongoose, { Schema } from "mongoose";

const schema=mongoose.Schema;
export const ContactSchema=new Schema({
    firstname:{
        type:String,
        required:'enter your first name',

    },
    created_date:{
        type:Date,
        default:Date.now

    }
});