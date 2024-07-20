import { Schema , isObjectIdOrHexString, model } from "mongoose";

const transactionSchema =new Schema({
    amount :{
        type :Number,
        require :true,
    },
    category :{
        type :String,
        default : other,
    },
    type :{
        type :Number,
        enum : ["debit" , "credit"],
    },
    user:{
        type :Schema.Types.ObjectId,
        ref : "User0,"
    }
});

const Transaction = model("Transaction",transactionSchema);

export default Transaction;