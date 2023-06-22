import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authHandler = NextAuth({
  providers: [GoogleProvider({
    clientId: "",
    clientSecret: "",
  }),
  ],
  
  callbacks: {
    asynce signIn({profile}){
      try {

      } catch (err){
        console.error(err);
      }
    },
    async session({session}){
      try {

      } catch (err){
        console.error(err);
      }
    },
  },
});

export {authHandler as GET, authHandler as POST};