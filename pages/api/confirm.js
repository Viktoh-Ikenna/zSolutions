
import dbConnect from '../../utils/dbConnection'
import Accounts from '../../../models/Account'
import nodeMailer from '../../utils/nodeMailer'

const handle= async (req,res)=>{
    await dbConnect()
    const{method,body} = req
    switch (method) {
        case 'POST':
            Accounts.findOneAndUpdate({email:body.email},{$set:{password:body.password}},(err,data)=>{
                if(err){
                    res.status(500).json({status:false,message:'Something went wrong'})
                    return
                }
                if(data){
                    res.json({status:true,data:"Update"})    
                    nodeMailer(
                        body.email,
                        `${data.name}, Account successfully updated`,
                        `Dear ${data.name}`,
                        `<p>Dear ${data.name}</p><br/><p>Your profile is successfully updated</p>`
                    )     
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