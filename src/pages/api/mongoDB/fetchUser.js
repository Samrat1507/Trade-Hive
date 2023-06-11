import User from "../../../../models/user";

export default async function fetchUser(req,res) {
    if(req.method==="POST"){
        try{
            const user = await User.findOne({ email: req.body.email })
            if(!user){
                res.status(200).send(JSON.stringify({message: "User not Found"}))
            }
            else{
                res.status(200).send(user)
            }
        } catch(error) {
            console.log(error)
            res.status(400).send(JSON.stringify({message:error}));
        }
    }
}