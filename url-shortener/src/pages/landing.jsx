import { ChevronDown } from 'lucide-react';

const LandingPage = () => {
  return (
    <div >
       <h2 className="my-10 sm:my-20 text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold text-center">
         The only URL shortener<br/> you&rsquo;ll ever need.👇</h2>
       <p> Create, manage, and track your links with ease. Sign up now to get started!</p>
        <div className="mt-4">
                <ChevronDown className="animate-bounce" size={24} />
            </div>
    </div>
  );
};

export default LandingPage;