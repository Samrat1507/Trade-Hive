import User from "../../../../models/user"

export default async function creditStock (req, res) {
    if(req.method === "POST") {
        try {
            const user = await User.findOne({email: req.body.email})
            if(user){
                user.holdings.set(req.body.stock, user.holdings.get(req.body.stock) - parseFloat(req.body.qty));
                user.credits = user.credits - req.body.value
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