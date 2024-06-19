import "./home.css";
import { BsStack } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFileArrowDown } from "react-icons/fa6";
import Workbag from "../assets/workbag.svg";
import Language from "../assets/language.svg";
import Tech from "../components/tech";
import Hindi from "../assets/hindi.svg";
import English from "../assets/english.svg";
import Linkedin from "../assets/LinkedIn.svg";
import GithubColored from "../assets/GithubColored.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";

import ReactLogo from "../assets/reactjs.svg";
import NodeLogo from "../assets/nodejs.svg";
import ExpressLogo from "../assets/express.svg";
import MongoLogo from "../assets/mongodb.svg";
import Tailwind from "../assets/tailwindcss.svg";
import Html5 from "../assets/html5.svg";
import Css3 from "../assets/css3.svg";
import JS from "../assets/js.svg";
import ThreeJs from "../assets/threejs.svg";
import C from "../assets/c.svg";
import Cpp from "../assets/c++.svg";
import Git from "../assets/git.svg";
import Github from "../assets/github.svg";
import Mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";
import Postman from "../assets/postman.svg";
import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const phrases = [
      "Hello!",
      'My name is <u style="color: #0ef">Allistair</u>.',
      "Nice to meet you.",
    ];
    const handleType = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <div className="canvas w-screen p-8 flex gap-4">
        <div className="left flex flex-col gap-4">
          <div className="tech-stack bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] w-96 rounded-3xl p-6 flex flex-col  items-center">
            <div className="tech-stack-heading flex gap-2">
              <div className="stack-icon flex justify-center items-center">
                <BsStack color="#a290fc" />
              </div>
              <h2 className="text-[var(--dark-gray-text)] font-mano font-light">
                Tech Stack
              </h2>
            </div>
            <div className="tech-stack-content pt-6 w-full grid grid-cols-2 gap-2">
              <Tech imgsrc={ReactLogo} techname="React" />
              <Tech imgsrc={NodeLogo} techname="NodeJs" />
              <Tech imgsrc={ExpressLogo} techname="ExpressJs" />
              <Tech imgsrc={MongoLogo} techname="MongoDB" />
              <Tech imgsrc={Tailwind} techname="Tailwind CSS" />
              <Tech imgsrc={Html5} techname="Html5" />
              <Tech imgsrc={Css3} techname="Css3" />
              <Tech imgsrc={JS} techname="Javascript" />
              <Tech imgsrc={ThreeJs} techname="ThreeJs" />
              <Tech imgsrc={C} techname="C" />
              <Tech imgsrc={Cpp} techname="C++" />
              <Tech imgsrc={Git} techname="Git" />
              <Tech imgsrc={Github} techname="Github" />
              <Tech imgsrc={Mysql} techname="MySQL" />
              <Tech imgsrc={postgresql} techname="PostgreSQL" />
              <Tech imgsrc={Postman} techname="Postman" />
            </div>
          </div>
          <div className="language bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] w-96 rounded-3xl p-6 flex flex-col  items-center">
            <div className="language-heading flex gap-2">
              <div className="language-icon flex justify-center items-center h-[36px] w-[36px]">
                {/* <HiMiniLanguage color="#a290fc" /> */}
                <img src={Language} alt="Language" className="h-full w-full" />
              </div>
              <h2 className="text-[var(--dark-gray-text)] font-mano font-light">
                Languages
              </h2>
            </div>
            <div className="language-content pt-2 w-full grid grid-cols-2 gap-2">
              <Tech imgsrc={English} techname="English" />
              <Tech imgsrc={Hindi} techname="Hindi" />
            </div>
          </div>
        </div>
        <div className="middle flex flex-col w-full ">
          <div className="socials flex gap-3 w-full">
            <div className="linkedin bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center relative">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="h-16 w-16 grayscale hover:grayscale-0"
              />
            </div>
            <div className="github  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center relative">
              <img
                src={GithubColored}
                alt="Github"
                className="h-16 w-16 grayscale hover:grayscale-0"
              />
            </div>
            <div className="twitter  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center justify-center relative">
              <img
                src={Twitter}
                alt="Twitter"
                className="h-16 w-16 scale-90 grayscale hover:grayscale-0"
              />
            </div>
            <div className="instagram  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center justify-center relative">
              <img
                src={Instagram}
                alt="Instagram"
                className="h-16 w-16 grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <div className="personal w-full mt-4  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 py-9 flex flex-col gap-3 items-center relative">
            <div className="personal-top flex w-full gap-4">
              <div className="personal-image -scale-x-100 hover:scale-x-100">
                <img src="/Pfp.webp" alt="Personal" className="w-32 h-32" />
              </div>
              <div className="personal-info">
                <div className="personal-info-top flex flex-col gap-2">
                  <div className="available flex gap-2 py-1 pl-2 pr-5 items-center bg-[var(--primary-border)] border-[1px] border-[var(--secondary-border)] rounded-3xl ">
                    <i className="pulse green"></i>
                    <p className="text-[var(--dark-gray-text)] font-mano text-sm">
                      Available To Work
                    </p>
                  </div>
                  <div className="myname">
                    <h1 className=" font-mano text-[var(--text-white)] font-semibold text-2xl">
                      PIYUSH JHA
                    </h1>
                  </div>
                </div>
                <div className="perosnal-info-bottom">
                  <h1 className="className=text-[var(--dark-gray-text)] font-mano">
                    <span className="typewriter">I am a developer</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="personal-middle w-full bg-[var(--tone-black)] border-spacing-3 border-[1px] border-[var(--primary-border)] rounded-2xl px-4 py-2 flex flex-wrap gap-2">
              <div className="location w-fit bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-3xl py-1 px-2 flex gap-1 items-center">
                <FaLocationDot color="#a290fc" />
                <p className="text-[var(--text-white)] font-mano text-[12px]">
                  Patiala, India
                </p>
              </div>
              <div className="location w-fit bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-3xl py-1 px-2 flex gap-1 items-center">
                <FaBook color="#a290fc" />
                <p className="text-[var(--text-white)] font-mano text-[12px]">
                  Electrical and Computer Engineer
                </p>
              </div>
              <div className="location w-fit bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-3xl py-1 px-2 flex gap-1 items-center">
                <FaClock color="#a290fc" />
                <p className="text-[var(--text-white)] font-mano text-[12px]">
                  IST
                </p>
              </div>

              <div className="location w-fit bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-3xl py-1 px-2 flex gap-1 items-center">
                <IoSchoolSharp color="#a290fc" />
                <p className="text-[var(--text-white)] font-mano text-[12px]">
                  Thapar Institute of Engineering and Technology
                </p>
              </div>
            </div>
            <div className="personal-bottom w-full flex gap-4">
              <div className="emailme cursor-pointer flex gap-2 justify-center items-center flex-1 bg-[var(--primary-border)] h-12 rounded-xl">
                <MdEmail color="#a290fc" />
                <p className="font-mano text-[var(--dark-gray-text)]">
                  Email Me
                </p>
              </div>
              <div className="whatsappme cursor-pointer flex gap-2 justify-center items-center flex-1 bg-[var(--primary-border)] h-12 rounded-xl">
                <IoLogoWhatsapp color="#a290fc" />
                <p className="font-mano text-[var(--dark-gray-text)]">
                  WhatsApp Me
                </p>
              </div>
            </div>
            <div className="resume absolute top-8 right-6 flex justify-center items-center gap-2">
              <p className="text-[var(--text-white)]">Resume</p>
              <div className="download bg-[#1f1f1f] p-2 rounded-md text-2xl cursor-pointer hover:-translate-y-1 duration-300 ">
                <FaFileArrowDown color="#cccccc" />
              </div>
            </div>
          </div>
          <div className="education h-full w-full mt-4  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 flex flex-col gap-3 items-center">
            <div className="twentytwentfive w-full bg-[var(--primary-border)]"></div>
          </div>
        </div>
        <div className="right flex flex-col w-fit">
          <div className="work relative pb-16 w-full  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-6 flex flex-col  items-center gap-6">
            <div className="work-heading flex gap-2">
              <div className="work-icon flex justify-center items-center">
                <img src={Workbag} alt="Work" className="w-5 h-5" />
              </div>
              <h2 className="text-[var(--dark-gray-text)] font-mano font-light">
                Projects
              </h2>
            </div>
            <div className="work-content w-full overflow-hidden max-w-[400px]">
              <div
                className="display scroll imgBox w-full flex gap-2"
                style={{ "--time": "30s" }}
              >
                <div className="flex">
                  <img
                    src={"/workss1.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss2.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss3.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss4.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss5.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss6.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss7.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss8.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                </div>
                <div className="flex">
                  <img
                    src={"/workss1.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss2.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss3.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss4.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss5.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss6.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss7.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                  <img
                    src={"/workss8.webp"}
                    alt="Work"
                    className="w-56 h-32 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="viewbutton cursor-pointer bg-[var(--primary-border)] w-36 p-2 absolute bottom-10 rounded-xl">
              <div className="inner bg-[var(--primary-purple)] p-2 rounded-xl flex justify-center items-center">
                <p className="text-mano">View Works</p>
              </div>
            </div>
          </div>
          <div className="contact h-full w-full mt-4  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 flex flex-col gap-3 items-center"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
