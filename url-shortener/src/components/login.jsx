
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import React from "react";
import { Input } from "./ui/input";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useState } from "react";
import * as yup from "yup";




const LoginPage = () => {

    const [errors , setErrors] = useState([]);

    const[formData,setFormData]=useState({
        email:"",
        password:""
    });


const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]:value,

    }));
};

    const handleSubmit= async ()=>{
        setErrors([]);
        try {
            // Call your login API here with formData.email and formData.password
            // For example: await login(formData.email, formData.password);

            const schema= yup.object({
                email:yup.string().email("Invalid email format").required("Email is required"),
                password:yup.string().min(8,"Password must be at least 6 characters").required("Password is required")
            });
            await schema.validate(formData,{abortEarly:false});

            // If login is successful, you can redirect the user or show a success message
        } catch (e) {
            const newErrors = {};

            e?.inner?.forEach((error) => {
                newErrors[error.path] = error.message;
            });

            setErrors(newErrors);
        }
    };


  return (
   <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials to login</CardDescription>
    <Error message={"Some error"}/>
    <CardAction>
        
    </CardAction>
  </CardHeader>
  <CardContent className="space-y-2">
    <div className="space-y-1">
        <Input name="email" 
            type="email"
            placeholder="Enter your Email" 
            onChange={handleInputChange}/>
        {errors.email && <Error message={errors.email}/>}
    </div>
    <div className="space-y-1">
        <Input name="password" 
            type="password" 
            placeholder="Enter your Password" 
            onChange={handleInputChange}/>
        {errors.password && <Error message={errors.password}/>}
    </div>
  </CardContent>
  <CardFooter>
    <button onClick={handleSubmit}>
        {true? <BeatLoader size={10} color="#36d7b7"/>:"Login"}
        
    </button>

  </CardFooter>
</Card>
  );
};

export default LoginPage;