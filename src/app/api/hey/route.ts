import prisma from '../../../../prisma/client'
import JWT from '@/modules/controllers/jwt.controller'
import * as jose from 'jose'

async function GetAuth(header: any) {
    const auth = String(header.get('authorization')?.split(" ")[1])
    try {
        const jwt = new JWT()
        const secret = await jwt.getPublic()
        const { payload } = await jose.jwtVerify(auth, secret, {
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
                    count: Number(settings.data),
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
        return Response.json('Internal Server Error')
    }
}

export async function PUT(
    req: Request,
    ){
      try{
          const headers = req.headers
          const settings = await req.json();
          const auth = await GetAuth(headers);    
          if(!auth) {
              return Response.json('Invalid Token')
          } else {
              await prisma.heyCount.update({
                where: {
                    id: settings.id,
                },
                data: {
                      count: Number(settings.data),
                      
                  }
              });
              return Response.json(`Row ${settings.id} was updated`)                
          }
          
      } catch (e) {
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
            await prisma.heyCount.delete({
              where: {
                  id: settings.id,
              },
            });
            return Response.json(`Row ${settings.id} was deleted`)                
        }
        
    } catch (e) {
        return Response.json('Internal Server Error')
    }
}