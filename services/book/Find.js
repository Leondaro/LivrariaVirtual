import connect from "../ConnectionDB";

export default async function Handler(req, res) {
    const {db} = await connect();
    //const response = await db.collection("planets").findOne(req.body.book);
    res.status(200).json({msg: "Done!"});
}