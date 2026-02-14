import { Input } from '@/components/ui/input';


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
       <h2 className="my-10 sm:my-20 text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold text-center">
         The only URL shortener<br/> you&rsquo;ll ever need.👇</h2>
       <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 items-center gap-2" >
        <Input placeholder="Enter your URL here" className="w-full md:w-1/2 mx-auto" />
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
          Shorten URL
    
        </button>
       </form >
       <img src="/banner-quickshort-dark.png" alt="Quickshort Banner" className="w-full md:px-11 max-w-4xl mx-auto mt-6" />
    </div>
  );
};

export default LandingPage;