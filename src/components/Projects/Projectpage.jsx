import React from "react";
import trade from "../../asset/image/trade.png";
import transport from "../../asset/image/transport.png";
import sikander from "../../asset/image/sikander.png";
import greenscape from "../../asset/image/greenscape.png";
import listrace from "../../asset/image/listrace.png";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const projectItems = [
  {
    id: 1,
    img: trade,
    h3: "TRADE WEBSITE",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and multipages website.",
    link: "https://sksharma919839.github.io/trade/",
  },
  {
    id: 2,
    img: transport,
    h3: "TRANSPORT Website",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and singlepage website.",
    link: "https://sksharma919839.github.io/transport/",
  },
  {
    id: 3,
    img: sikander,
    h3: "Law Advocate Website",
    p: "The Website is for Adovocate and created in HTML , CSS , JavaScript. Fully Responsive",
    link: "https://www.sikanderandassociate.com/",
  },
  {
    id: 4,
    img: greenscape,
    h3: "GREENSCAPE Website",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and singlepage website.",
    link: "https://sksharma919839.github.io/greenscape/",
  },
  {
    id: 5,
    img: listrace,
    h3: "ListRace Website",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and singlepage website.",
    link: "https://sksharma919839.github.io/Listrace/",
  },
];
function Projectpage() {
  return (
    <>
      <div className="mb-[40px] pt-[120px]">
        <div className="ml-[50px]">
          <h1 className="text-[#ffffff] text-[60px] mb-[50px]">My Work</h1>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {projectItems.map((item) => (
            <div
              key={item.id}
              className="mx-[15px] work sm:h-[400px] my-[30px] flex-wrap rounded-xl overflow-hidden sm:w-[350px] relative w-[290px] h-[360px] "
            >
              <img
                src={item.img}
                className="rounded-xl sm:h-[400px] sm:w-[350px] w-[290px] h-[360px]"
                alt=""
              />
              <div className="layer">
                <h3 className="font-medium mb-[20px] text-[#ca4949] text-[24px]">
                  {item.h3}
                </h3>
                <p className="text-[16px] text-[#ffffff]">{item.p}</p>
                <Link
                  to={item.link}
                  target="_blank"
                  className="mt-[20px] text-[#ca4949] text-[18px] leading-[60px] bg-[#ffffff] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projectpage;
