import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
    const p = await params;
    const data = await dbConnect("items").findOne({_id: new ObjectId(p.id)})
    return Response.json(data);
}

export async function DELETE({params}) {
    const p = await params;
    const data = await dbConnect("items").deleteOne({_id: new ObjectId(p.id)})
    return Response.json(data);
}

export async function PATCH(req, {params}) {
    const p = await params;
    const data = await req.json();
    const filter = {_id: new ObjectId(p.id)};
    const result = await dbConnect("items").updateOne(filter, {$set: {...data}}, {upsert: true});
    return Response.json(result);
}