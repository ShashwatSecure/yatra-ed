import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getStaticProps() {
  const { data: colleges, error } = await supabase
    .from('Colleges')
    .select('*')
    .limit(6);

  return {
    props: {
      colleges: colleges || [],
    },
    revalidate: 3600, // optional: regenerate every hour
  };
}

export default function Home({ colleges }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Yatra Ed</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-[#FFF3ED] px-6 py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-8 animate-fadeIn">
            <h3 className="uppercase text-indigo-600 tracking-[0.5em] font-semibold text-2xl animate-fadeInShort">
              Welcome to
            </h3>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4 animate-fadeInMedium">
              Yatra Ed
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#F4A300] opacity-0 animate-fadeInSlow">
              Education is the passport to your future—every lesson learned is a step closer to success.
            </p>
            <a
              href="#services"
              className="inline-block bg-[#1F194C] text-white px-8 py-4 rounded-md mt-6 font-bold text-lg hover:bg-[#2c2560] transition-all duration-500 w-auto shadow-xl animate-fadeInMediumDelay"
            >
              Explore <span className="ml-2 text-xl">↓</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative animate-slideInRight">
            <div className="relative w-[350px] md:w-[400px]">
              <Image
                src="/student-hero.png"
                alt="Student Thinking"
                width={400}
                height={400}
                className="rounded-full object-contain animate-oscillate"
              />
              {/* Optional: Background Glow/Brush */}
              <div className="absolute -z-10 left-0 right-0 bottom-0 top-0 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>

        </div>

        {/* Animations */}
        <style jsx>{`
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes fadeInShort {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes fadeInMedium {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes fadeInSlow {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes fadeInMediumDelay {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes oscillate {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-30px);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.6s ease-out forwards; /* Quick fade for the container */
    }

    .animate-fadeInShort {
      animation: fadeInShort 0.5s ease-out 0.2s forwards; /* Quick fade for "Welcome to" */
    }

    .animate-fadeInMedium {
      animation: fadeInMedium 0.7s ease-out 0.3s forwards; /* Slightly slower fade for "Yatra Ed" and "Explore" */
    }

    .animate-fadeInSlow {
      animation: fadeInSlow 1.5s ease-in forwards; /* Slow fade for the quote */
    }

    .animate-fadeInMediumDelay {
      animation: fadeInMediumDelay 0.7s ease-out 0.6s forwards; /* Delayed fade for "Explore" */
    }

    .animate-slideInRight {
      animation: slideInRight 0.8s ease-out forwards; /* Image slide-in */
    }

    .animate-oscillate {
      animation: oscillate 4s infinite ease-in-out; /* Image oscillation */
    }
  `}</style>
      </section>
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Title */}
          <div className="border-l-8 border-yellow-400 pl-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#231F41' }}>
              Our Philosophy
            </h2>
          </div>


          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              At YatraEd, we believe education is not just a journey of acquiring knowledge, but a transformative experience that shapes futures. Our philosophy is rooted in guiding students with integrity, insight, and intention — empowering them to make informed decisions, unlock opportunities worldwide, and discover the paths that align with their true potential. We’re not just consultants; we are partners in your academic odyssey.
            </p>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block bg-[#231F41] hover:bg-[#1b1735] text-yellow-400 font-semibold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Know More
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#231F41]">
            What Sets Our Team <span className="text-yellow-500 underline decoration-4 decoration-yellow-400">Apart</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-[#231F41]">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-4">
            <Image src="https://res.cloudinary.com/dj59omo7m/image/upload/v1744924230/Experienced-Educational-Consultants_jp0phk.png" width={80} height={80} alt="Experienced Consultants" />
            <h4 className="font-semibold text-lg">Experienced Educational Consultants</h4>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-4">
            <Image src="https://res.cloudinary.com/dj59omo7m/image/upload/v1744924231/Personalized-Models-Vs.-One-Size-Fits-All_ex1bol.png" width={80} height={80} alt="Personalized Models" />
            <h4 className="font-semibold text-lg">Personalized Models Vs. One Size Fits All</h4>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-4">
            <Image src="https://res.cloudinary.com/dj59omo7m/image/upload/v1744924231/Connect-With-Our-Consultants-Directly-Online_aroycr.png" width={80} height={80} alt="Online Consultation" />
            <h4 className="font-semibold text-lg">Connect With Our Consultants Directly</h4>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center space-y-4">
            <Image src="https://res.cloudinary.com/dj59omo7m/image/upload/v1744924230/Successful-Admissions-Into-Top-Insitutions_oaj19c.png" width={80} height={80} alt="Top Admissions" />
            <h4 className="font-semibold text-lg">Successful Admissions Into Top Institutions</h4>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#231F41]">
            Colleges Under <span className="text-yellow-400 underline decoration-4">Yatra Ed</span>
          </h2>
        </div>

        {/* Grid of Colleges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {colleges.map((college) => (
    <div
      key={college.id}
      className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <Image
        src={college.image_url || '/default-college.jpg'} // fallback image
        alt={college.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#231F41] mb-2">{college.name}</h3>
        <p className="text-gray-600 text-sm">
  {Array.isArray(college.courses) ? college.courses.join(', ') : String(college.courses || '')}
</p>

      </div>
    </div>
  ))}
</div>


        {/* View All Colleges Button */}
        <div className="mt-12 text-center">
          <Link href="/courses"
            className="inline-block bg-[#231F41] hover:bg-[#1b1735] text-yellow-400 font-semibold px-8 py-4 rounded-lg text-lg transition-all"
          >
            View All Colleges
          </Link>
        </div>
      </section>
      <section id="contact" className="py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 items-start">
          <div className="flex-1 flex flex-col items-center md:items-start"> {/* Center image on small screens, left align on medium+ */}
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-600">Contact</span> Us to Commence your Yatra
            </h2>
            <p className="mb-6 text-center md:text-left"> {/* Center text on small screens, left align on medium+ */}
              Get started with Yatra Ed and take your educational goals to new heights.
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="https://res.cloudinary.com/dj59omo7m/image/upload/v1744965769/contactus_noeoly.webp"
                alt="Contact Us Image"
                width={300}
                height={800}
                className="rounded-lg mt-4 mb-2"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>

          <form className="flex-1 flex flex-col gap-4 mt-8 md:mt-12"> {/* Add margin-top to push the form down */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name *"
                display="block"
                required
                className="flex-1 p-3 border border-gray-300 rounded"
                name="first-name"
              />
              <input
                type="text"
                placeholder="Last Name *"
                display="block"
                required
                className="flex-1 p-3 border border-gray-300 rounded"
                name="last-name"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="p-3 border border-gray-300 rounded"
              name="email"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 p-3 border border-gray-300 rounded"
                name="phone"
              />
            </div>
            <div className="flex-1 p-2 border border-gray-300 rounded">
              <select aria-label="Course you are interested in" name="course">
                <option value="" disabled selected>Course you are interested in</option>
                <option value="btech">B.Tech</option>
                <option value="mtech">M.Tech</option>
                <option value="bca">B.C.A</option>
                <option value="bba">B.B.A</option>
                <option value="mba">M.B.A</option>
              </select>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#231F41" }}
              className="hover:bg-blue-800 text-white font-semibold py-3 rounded transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      

    </>
  );
}
