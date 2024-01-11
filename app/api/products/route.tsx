import { NextResponse } from "next/server";
import schema from "./shema";

export function GET(request: NextResponse) {
    return NextResponse.json([
        { id: 1, name: "Milk", price: 2.5 },
        { id: 2, name: "Bread", price: 3.5 },
    ])
}

export async function POST(request: NextResponse) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 10, name: body.name, price: body.price }, { status: 201 });
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