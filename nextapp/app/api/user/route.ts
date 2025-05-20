import { NextRequest,NextResponse } from "next/server"
import client from "@/db"
import * as z from 'zod'
import bycrpt from 'bcrypt'

export async function GET(){
    return NextResponse.json({
         username: "harkirat", email: "harkirat@gmail.com" 
    })
}


const userSchema= z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
    const {email,password} = userSchema.parse(body);
    const existingUser = await client.user.findUnique({
            where: { email }
        })

        if(existingUser){
            return NextResponse.json({
                message: 'User already exists',
                status: 409
            })
        }

        const hashedPass = await bycrpt.hash(password,10);

        const user = await client.user.create({
            data:{
                email,
                password: hashedPass
            }
        })

        return NextResponse.json({
            message: 'User created successfully',
            status: 201
        })
    }catch(err:any){
        if(err instanceof z.ZodError){
            return NextResponse.json({
                message: 'Validation failed',
                status: 400
            })
        }
        console.log("Registeration error");
        return NextResponse.json({
            message: 'Internal server error',
            status: 500
        })
    }
    
}

// export async function POST(req: NextRequest){
//     const body = await req.json();
//     const user = await client.user.create({
//         data:{
//             email: body.email,
//             password: body.password
//         }
//     })
//     // console.log(body);
//     // return NextResponse.json({
//     //     email: body.email,
//     //     password: body.password
//     // })
// }