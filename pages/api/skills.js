import { MongoClient } from "mongodb";
import clientPromise from "../../lib/mongodb";
async function getSkills(req, res) {
  if (req.method === "GET") {
    try {
      await clientPromise;
      console.log("ready");
    } catch (error) {
      console.log(error);
    }

    const database = clientPromise.db();
    const collection_message = database.collection("skills");

    const allSkills = await collection_message.find().toArray();
    client.close();
    res.status(200).json({ skills: allSkills });
  }
}

export default getSkills;
