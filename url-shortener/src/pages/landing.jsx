import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

const[longUrl,setLongUrl]=useState();
const navigate = useNavigate();
const handleShorten = (e) => {
  e.preventDefault();
  navigate(`/auth?createNew=${longUrl}`);
};


  return (
    <div className="flex flex-col items-center justify-center text-white">
       <h2 className="my-10 sm:my-20 text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold text-center">
         The only URL shortener<br/> you&rsquo;ll ever need.👇</h2>
       <form onSubmit={handleShorten}
       className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 items-center gap-2" >
        <Input type="url" placeholder="Enter your long URL here" 
        value={longUrl}
       onChange={(e)=> setLongUrl(e.target.value)} 
        className="h-full flex-1 py-4 px-4 " />
        <button type='submit' variant="destructive"
        className=" px-4 py-4 bg-white text-black rounded-md flex items-center gap-2 ">
          Shorten URL !!
    
        </button>
       </form >
       <img src="/banner-quickshort-dark.png" alt="Quickshort Banner" className="w-full md:px-11 max-w-4xl mx-auto mt-6" />


       <Accordion type="multiple" collapsible className="w-full md:px-11" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>How does URL shortening work?</AccordionTrigger>
    <AccordionContent>
      Simply paste your long URL into the input box and click "Shorten URL". 
      Our service will generate a shortened link that redirects to your original URL.
    </AccordionContent>
  </AccordionItem>
    <AccordionItem value="item-2">
    <AccordionTrigger>Is it free to use?</AccordionTrigger>
    <AccordionContent>
      Yes! Our basic URL shortening service is completely free. 
      Create an account to access additional features like custom links and analytics.
    </AccordionContent>
  </AccordionItem>
    <AccordionItem value="item-3">
    <AccordionTrigger>Can I track my shortened URLs?</AccordionTrigger>
    <AccordionContent>
      Absolutely! You can track click statistics, geographic data, and referral sources 
      for all your shortened URLs from your dashboard.
    </AccordionContent>
  </AccordionItem>
  
</Accordion>


    </div>
  );
};

export default LandingPage;