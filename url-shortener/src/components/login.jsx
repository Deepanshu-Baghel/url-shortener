
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
// import React from "react";
// import { Input } from "./ui/input";
// import { BeatLoader } from "react-spinners";
// import Error from "./error";
// import { useState } from "react";
// import * as yup from "yup";
// import { useEffect } from "react";
// import useFetch from "@/hooks/use-fetch";
// import { login } from "@/DB/apiAuth";







// const LoginPage = () => {

//     const [errors , setErrors] = useState([]);

//     const[formData,setFormData]=useState({
//         email:"",
//         password:""
//     });


// const handleInputChange=(e)=>{
//     const {name,value}=e.target;
//     setFormData((prevState) => ({
//         ...prevState,
//         [name]:value,

//     }));
// };

// const { loading, error, data, fn: loginFn } = useFetch(login);

// useEffect(() => {

// console.log({ error, data });
//     // if (error === null && data) {
//     //     // Handle successful login, e.g., redirect to dashboard
//      }
// , [error, data]);

//     const handleSubmit= async ()=>{
//         setErrors([]);
//         try {
//             // Call your login API here with formData.email and formData.password
//             // For example: await login(formData.email, formData.password);

//             const schema= yup.object({
//                 email:yup.string().email("Invalid email format").required("Email is required"),
//                 password:yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
//             });
//             await schema.validate(formData,{abortEarly:false});
//             await loginFn();

//             // If login is successful, you can redirect the user or show a success message
//         } catch (e) {
//             const newErrors = {};

//             e?.inner?.forEach((error) => {
//                 newErrors[error.path] = error.message;
//             });

//             setErrors(newErrors);
//         }
//     };


//   return (
//    <Card>
//   <CardHeader>
//     <CardTitle>Login</CardTitle>
//     <CardDescription>Enter your credentials to login</CardDescription>
//     {error && <Error message={error.message}/>}
//     <CardAction>
        
//     </CardAction>
//   </CardHeader>
//   <CardContent className="space-y-2">
//     <div className="space-y-1">
//         <Input name="email" 
//             type="email"
//             placeholder="Enter your Email" 
//             onChange={handleInputChange}/>
//         {errors.email && <Error message={errors.email}/>}
//     </div>
//     <div className="space-y-1">
//         <Input name="password" 
//             type="password" 
//             placeholder="Enter your Password" 
//             onChange={handleInputChange}/>
//         {errors.password && <Error message={errors.password}/>}
//     </div>
//   </CardContent>
//   <CardFooter>
//     <button 
//     onClick={handleSubmit}
//     className="w-full" variant="destructive">
//         {loading ? <BeatLoader size={10} color="#36d7b7"/>:"Login"}
        
//     </button>

//   </CardFooter>
// </Card>
//   );
// };

// export default LoginPage;




import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction
} from "@/components/ui/card";

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import * as yup from "yup";
import useFetch from "@/hooks/use-fetch";
import { login } from "@/DB/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginPage = () => {

  const [errors, setErrors] = useState({}); // ✅ should be object

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const navigate = useNavigate();
  let[searchPrarams] = useSearchParams();
  const longUrl = searchPrarams.get("createNew");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { loading, error, data, fn: loginFn } = useFetch(login);

  useEffect(() => {
    // console.log({ error, data });

    if (error === null && data) {
      // ✅ Handle successful login here (redirect etc.)
      console.log("Login successful", data);
      navigate(`/dashboard?${longUrl ? `createNew=${longUrl}` : ""}`);
    }
  }, [error, data]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ important
    setErrors({});

    try {
      const schema = yup.object({
        email: yup
          .string()
          .email("Invalid email format")
          .required("Email is required"),
        password: yup
          .string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });

      // ✅ Pass correct arguments
      await loginFn(formData.email, formData.password);

    } catch (e) {
      if (e.inner) {
        const newErrors = {};
        e.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to login</CardDescription>
        {error && <Error message={error.message} />}
        <CardAction />
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <Error message={errors.email} />}
        </div>

        <div className="space-y-1">
          <Input
            name="password"
            type="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
        </div>
      </CardContent>

      <CardFooter>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded" 
        >
          {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
