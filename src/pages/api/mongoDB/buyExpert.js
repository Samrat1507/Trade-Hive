import User from "../../../../models/user"

export default async function buyExpert (req, res) {
    if(req.method === "POST") {
        try {
            const user = await User.findOne({email: req.body.email})
            if(user){
                user.credits = user.credits - 50
                user.expertBought = true
                user.dateExpertBought = new Date()
                await user.save()
                res.status(200).send(JSON.stringify({message: "User updated"}))
            } else {
                res.status(200).send(JSON.stringify({message: "Could not update"}))
            }
        } catch(error) {
            console.log(error)
            res.status(500).send(JSON.stringify({message: 'Error'}))
        }
    }
}