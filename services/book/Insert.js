import connect from "../ConnectionDB";

export default async function Handler(req, res) {
    const {db} = await connect();
    await db.collection("planets").insertOne({
        name :"Cronos",
        orderFromSun: 9,
        hasRings: false,
        mainAtmosphere: [],
        surfaceTemperatureC: {} 
    });
    res.status(200).json({msg: "Planet Cronos inserted"});
}