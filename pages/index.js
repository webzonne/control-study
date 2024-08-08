import Login from "@/components/Login";
import Registro from "@/components/Registro";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { push } = useRouter();

  const [user, setUser] = useState('')

  const handleChange = (e)=>{
    setUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user === 'DOCENTE'){
      push('/dashboard-teacher')
    }
    if(user=== 'ESTUDIANTE'){
      push('/dashboard-student')
    }

    console.log(user)

    // push('/dashboard-student');
    
  }

  return (
    <>
     <Login
     handleChange={handleChange}
     handleSubmit={handleSubmit}
     />
     <Registro/>
    </>
  );
}
