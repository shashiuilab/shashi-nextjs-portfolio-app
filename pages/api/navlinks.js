import { connectToDatabase } from "../../utils/mongoDB";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const data = await db
      .collection("Shashi-portfolio")
      .find({})
      .limit(20)
      .toArray();
    res.json(data);
  };
