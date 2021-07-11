const CustomerModel = require('../Models/Customer.model')

//#region Customers CRUD

Get = async(req,res)=>{
    try{
        const id = req.params.id
        if(id<=0)
        {
            const data = await CustomerModel.find()
            res.status(200).send({
                apiStatus:true,
                message:"Get : data retrived",
                data:data,
                count:data.length
            })
        }
        else{
            const data = await CustomerModel.where(i=>i.Customer_ID == id)
                if(!data){
                    res.status(400).send({
                        apiStatus:false,
                        message:"Customer not found",
                        data:null
                    })
                }
            res.status(200).send({
                apiStatus:true,
                message:"GetbyId : data retrived",
                data:data,
                id:id
            })
        }      
    }
    catch(error){
        res.status(500).send({
            apiStatus:false,
            message:"Error loading data",
            data:error
        })
    }
}

Add = async(req,res)=>{
    try{
        const CustomerData = new CustomerModel(req.body)
        await CustomerData.save()
        res.status(200).send({
            apiStatus:true,
            message:"Data Inserted",
            data:CustomerData
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus:false,
            message: "error inserting data",
            data: e
        })
    }
}

Update = async(req,res)=>{
    const UpdatedParams = ['name','password']
    const updates = Object.keys(req.body)
    isValid = updates.every(up => UpdatedParams.include(updates))
    if(!isValid) res.status(500).send('not available')
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true, new:true})
        if(!user) res.send('not found')
        res.send('done')
    }
    catch(error){
        res.send(error)
    }
}

Delete = async(req,res)=>{

}

//#endregion

module.exports={
    Get,
    Add,
    Update,
    Delete
}