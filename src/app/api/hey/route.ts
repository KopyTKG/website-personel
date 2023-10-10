import prisma from '../../../../prisma/client'
import JWT from '@/modules/controllers/jwt.controller'
import * as jose from 'jose'

export async function POST(
    req: Request,
  ){
    try{
        const headers = req.headers
        const token = String(headers.get('authorization')?.split(" ")[1])
        const settings = await req.json();

        // JWT stuff
        const jwt = new JWT();
        const secret = await jwt.getPublic();

        try {
            
            const { payload, protectedHeader } = await jose.jwtVerify(token , secret, {
                issuer: 'urn:thekrew:issuer',
                audience: 'urn:thekrew:audience',
            })
            
            if(payload) {
                await prisma.heyCount.create({
                    data: {
                        count: Number(settings.data),
                        
                    }
                });
                return Response.json("Done")                
            }
        } catch(e) {
            return Response.json(JSON.stringify('Invalid Token'))
        }
    } catch (e) {
        return Response.json('Internal Server Error')
    }
}

export async function GET(
    req: Request,
){
    try{
        const headers = req.headers
        const token = String(headers.get('authorization')?.split(" ")[1])
    
        // JWT stuff
        const jwt = new JWT();
        const secret = await jwt.getPublic();

        try {
            const { payload, protectedHeader } = await jose.jwtVerify(token , secret, {
                issuer: 'urn:thekrew:issuer',
                audience: 'urn:thekrew:audience',
            })
            if(payload) {
                const data = await prisma.heyCount.findFirst(
                    {
                        orderBy: {
                            createdAt: 'desc'
                        }
                    }
                )
                if (data == null) {
                    return Response.json(0)
                } 
                return Response.json(data)                
            }
        } catch (e) {
            return Response.json('Invalid Token')
        }
    } catch (e) {
        return Response.json('Internal Server Error')
    }
    return Response.json('Hey')
}