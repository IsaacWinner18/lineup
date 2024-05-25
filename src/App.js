import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// useCallback 
import {
  faBars,
  faChevronDown,
  faSearch,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

// Add the solid icons to the library
library.add(faBars, faGithub);




const Header = () => {
  
  const [menu, setMenu] = useState(true)

  const Menufunc = () => {
    setMenu(true)
  }

  const Menufun = () => {
    setMenu(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false);
      } else if (window.innerWidth < 1024) {
        setMenu(true)
      }
    };

    // Set the initial value based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
      const handleSelectTab = (tab) => {
        setSelectedTab(tab);
      };
    
      const [showFrontend, setShowFrontend] = useState(false);
      const frontendFun = () => {
        setShowFrontend(!showFrontend);
      };
    
      const [showBackend, setShowBackend] = useState(false);
      const Backend = () => {
        setShowBackend(!showBackend);
      };
    
      const [showCyber, setShowCyber] = useState(false);
      const Cyber = () => {
        setShowCyber(!showCyber);
      };
    
      const [showBlockChain, setShowBlockChain] = useState(false);
      const BlockChain = () => {
        setShowBlockChain(!showBlockChain);
      };
    
      const [selectedTab, setSelectedTab] = useState("PAGE");
    
      return (
        <div>
          <div className="flex">
            <div>
              <div
                 className={`  overlay min-h-screen bg-blue-950 w-80 pl-5  
                 ${menu ? "hidden" : "block"}
                 `}
              >
                <h1 className=" text-white text-3xl pb-5 "> <a href="/">
                  𝗗𝗼𝗰𝘂𝗔𝗿𝗲𝗮
                  </a> </h1>
                <div className="flex gap-4 ">
                  <input
                    type="text"
                    className=" text-white pl-2 bg-transparent outline-none border-2 border-blue-600 border-dotted rounded"
                  />
                  <div className="bg-blue-500 text-white px-3 py-2 rounded">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
    
                <div className="pt-10 cursor-pointer">
                  <ul className="text-purple-300 font-bold text-xl ">
                    <li className="pb-8">
                      {" "}
                      <span onClick={frontendFun}>
                        {" "}
                        FRONTEND{" "}
                        <FontAwesomeIcon
                          className="absolute left-60"
                          icon={faChevronDown}
                        />{" "}
                      </span>
                      <ul
                        className={`${
                          showFrontend ? "flex" : "hidden"
                        } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                      >
                        <li
                      
                          className="hover:text-violet-600"
                          onClick={() => {
                            handleSelectTab("HTML");
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                          }}
                         
                        >
                          
                          HTML
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("CSS");
                          }}
                        >
                          CSS
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("JS");
                          }}
                        >
                          JAVASCRIPT
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("REACT");
                          }}
                        >
                          REACT
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("TAILWIND");
                          }}
                        >
                          TAILWIND
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("MATERIAL");
                          }}
                        >
                          MATERIAL UI
                        </li>
                      </ul>
                    </li>
                    <li className=" pb-8 ">
                      {" "}
                      <span onClick={Backend}>
                        BACKEND{" "}
                        <FontAwesomeIcon
                          className="absolute left-60"
                          icon={faChevronDown}
                        />{" "}
                      </span>
                      <ul
                        className={`${
                          showBackend ? "flex" : "hidden"
                        } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                      >
                        <li
                          className="hover:text-violet-600"
                          onClick={() => { 
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("NODE")
                          }}
                        >
                          NODE JS
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); } 
                            handleSelectTab("PYTHON")
                          }}
                        >
                          PYTHON
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("JAVA")
                          }}
                        >
                          JAVA
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("PHP")
                          }}
                        >
                          PHP
                        </li>
                      </ul>
                    </li>
                    <li className="pb-8 ">
                      {" "}
                      <span onClick={Cyber}>
                        {" "}
                        CYBER SECURITY{" "}
                        <FontAwesomeIcon
                          className="absolute left-60"
                          icon={faChevronDown}
                        />{" "}
                      </span>
                      <ul
                        className={`${
                          showCyber ? "flex" : "hidden"
                        } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                      >
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("NETWORK")
                          }}
                        >
                          NETWORK SECURITY
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("CLOUD")
                          }}
                        >
                          CLOUD SECURITY
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("PENETRATION")
                          }}
                        >
                          PENETRATION TESTING
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("VULNERABILITY")
                          }}
                        >
                          VULNERABILITY MANAGEMENT
                        </li>
                      </ul>
                    </li>
                    <li className="pb-8 ">
                      {" "}
                      <span onClick={BlockChain}>
                        {" "}
                        BLOCKCHAIN{" "}
                        <FontAwesomeIcon
                          className="absolute left-60"
                          icon={faChevronDown}
                        />{" "}
                      </span>
                      <ul
                        className={`${
                          showBlockChain ? "flex" : "hidden"
                        } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                      >
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                             handleSelectTab("CRYPTO")}}
                        >
                          CRYPTOCURRENCIES
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                             handleSelectTab("SMART")}}
                        >
                          SMART CONTRACTS
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                            handleSelectTab("DECENTRALIZED")}}
                        >
                          DECENTRALIZED FINANCE (DeFi)
                        </li>
                        <li
                          className="hover:text-violet-600"
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              Menufunc(); }
                             handleSelectTab("SERVICE")}}
                        >
                          BLOCKCHAIN AS A SERVICE (BaaS)
                        </li>
                      </ul>
                    </li>
                    <li
                      className="pb-8 hover:text-violet-600"
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          Menufunc(); } 
                        handleSelectTab("AI")}}
                    >
                      {" "}
                      AI{" "}
                    </li>
                    <li
                      className="pb-8 hover:text-violet-600"
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          Menufunc(); } 
                        handleSelectTab("ML")}}
                    >
                      {" "}
                      ML{" "}
                    </li>
                    <li
                      className="pb-8 hover:text-violet-600"
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          Menufunc(); } 
                        handleSelectTab("VR")}}
                    >
                      {" "}
                      VR{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 flex-1 p-2 lg:p-0 min-h-screen ">
              <div className="flex justify-between bg-blue-800 m-0 pt-2 px-4 rounded-2xl">
                <div className="text-white text-2xl pb-5 block lg:hidden">
                  <a href="/">
                  𝗗𝗼𝗰𝘂𝗔𝗿𝗲𝗮
                  </a>
                </div>
    
                <div
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      Menufun();
                    }
                  }}
                  className="bar flex justify-end text-white text-3xl lg:hidden"
                >
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              <div className="pl-2 pr-2 pt-1 lg:pt-10 mt-5">
                {selectedTab === "PAGE" && (
                  <>
                    <div className="flex flex-row lg:ml-32 lg:flex-row">
                      <div className=" pt-4 pb-16 rounded-2xl mb-8">
                        
                        <p className="text-purple-300 font-mono text-lg pb-10 ">
                        DocuArea is a documentation platform designed to help organize and manage various technical documents related to web development, programming languages, and technology stacks. It provides a user-friendly interface to explore, search, and access relevant documentation efficiently.
                        </p>
                        <p className=" text-center text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="git clone https://github.com/IsaacWinner18/Docuworlds.git">
                            Clone site <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {selectedTab === "HTML" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-2 lg:w-80 whitespace-normal break-words overflow-hidden">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          HTML.com
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 inline-block ">
                          While many guides on the internet attempt to teach HTML
                          using a lot of mind-boggling theory, this tutorial will
                          instead focus on giving you the practical skills to build
                          your first site.
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://HTML.com">
                            Visit site <FontAwesomeIcon icon={faLink} />
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-2 lg:w-80">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          HTML W3SCHOOLS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2">
                          Unlike numerous internet guides delving into intricate
                          theories to teach HTML, this tutorial prioritizes
                          imparting practical skills for constructing your initial
                          website.
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.w3schools.com/html/">
                            Visit site <FontAwesomeIcon icon={faLink} />
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-2 lg:w-80">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          HTML MDN WEB DOCS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2">
                          Unlike numerous internet guides laden with intricate
                          theory, this documentation prioritizes imparting practical
                          skills, empowering you to construct your inaugural
                          website.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
                            Visit site <FontAwesomeIcon icon={faLink} />
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "CSS" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-2 lg:w-80 whitespace-normal break-words overflow-hidden">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          CSS.com
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          In lieu of delving into complex theories, this guide
                          emphasizes practical skills, centering on CSS to help you
                          craft your debut site.
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://CSS.com">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          CSS W3SCHOOLS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Unlike many CSS guides drowning in complex theory, this
                          tutorial emphasizes practical skills. It aims to equip you
                          to style your first site effectively.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.w3schools.com/css/default.asp">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          CSS WEB.DEV
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          While numerous guides dive into complex theory, this
                          tutorial emphasizes practical skills. It's designed to
                          empower you with the ability to craft your first site
                          using CSS.
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://web.dev/learn/css">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "JS" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          JS MDN WEB DOCS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          In lieu of drowning in theoretical complexities, this
                          documentation emphasizes practicality, empowering you to
                          craft your inaugural site using JavaScript.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          JS W3SCHOOLS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Contrary to numerous tutorials emphasizing intricate
                          JavaScript theory, this guide focuses on imparting
                          practical skills for crafting your first website using
                          JavaScript.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.w3schools.com/js/default.asp">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
    
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          JAVASCRIPT.COM
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          While several tutorials inundate with bewildering
                          JavaScript theory, this guide emphasizes practical skills,
                          empowering you to construct your inaugural site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.javascript.com/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "REACT" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          REACT.DEV
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          While numerous guides delve into intricate theories, this
                          tutorial prioritizes practical skills. It aims to equip
                          you with the know-how to construct your initial website,
                          leveraging REACT instead of traditional HTML.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://react.dev/learn">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "TAILWIND" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          TAILWINDCSS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Embrace TAILWIND for practical JavaScript learning,
                          shifting from theory to hands-on skills in building your
                          first site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://tailwindcss.com/docs/installation">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "MATERIAL" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          MATERIAL UI
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Switch to MATERIAL UI for hands-on JavaScript learning,
                          departing from theory and focusing on crafting your
                          initial site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://mui.com/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {selectedTab === "NODE" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          NODE.ORG
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Shift to NODEJS for practical JavaScript learning,
                          bypassing theoretical complexities, and focus on building
                          your initial site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://nodejs.org/docs/latest/api/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {selectedTab === "PYTHON" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          PYTHON.ORG
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Shift to Python for a hands-on approach in building your
                          first site, veering away from extensive theory.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://docs.python.org/3/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "JAVA" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          JAVA.DEV
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Shifting from intricate theory, this Java-based tutorial
                          prioritizes practical skills, guiding you to construct
                          your initial website.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://dev.java/learn/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "PHP" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          PHP.NET
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Unlike numerous internet guides delving into intricate PHP
                          theory, this PHP tutorial emphasizes furnishing practical
                          skills for crafting your initial website.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.php.net/manual/en/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "NETWORK" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          NETWORK SECURITY
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          While myriad online guides aim to teach network security
                          through intricate theory, this tutorial prioritizes
                          imparting practical skills for securing your network.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.checkpoint.com/cyber-hub/network-security/what-is-network-security/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "CLOUD" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          CLOUD SECURITY
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          In the realm of cloud security, numerous guides delve into
                          perplexing theories. This tutorial, however, emphasizes
                          furnishing practical skills for safeguarding your cloud
                          infrastructure.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.ibm.com/topics/cloud-security">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "PENETRATION" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          PENETRATION TESTING
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Numerous online guides delve into complex theory to teach
                          penetration-testing, but this tutorial prioritizes
                          practical skills for initiating your penetration testing
                          journey.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.cloudflare.com/learning/security/glossary/what-is-penetration-testing/">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "VULNERABILITY" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          VULNERABILITY
                          <br /> MANAGEMENT
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Guides often delve into mind-boggling theory when teaching
                          vulnerability-management. This tutorial, however,
                          emphasizes practical skills to secure your first site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.microsoft.com/en/security/business/security-101/what-is-vulnerability-management#:~:text=FAQs-,Vulnerability%20management%20defined,of%20an%20overall%20security%20program.">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "CRYPTO" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          CRYPTOCURRENCIES
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          In lieu of intricate theory, this tutorial prioritizes
                          practical skills, guiding you to construct your initial
                          site using cryptocurrencies.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "SMART" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          SMART CONTRACTS
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Unlike many guides delving into intricate theory, this
                          tutorial prioritizes practical skills, enabling you to
                          craft your initial smart contract.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-smart-contract">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "DECENTRALIZED" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          DECENTRALIZED <br /> FINANCE (DeFi)
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Unlike most online DeFi guides drowning in complex theory,
                          this tutorial prioritizes practical skills, guiding you to
                          construct your inaugural decentralized finance project.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.investopedia.com/decentralized-finance-defi-5113835">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "SERVICE" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          BLOCKCHAIN AS A <br /> SERVICE (BaaS)
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Amid web guides laden with intricate Blockchain as a
                          Service (BaaS) theory, this tutorial prioritizes practical
                          skills, enabling you to construct your initial Blockchain
                          as a Service (BaaS) application.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.investopedia.com/terms/b/blockchainasaservice-baas.asp">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "AI" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          Artificial Intelligence (AI)
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Unlike theory-heavy AI guides online, this tutorial
                          prioritizes practical skills, guiding you to build your
                          initial site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence">
                            Visit site <FontAwesomeIcon icon={faLink} />
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "ML" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          Machine Learning (ML)
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Amid theory-heavy guides, this tutorial prioritizes
                          practical ML skills, emphasizing building your inaugural
                          site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.techtarget.com/searchenterpriseai/definition/machine-learning-ML">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
    
                {selectedTab === "VR" && (
                  <>
                    <div className="flex flex-col flex-wrap lg:flex-row gap-5">
                      <div className="text-center bg-blue-950 px-5 pt-4 pb-16 rounded-2xl mb-8">
                        <p className="text-purple-100 font-sans font-bold text-2xl pb-5">
                          Virtual Reality (VR)
                        </p>
                        <p className="text-purple-300 font-mono text-base pb-2 lg:w-60 ">
                          Many online VR guides delve into complex theory, but this
                          tutorial prioritizes practical skills for crafting your
                          debut site.{" "}
                        </p>
                        <p className="text-purple-100 bg-blue-500 py-2 px-6 rounded inline-block">
                          <a href="https://www.techtarget.com/whatis/definition/virtual-reality">
                            Visit site <FontAwesomeIcon icon={faLink} />{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            ;
          </div>
        </div>
      );
}

export default Header;
