
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
    const [searchPrarams] = useSearchParams() ;
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
     <h1 className="text-5xl font-extrabold">
        {searchPrarams.get("createNew") ? (<><div className="flex flex-col items-center">Hold up !!! </div>
        <br />
        <div>You Need to Login First...</div></>) : "Login / SignUp"}
        </h1>

        <Tabs defaultValue="login" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signUp">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="login">Login here</TabsContent>
  <TabsContent value="signUp">SignUp here.</TabsContent>
</Tabs>

    </div>
  );
};

export default Auth;


