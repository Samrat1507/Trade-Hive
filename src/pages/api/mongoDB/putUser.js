import User from "../../../../models/user";

export default async function putUser(req,res) {
    if(req.method==="POST"){
        try{
            const user = await User.findOne({ email: req.body.email })
            if(user){
                res.status(200).send(JSON.stringify({message: "exists"}))
            }
            else{

                const newUser = new User(req.body)
                await newUser.save()
                res.status(200).send(JSON.stringify({message: "Created"}))
            }
        } catch(error) {
            res.status(400).send(JSON.stringify({message:error}));
        }
    }
}