import dbConnect from '../../utils/dbConnection'
import NodeMailer from '../../utils/nodeMailer'
const handle= async (req,res)=>{
    await dbConnect()
    const{method,body} = req
    switch (method) {
        case 'POST':
            if(body.email){
                if(body.status){
                    NodeMailer(
                        body.email,
                        `${body.name}, subscription activated`,
                        `Dear ${body.name}`,
                        `<p>Your monthly subscription for the [Plan Name] has been activated.<br/>
                        Please note that you will not receive this email for your subsequent subscriptions.</p>`
                    )
                }else{
                    NodeMailer(
                        body.email,
                        `${body.name}, card declined`,
                        `Dear ${body.name}`,
                        `<p>We tried, but we couldn't charge your card.<br/>
                        If this continues for the next 7 days, your account will be downgraded.</p>`
                    )
                }
            }
            
                res.send("done")
            break;
        default:
            res.status(404).json({status:false,message:`unable to find ${method} method`})        
    }
    

}

export default  handle