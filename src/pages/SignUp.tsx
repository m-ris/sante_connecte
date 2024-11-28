import '../index.css'
import { Input } from '../@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../@/components/ui/card'
import { Label } from '../@/components/ui/label'
import ButtonInput from '../components/Button'


export default function SignUp() {
  return (
    <div className="container mx-auto">
      <Card 
       className="wrapper w-96"
      >
        <CardHeader>
            <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
        <form action="" method="post">
            <div className="form-group">
                <Label>
                    Name:                   
                    <Input 
                    type="name" 
                    name="name" 
                    id="name"
                    className="border-2 border-zinc-950"
                      />
                </Label>
            </div>
            <div className="form-group">
                <Label>
                    LastName:
                    <Input 
                    type="lastName" 
                    name="lastName" 
                    id="lastName" 
                    className="border-2 border-zinc-950" />

                </Label>
            </div>
            <div className="form-group">
                <Label>
                    Email:
                    <Input 
                    type="mail" 
                    name="mail" 
                    id="mail"
                    className="border-2 border-zinc-950"
                     />
                </Label>
            </div>
            <div className="form-group">
                <Label>
                    Password:
                    <Input 
                    type="password" 
                    name="password" 
                    id="password"
                    className="border-2 border-zinc-950"
                    />
                </Label>
            </div>
            <div className="form-group">
                <Label>
                    confirm password:
                    <Input 
                    type="password2" 
                    name="password2" 
                    id="password2"
                    className="border-2 border-zinc-950"
                     />
                </Label>
            </div>
            <ButtonInput type='submit'  className="w-full text-white bg-blue-500 hover:bg-blue-900" />
        </form>
        </CardContent>
      </Card>
    </div>
  )
}
