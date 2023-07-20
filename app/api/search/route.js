
import dbConnect from "@/libs/dbConnect";
import Address from '../../models/Address.js'
import { NextResponse } from "next/server";

export async function POST(request){

    const { name,email,address,number } = await request.json();
    await dbConnect();
    await Address.create({name,email,address,number});
    return NextResponse.json({message:'Created'})

}


export async function GET(request){
const {searchParams} = new URL(request.url);
const search = searchParams.get("search");
await dbConnect();
const lists = await Address.find();
const filteredLists = lists.filter((list)=>{
    return list.address.toLowerCase().includes(search.toLowerCase())
});

return NextResponse.json(filteredLists);
}