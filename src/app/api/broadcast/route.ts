import * as jose from 'jose'
import prisma from '../../../../prisma/client';

async function GetAuth(headers: any) {
    const auth = String(headers.get('authorization')?.split(" ")[1])
    try {
        const JWKS = jose.createRemoteJWKSet(
            new URL(`https://dev-nd8v81ft.us.auth0.com/.well-known/jwks.json`),
        );
        const {payload} = await jose.jwtVerify(auth, JWKS, {
            issuer: `https://dev-nd8v81ft.us.auth0.com/`,
        });

        return payload
    } catch (e) {
        return false
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
            const data = await prisma.messages.findMany({
                take: 50,
                orderBy: {
                    createdAt: 'asc',
                }
            })
            return Response.json(data)                    
        }
        
        
    } catch (e) {
        console.log(e);
        return Response.json('Internal Server Error')
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
            const data = await prisma.messages.create({
                data: {
                    user: String(auth.sub),
                    message: settings.message
                }
            })
            return Response.json(data)                    
        }
    } catch (e) {
        console.log(e);
        return Response.json('Internal Server Error')
    }
}