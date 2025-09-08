"use server"
import dbConnect from "@/lib/dbConnect";

export default async function RegisterUser(userData) {
    try {
        const result = await dbConnect("users").insertOne(userData);
        // alert("successfull register");
        return result;
    } catch (error) {
        console.log(error);
        // alert("failed to register");
        return null;
    }
}