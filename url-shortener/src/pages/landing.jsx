import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
       <h2 className="my-10 sm:my-20 text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold text-center">
         The only URL shortener<br/> you&rsquo;ll ever need.👇</h2>
       <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 items-center gap-2" >
        <Input type="url" placeholder="Enter your long URL here" 
       // onChange={} 
        className="h-full flex-1 py-4 px-4 " />
        <button type='submit' variant="destructive"
        className=" px-4 py-4 bg-white text-black rounded-md flex items-center gap-2 ">
          Shorten URL !!
    
        </button>
       </form >
       <img src="/banner-quickshort-dark.png" alt="Quickshort Banner" className="w-full md:px-11 max-w-4xl mx-auto mt-6" />


       <Accordion type="multiple" collapsible className="w-full md:px-11" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
    <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
    <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with smooth open and close animations.
    </AccordionContent>
  </AccordionItem>
</Accordion>


    </div>
  );
};

export default LandingPage;