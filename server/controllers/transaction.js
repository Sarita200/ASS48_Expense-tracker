import Transaction from "./../models/Transaction.js"

const PostTransaction = async (req ,res) =>{
    const {amount , category ,type , user,title} = req.body;

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user
    });

    try{
        const savedTransaction = await transaction.save();

        res.json({
            success :true,
            message : `Transaction Successfull`,
            data :savedTransaction
        })
    }
    catch(e){
        res.json({
            success :false,
            message :e.message,
            data:null
        })
    }
}

export{
    PostTransaction
}