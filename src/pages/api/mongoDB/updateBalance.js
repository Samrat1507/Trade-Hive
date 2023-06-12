import User from "../../../../models/user"

export default async function updateBalance (req, res) {
    if(req.method === "POST") {
        try {
            const user = await User.findOne({email: req.body.email})
            if(user){
                user.credits = user.credits + parseFloat(req.body.credit)
                if(req.body.stock) {
                    console.log(user.holdings)
                    console.log(req.body)
                    console.log(user.holdings.get(req.body.stock))
                    user.holdings.set(req.body.stock,  user.holdings.get(req.body.stock) - req.body.qty)
                }
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