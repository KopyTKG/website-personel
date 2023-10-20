import prisma from '../../../../prisma/client'
import JWT from '@/modules/controllers/jwt.controller'
import * as jose from 'jose'

async function GetAuth(header: any) {
    const auth = String(header.get('authorization')?.split(" ")[1])
    try {
        const jwt = new JWT()
        const secret = await jwt.getPublic()
        await jose.jwtVerify(auth, secret, {
            issuer: 'urn:thekrew:issuer',
            audience: 'urn:thekrew:audience',
        })
        return true 
    } catch (e) {
        return false
    }
}


export async function POST(
    req: Request,
  ){
    try{
        const headers = req.headers
        const auth = await GetAuth(headers);    
        const settings = await req.json();
        if(!auth) {
            return Response.json('Invalid Token')
        } else {
            await prisma.heyCount.create({
                data: {
                    user: settings,
                }
            });
            return Response.json("Done")                
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
        const auth = await GetAuth(headers);
        if(!auth) {
            return Response.json('Invalid Token')
        } else {
            const data = await prisma.heyCount.findMany(
                {
                    take: 15,
                    orderBy: {
                        createdAt: 'desc',
                    }
                    
                }
            )
            if (data == null) {
                return Response.json(0)
            } 
            return Response.json(data)                
        }
        
    } catch (e) {
        console.log(e);
        return Response.json('Internal Server Error')
    }
}



export async function DELETE(
    req: Request
){
    try {
        const headers = req.headers
        const settings = await req.json();
        const auth = await GetAuth(headers);    
        if(!auth) {
            return Response.json('Invalid Token')
        } else {
            if (settings == 'kopy') {
                await prisma.heyCount.deleteMany({});
                return Response.json(`Rows deleted by ${settings}`)                
            } else {
                return Response.json('Not Found')
            }
        }
        
    } catch (e) {
        return Response.json('Internal Server Error')
    }
}