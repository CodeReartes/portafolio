import React from "react";
import proyectoChuckNorrisApiReact from "../assets/portfolio/proyectoChuckNorrisApiReact.png";
import cursoCss from "../assets/portfolio/cursoCss.png";
import catalogoProductos from "../assets/portfolio/catalogoProductos.png";
import chat from "../assets/portfolio/chat.png";
import landingpage from "../assets/portfolio/landingpage.png";
import proyectodashboard from "../assets/portfolio/proyectodashboard.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: proyectoChuckNorrisApiReact,
      href: "https://github.com/CodeReartes/Proyecto-Api-Chuck-Norris",
     
      child1: (
        <>
         Demo
        </>
      ),
      child: (
        <>
         Code
        </>
      ),
      
    },
    {
      id: 1,
      src: chat,
      href : "https://github.com/CodeReartes/chat-mern-reartes",
      href1:"https://chat-app-reartes.netlify.app/",
       
      child1: (
        
        <>
         Code
        </>
        
      ),
      child: (
        <>
         Demo
        </>
      ),
      
    },
    { 
      id: 3,
      src: cursoCss, 
      href  : "https://codereartes.github.io/",
      href1 :"https://github.com/CodeReartes/CodeReartes.github.io",
       
      child1: (
        
        <>
         Code
        </>
        
      ),
      child: (
        <>
         Demo
        </>
      ),
      
    },
    {
      id: 4,
      src: catalogoProductos,
      href: "https://github.com/CodeReartes/Catalogo-Productos-Json",
      href1: "https://github.com/CodeReartes/Catalogo-Productos-Json",
       
      child1: (
        <>
         Demo
        </>
      ),
      child: (
        <>
         Code
        </>
      ),
      
    },
    {
      id: 5,
      src: landingpage,
      href: "https://github.com/CodeReartes/landingpage",
    
     
      child1: (
        <>
         Demo
        </>
      ),
      child: (
        <>
         Code
        </>
      ),
      
    },
    {
      id: 6,
      src: proyectodashboard,
      href: "https://github.com/CodeReartes/proyecto-dashboard",
     
      child1: (
        <>
         Demo
        </>
      ),
      child: (
        <>
         Code
        </>
      ),
      
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>



        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, child, child1, href, href1, style, download  }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
              <img
              key={id}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                  <li
            key={id}
            
          >
            <a
              href={href}
             
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
                  
                  
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <li
            key={id}
            
          >
            <a
              href  ={ href1 }
             
              target="_blank"
              rel="noreferrer"
            >
              {child1}
            </a>
          </li>
                  
                </button>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;