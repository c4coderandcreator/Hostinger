/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer/Footer";
import Myexperience from "./Myexperience";

function About() {
  return (
    <>
      {/* About */}
      <div className="flex flex-col items-center sm:overflow-auto h-full mt-20 md:mt-24">
        <div>
          <h1 className="font-monoDM font-medium text-webbut-400 text-2xl md:text-3xl mb-4 md:mb-8">
            More About Me
          </h1>
        </div>
        <div className="md:border-2 md:border-webtext-400 md:p-8">
          <h3 className="p-2 font-monoDM text-sm font-thin sm:text-lg md:text-xl  text-webtext-400 text-center md:text-justify w-screen  md:w-[60vw]">
            I've explored various fields like data analysis and information
            security, but my passion for development never waned. Teaching
            myself to be a Full Stack Developer was challenging but fulfilling.
            Now, I appreciate the teamwork and tranquility developers enjoy.
            Engaging in open-source projects, I've managed communities and
            tasks. Beyond coding, I believe in technology's potential for
            positive change. I'm dedicated to improving my skills to contribute
            to a better future. I stay updated through blogs and tech
            discussions on social media platforms.
          </h3>
        </div>
      </div>

      <Myexperience />
      <Footer />
    </>
  );
}

export default About;
