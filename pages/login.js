import React, {useState} from 'react';
import { Button } from '../components/designsystem/Button';
import { Navbar } from '../components/designsystem/Navbar';
import TextInput from '../components/designsystem/TextInput';

export default function login() {
    const [email, setEmail] = useState("")
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const [continueWithEmail, setContinueWithEmail] = useState(false)
    const Continue = e => {
        e.preventDefault();
        console.log("done")
        if(email.match(emailPattern)) {
            setContinueWithEmail(true);
            return true;
        } else {
            return false;
        }
        
    }
   
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar></Navbar>
          <form>
               <div className="flex flex-row justify-center items-center w-full h-screen">
                   <div className="flex flex-col">
                        <h1 className="text-4xl font-semibold text-transparent text-white py-8">Login in to Notes</h1>
                        {!continueWithEmail ? 
                            <>
                                 <TextInput type="email" ariaLabel="Email" title="Please fill out email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}></TextInput>
                                 <div className="mt-3 w-full"><Button title="Continue" primary="true" large="true" isWidthFull="true" onSubmit={() => Continue}></Button></div>
                            </>
                        :  <>
                        <TextInput type="password" ariaLabel="Password" title="Please fill out password" placeholder="Enter Password" ></TextInput>
                        <div className="mt-3 w-full"><Button title="Login" primary="true" large="true" isWidthFull="true"></Button></div>
                   </>}
                       
                   </div>
               </div>
          </form>
        </div>
    )
}
