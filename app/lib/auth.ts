import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export const authOptions: AuthOptions = {

  providers: [

    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true
          }
        })

        if (!user || !user.password) {
          return null
        }

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!valid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name
        }

      }

    })

  ],

  session: {
    strategy: "jwt"
  },

  secret: process.env.NEXTAUTH_SECRET

}