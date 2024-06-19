import "./home.css";
import { BsStack } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Education from "../assets/education.svg";
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
      <div className="canvas w-screen gap-4 flex justify-center items-center flex-col md:flex-row p-2 py-8 sm:p-8">
        <div className="msresponsive-top w-full h-full flex gap-4 flex-col-reverse items-center justify-center sm:flex-row">
          <div className="left flex flex-col gap-4 max-w-full w-[480px] sm:max-w-96">
            <div className="tech-stack w-full bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-6 flex flex-col  items-center sm:min-w-96 sm:min-h-fit ">
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
            <div className="language bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] sm:min-w-96 rounded-3xl p-6 flex flex-col  items-center  sm:min-h-fit">
              <div className="language-heading flex gap-2">
                <div className="language-icon flex justify-center items-center h-[36px] w-[36px]">
                  {/* <HiMiniLanguage color="#a290fc" /> */}
                  <img
                    src={Language}
                    alt="Language"
                    className="h-full w-full"
                  />
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
          <div className="middle flex flex-col h-full w-full max-w-[480px] sm:max-w-[480px] sm:min-w-[480px]">
            <div className="socials flex gap-3 w-full">
              <div className="linkedin bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center relative">
                <a
                  href="https://www.linkedin.com/in/piyush-jha-586218227/"
                  target="_blank"
                >
                  <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="h-16 w-16 grayscale "
                  />
                </a>
              </div>
              <div className="github  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center relative">
                <a href="https://github.com/Piyushjha03" target="_blank">
                  <img
                    src={GithubColored}
                    alt="Github"
                    className="h-16 w-16 grayscale "
                  />
                </a>
              </div>
              <div className="twitter  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center justify-center relative">
                <a href="https://x.com/PiyushJha_dev" target="_blank">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="h-16 w-16 scale-90 grayscale "
                  />
                </a>
              </div>
              <div className="instagram  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)] flex-1 rounded-3xl p-2 flex flex-col  items-center justify-center relative">
                <a href="https://www.instagram.com/_jhapiyush/" target="_blank">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="h-16 w-16 grayscale"
                  />
                </a>
              </div>
            </div>
            <div className="personal w-full mt-4 bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 py-9 flex flex-col gap-3 items-center relative">
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
                      <span className="typewriter text-sm text-mano text-[var(--text-white)]">
                        I am a{" "}
                        <span className="text-lg text-[var(--primary-purple)] ml-1">
                          {" "}
                          Developer
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="personal-middle w-full bg-[var(--tone-black)] border-spacing-3 border-[1px] border-[var(--primary-border)] rounded-2xl  flex flex-wrap gap-2 py-2 px-2 sm:px-4 ">
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
              <div className="personal-bottom w-full flex gap-4 flex-col sm:flex-row">
                <a href="mailto:jhapiyush2305@gmail.com " className="flex-1">
                  <div className="emailme w-full cursor-pointer flex gap-2 justify-center items-center  bg-[var(--primary-border)] min-h-12 rounded-xl">
                    <MdEmail color="#a290fc" />
                    <p className="font-mano text-[var(--dark-gray-text)]">
                      Email Me
                    </p>
                  </div>
                </a>
                <a href="https://wa.me/+919693169271" className="flex-1">
                  <div className="whatsappme cursor-pointer flex gap-2 justify-center items-center  bg-[var(--primary-border)] min-h-12 rounded-xl">
                    <IoLogoWhatsapp color="#a290fc" />
                    <p className="font-mano text-[var(--dark-gray-text)]">
                      WhatsApp Me
                    </p>
                  </div>
                </a>

                <div className="resume flex justify-center items-center gap-2 cursor-pointer flex-1 bg-[var(--primary-border)] min-h-12 rounded-xl sm:hidden">
                  <p className="text-[var(--text-white)]">Resume</p>
                  <a
                    href="https://drive.google.com/file/d/1becCGmFJLDO9byeqKwriaamLv77RHIpL/view?usp=drive_link"
                    target="_blank"
                  >
                    <div className="download  p-2 rounded-md text-2xl cursor-pointer hover:-translate-y-1 duration-300 ">
                      <FaFileArrowDown color="#cccccc" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="resume absolute top-8 right-6  justify-center items-center gap-2 hidden sm:flex">
                <p className="text-[var(--text-white)]">Resume</p>
                <a
                  href="https://drive.google.com/file/d/1becCGmFJLDO9byeqKwriaamLv77RHIpL/view?usp=drive_link"
                  target="_blank"
                >
                  <div className="download bg-[#1f1f1f] p-2 rounded-md text-2xl cursor-pointer hover:-translate-y-1 duration-300 ">
                    <FaFileArrowDown color="#cccccc" />
                  </div>
                </a>
              </div>
            </div>
            <div className="contact relative h-full w-full mt-5 pb-11 bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 flex flex-col gap-6 items-center">
              <div className="contact-heading flex gap-2">
                <div className="contact-icon flex justify-center items-center">
                  <FaHandshakeSimple color="#a290fc" className="h-6 w-6" />
                </div>
                <h2 className="text-[var(--dark-gray-text)] font-mano font-light">
                  Connect
                </h2>
              </div>
              <div className="contact-content w-full flex flex-col gap-4">
                <form className="gap-4">
                  <div className="contact-input flex flex-col gap-2 text-mano text-white">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-xl p-2 focus:outline-none focus:border-[2px] focus:border-[var(--primary-purple)]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-[var(--primary-border)] border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-xl p-2 focus:outline-none focus:border-[2px] focus:border-[var(--primary-purple)]"
                    />
                    <textarea
                      placeholder="Message"
                      className=" bg-[var(--primary-border)] resize-none  border-spacing-3 border-[1px] border-[var(--secondary-border)] rounded-xl p-2 focus:outline-none focus:border-[2px] focus:border-[var(--primary-purple)] "
                    />
                  </div>
                  <div className="contact-submit cursor-pointer bg-[var(--primary-border)] p-2 rounded-xl absolute bottom-2 right-4">
                    <div className="inner bg-[var(--primary-purple)] p-2 rounded-xl flex justify-center items-center">
                      <p className="text-mano flex ">
                        <IoIosSend className="h-6 w-6" />
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="msresponsive-bottom w-full flex justify-center items-center sm:justify-center">
          <div className="right flex flex-col gap-4 w-full max-w-[480px] sm:max-w-full sm:w-full md:flex-col items-center sm:flex-row sm:justify-center sm:items-stretch">
            <div className="work relative pb-16  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-6 flex flex-col  items-center gap-6 w-full md:min-w-full sm:max-w-[384px]">
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
                <a href="https://github.com/piyushjha03" target="_blank">
                  <div className="inner bg-[var(--primary-purple)] p-2 rounded-xl flex justify-center items-center">
                    <p className="text-mano">View Works</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="education  overflow-scroll h-full max-h-[450px]   bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4 pt-0 flex flex-col gap-6 items-center mt-0 w-full md:w-full md:mt-4 sm:max-w-[480px]">
              <div className="education-header w-full flex justify-center items-center bg-[var(--primary-bg)] gap-2 sticky top-0 py-3">
                <div className="education-icon flex justify-center items-center">
                  <img src={Education} alt="Education" className="w-5 h-5" />
                </div>
                <h2 className="text-[var(--dark-gray-text)] font-mano font-light">
                  Education
                </h2>
              </div>
              <div className="educontent w-full">
                <div className="2025 w-full h-[35%] flex justify-start items-stretch gap-6 sm:justify-between">
                  <div className="leftinfo flex flex-col gap-3 max-w-[70%] flex-2 bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4">
                    <h2 className="text-mano text-xl text-[#e4e4e6]">
                      Engineering
                    </h2>
                    <p className="text-mano text-xs text-[var(--dark-gray-text)] ">
                      In Electrical and Computer
                    </p>
                    <p className="text-mano text-xs text-[var(--dark-gray-text)] pb-24 break-words">
                      From Thapar Institute of Engineering and Technology
                    </p>
                  </div>
                  <div className="centerline z-10 min-h-[100%] w-[2px] bg-[var(--dark-gray-text)] relative">
                    <div className="dot absolute top-0 transform translate-x-[-40%] translate-y-[-50%]">
                      <i className="pulse-dot purple z-50"></i>
                    </div>
                    <div className="dot absolute bottom-0 transform translate-x-[-40%] translate-y-[50%]">
                      <i className="pulse-dot purple z-50"></i>
                    </div>
                  </div>
                  <div className="rightdate min-h-full relative">
                    <p className="text-sm absolute bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-2 tex-mano text-white top-0 transform translate-y-[-25px]  sm:translate-y-[-20px] sm:translate-x-[-50px]">
                      2025
                    </p>
                    <p className="text-sm absolute bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-2 tex-mano text-white  bottom-0 transform translate-x-[0px] translate-y-[17px] sm:translate-x-[-50px]">
                      2021
                    </p>
                  </div>
                </div>
                <div className="2021 h-[35%] flex justify-start items-stretch gap-6 sm:justify-between">
                  <div className="leftinfo flex flex-col gap-3 min-w-[70%] max-w-[70%] flex-2 bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4">
                    <h2 className="text-mano text-xl text-[#e4e4e6]">XIIth</h2>
                    <p className="text-mano text-xs text-[var(--dark-gray-text)] ">
                      In Science
                    </p>
                    <p className="text-mano text-xs text-[var(--dark-gray-text)] pb-24">
                      From JVM Shyamali
                    </p>
                  </div>
                  <div className="centerline z-10 min-h-[100%] w-[2px] bg-[var(--dark-gray-text)] relative">
                    <div className="dot absolute bottom-0 transform translate-x-[-40%] translate-y-[50%]">
                      <i className="pulse-dot purple z-50"></i>
                    </div>
                  </div>
                  <div className="rightdate min-h-full relative">
                    <p className="text-sm absolute  bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-2 tex-mano text-white bottom-0 transform translate-y-[17px] translate-x-[0px] sm:translate-x-[-50px]">
                      2019
                    </p>
                  </div>
                </div>
                <div className="2019 w-full h-[35%] flex justify-start items-stretch gap-6 sm:justify-between">
                  <div className="leftinfo flex flex-col gap-3 min-w-[70%] max-w-[70%] flex-2 bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-4">
                    <h2 className="text-mano text-xl text-[#e4e4e6]">Xth</h2>

                    <p className="text-mano text-xs text-[var(--dark-gray-text)] pb-24">
                      From D.A.V Public School
                    </p>
                  </div>
                  <div className="centerline z-10 min-h-[100%] w-[2px] bg-[var(--dark-gray-text)] relative">
                    <div className="dot absolute bottom-0 transform translate-x-[-40%] translate-y-[50%]">
                      <i className="pulse-dot purple z-50"></i>
                    </div>
                  </div>
                  <div className="rightdate min-h-full relative">
                    <p className="text-sm absolute bottom-0 transform translate-y-[17px] bg-[var(--primary-bg)] border-spacing-3 border-[1px] border-[var(--primary-border)]  rounded-3xl p-2 tex-mano text-white translate-x-[0px] sm:translate-x-[-50px]">
                      2005
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
