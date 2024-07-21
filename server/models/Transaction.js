import { Schema , model } from "mongoose";

const transactionSchema =new Schema({
    amount :{
        type :Number,
        require :true,
    },
    category :{
        type :String,
        default : "Other",
    },
    type :{
        type :Number,
        enum : ["debit" , "credit"],
    },
    user:{
        type :Schema.Types.ObjectId,
        ref : "User,"
    }
});

const Transaction = model("Transaction",transactionSchema);

export default Transaction;