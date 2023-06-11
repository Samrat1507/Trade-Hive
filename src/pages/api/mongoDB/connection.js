import mongoose from "mongoose";

export default async function connect(req, res) {
  const CONNECTION_URL = process.env.NEXT_PUBLIC_MONGO_URI;

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error.message));

    res.send("Connected")
};
