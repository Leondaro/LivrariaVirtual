import connect from "../ConnectionDB";

export default async function Handler(req, res) {
    const {db} = await connect();
    const response = await db.collection("table").updateOne(req.body.book);
    res.status(200).json(response);
}