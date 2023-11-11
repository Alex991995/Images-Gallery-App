import { AuthOptions } from "next-auth";
import GithubProvider  from "next-auth/providers/github"


export const authConfig:AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, 
      options: { 
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
        domain: process.env.NEXTAUTH_URL
      }
    },
  }
  // callbacks: {
  //   async jwt({ token, account, profile }) {

  //     if (account) {
  //       token.accessToken = account.access_token
  //       token.id = profile?.name
  //     }
  //     return token
  //   }
  // }
  
}