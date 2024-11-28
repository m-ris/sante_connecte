import React from 'react'
import { Input } from '../@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import ButtonInput from '../components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../@/components/ui/card'

export default function SignIn() {
  return (
    <div className="container flex items-center justify-center w-screen h-full mx-auto">

      <Card  className="z-10 mt-20 ml-20 border border-blue-800 rounded-lg shadow-md wrapper w-96 h-96">

        <CardHeader>
          <CardTitle className="font-mono text-xl font-semibold md:text-2xl">Content de vous revoir</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
        <form action="" method="post">
            <div className="flex form-group">
              <Label>
              Email:                    
              <Input 
              type="email" 
              name="mail" 
              id="mail"
              className="w-[350px] h-10 border-b-2 border-b-blue-900" 
              />
              </Label>
            </div>
            <div className="form-group">
              <Label>
              Email:
              <Input 
              type="password" 
              name="password" 
              id="password"
              className="w-[350px] h-10 border-b-2 border-b-blue-900" 
              />
              </Label>              
            </div>
            <ButtonInput type='submit'  className="w-full h-8 text-white bg-blue-500 hover:bg-blue-900" />
        </form>        
        </CardContent>
      </Card>
      <div className="z-0 img">
        <img src="/assets/imag1.jpg" alt="doc qui tien le télephone"  />
      </div>
    </div>
  )
}
