import { NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client"

export async function GET(request: NextResponse) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}


export async function POST(request: NextResponse) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
return NextResponse.json(newProduct, { status: 201 });
}


export async function PUT(request: NextResponse) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 10, name: body.name, price: body.price }, { status: 201 });
}

export async function DELETE(request: NextResponse) {
    return NextResponse.json({  });
}