import dbConnect from '../../utils/dbConnection'
import Accounts from '../../../models/Account'

const handle= async (req,res)=>{
    await dbConnect()
    const{method,body} = req
    switch (method) {
        case 'POST':
            Accounts.findOneAndUpdate({email:body.email},{$set:{avatar:body.url}},(err,data)=>{
                if(err){
                    res.status(500).json({status:false,message:'Something went wrong'})
                    return
                }
                if(data){
                    res.json({status:true,data:"Update"})        
                }else{
                    res.status(404).json({status:false,message:'Not updated'})
                }
            })
            
            break;
        default:
            res.status(404).json({status:false,message:`unable to find ${method} method`})        
    }
}

export default  handle