export { default } from 'next-auth/middleware';

import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export const middleware = ( ) => {

  const authCookie = cookies().get('next-auth.session-token');

  if ( !authCookie || !authCookie.value ){
    return NextResponse.redirect(process.env.NEXTAUTH_URL!);
  }

}

export const config =  {matcher: ['/profile', '/protected/:path*'] }