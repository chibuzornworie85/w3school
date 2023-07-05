import { FC } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { SiIcomoon } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import "../App.css";

export const NavBar: FC = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [drop2, setDrop2] = useState<boolean>(false);
  const [drop3, setDrop3] = useState<boolean>(false);
  const [drop4, setDrop4] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [color2, setColor2] = useState<boolean>(false);
  const [color3, setColor3] = useState<boolean>(false);
  const [color4, setColor4] = useState<boolean>(false);

  return (
    <>
      <nav className=" bg-[rgb(255,255,255)] flex justify-between px-[10px] z-10 items-center">
        <div className=" flex">
          <a href="https://www.w3schools.com/">
            <img
              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1691/original/306149583_580886133837672_8720407359695224497_n.png"
              alt="logo"
              className=" h-[60px] cursor-pointer hover:text-[green]"
            />
          </a>
          <ul className=" flex items-center">
            <div>
              <div
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                <li>
                  <div
                    onClick={() => {
                      setColor(!color);
                    }}
                  >
                    <p
                      className={`drop ${
                        color ? "active" : "inactive"
                      } bg-[rgb(40,42,53) px-[15px] py-[18px] gap-[5px] cursor-pointer flex items-center`}
                    >
                      Tutorials
                      <FaCaretDown />
                    </p>
                  </div>
                </li>
              </div>
              <div
                className={`dropdown-meun ${
                  drop ? "active" : "inactive"
                } absolute bg-[rgb(40,42,53)] left-0 top-[60px] overflow-y-scroll h-[100vh] w-[100%]`}
              >
                <div className=" flex flex-col">
                  <div className=" flex justify-around gap-[50px] py-[30px] items-center">
                    <h1 className=" text-[rgb(220,222,153)] text-[30px] font-[500]">
                      Tutorials and References
                    </h1>
                    <RxCross1 className=" h-[40px] w-[40px] cursor-pointer text-[white]" />
                  </div>
                  <div className="pb-[100px]">
                    <div className=" flex justify-around px-[150px]">
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">HTML and CSS</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">HTML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">RWD</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">BootStrap</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Sass</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Colors</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Icons</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SVG</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Canvar</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Graphics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">How To</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">JavaScript</h1>
                        <div>
                          <div className=" flex gap-[10px] ">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JavaScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">React</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">jQuery</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Vue</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AngularJs</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JSON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AJAX</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AppML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.JS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Backend</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PYTHON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MYSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PHP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JAVA</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C++</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C#</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">R</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Kotlin</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Go</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Django</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PostgreSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">TypeScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ASP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Node.js</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Raspberry Pi</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Git</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MongoDB</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AWS Cloud</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">XLM</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" border border-[rgb(119,119,119)] flex flex-col p-[20px] text-[white] mt-[20px]">
                                <p className=" text-[20px] font-[500]">Next Bootcamp:</p>
                                <p>August 1st</p>
                                <button className=" py-[4px] mt-[10px] rounded-[10px] bg-[rgb(4,170,109)]">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-around">
                    <div className=" relative -mb-[400px] right-[20px] -mr-[20px] bottom-[400px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Data Analytics</h1>
                      <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Generative AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-3.5</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-4</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Bard</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Machine Learning</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Data Science</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Numpy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Pandas</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SciPy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Matplotlib</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Statistics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Excel</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Sheets</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                    </div>
                    <div className=" relative bottom-[490px] -mb-[490px] right-[300px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Web Building</h1>
                      <div className=" text-[white]">
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Website <span className=" hover:border hover:border-[black] bg-[red] rounded-[10px] px-[5px]">HOT!</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Server <span className=" hover:border hover:border-[black] bg-[rgb(4,170,109)] rounded-[10px] px-[5px]">NEW</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Where To Start</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Templates</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Statistics</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Certificate</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Code Editor</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Test Your Typing Speed</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Play a code Game</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Cyper Security</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Accessibility</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Join our Newsletter</p>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  setDrop2(!drop2);
                }}
              >
                <li>
                  <div
                    onClick={() => {
                      setColor2(!color2);
                    }}
                  >
                    <p
                      className={`drop ${
                        color2 ? "active" : "inactive"
                      } bg-[rgb(40,42,53) px-[15px] py-[18px] gap-[5px] cursor-pointer flex items-center`}
                    >
                      Exercises
                      <FaCaretDown />
                    </p>
                  </div>
                </li>
              </div>
              <div
                className={`dropdown-meun ${
                  drop2 ? "active" : "inactive"
                } absolute bg-[rgb(40,42,53)] left-0 top-[60px] overflow-y-scroll h-[100vh] w-[100%]`}
              >
            <div className=" flex flex-col">
                  <div className=" flex justify-around gap-[50px] py-[30px] items-center">
                    <h1 className=" text-[rgb(220,222,153)] text-[30px] font-[500]">
                      Tutorials and References
                    </h1>
                    <RxCross1 className=" h-[40px] w-[40px] cursor-pointer text-[white]" />
                  </div>
                  <div className="pb-[100px]">
                    <div className=" flex justify-around px-[150px]">
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">HTML and CSS</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">HTML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">RWD</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">BootStrap</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Sass</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Colors</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Icons</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SVG</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Canvar</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Graphics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">How To</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">JavaScript</h1>
                        <div>
                          <div className=" flex gap-[10px] ">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JavaScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">React</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">jQuery</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Vue</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AngularJs</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JSON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AJAX</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AppML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.JS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Backend</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PYTHON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MYSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PHP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JAVA</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C++</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C#</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">R</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Kotlin</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Go</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Django</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PostgreSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">TypeScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ASP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Node.js</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Raspberry Pi</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Git</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MongoDB</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AWS Cloud</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">XLM</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" border border-[rgb(119,119,119)] flex flex-col p-[20px] text-[white] mt-[20px]">
                                <p className=" text-[20px] font-[500]">Next Bootcamp:</p>
                                <p>August 1st</p>
                                <button className=" py-[4px] mt-[10px] rounded-[10px] bg-[rgb(4,170,109)]">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-around">
                    <div className=" relative -mb-[400px] right-[20px] -mr-[20px] bottom-[400px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Data Analytics</h1>
                      <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Generative AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-3.5</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-4</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Bard</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Machine Learning</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Data Science</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Numpy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Pandas</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SciPy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Matplotlib</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Statistics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Excel</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Sheets</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                    </div>
                    <div className=" relative bottom-[490px] -mb-[490px] right-[300px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Web Building</h1>
                      <div className=" text-[white]">
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Website <span className=" hover:border hover:border-[black] bg-[red] rounded-[10px] px-[5px]">HOT!</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Server <span className=" hover:border hover:border-[black] bg-[rgb(4,170,109)] rounded-[10px] px-[5px]">NEW</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Where To Start</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Templates</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Statistics</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Certificate</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Code Editor</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Test Your Typing Speed</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Play a code Game</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Cyper Security</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Accessibility</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Join our Newsletter</p>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  setDrop3(!drop3);
                }}
              >
                <li>
                  <div
                    onClick={() => {
                      setColor3(!color3);
                    }}
                  >
                    <p
                      className={`drop ${
                        color3 ? "active" : "inactive"
                      } bg-[rgb(40,42,53) px-[15px] py-[18px] gap-[5px] cursor-pointer flex items-center`}
                    >
                      Get Certified
                      <FaCaretDown />
                    </p>
                  </div>
                </li>
              </div>
              <div
                className={`dropdown-meun ${
                  drop3 ? "active" : "inactive"
                } absolute bg-[rgb(40,42,53)] left-0 top-[60px] overflow-y-scroll h-[100vh] w-[100%]`}
              >
                <div className=" flex flex-col">
                  <div className=" flex justify-around gap-[50px] py-[30px] items-center">
                    <h1 className=" text-[rgb(220,222,153)] text-[30px] font-[500]">
                      Tutorials and References
                    </h1>
                    <RxCross1 className=" h-[40px] w-[40px] cursor-pointer text-[white]" />
                  </div>
                  <div className="pb-[100px]">
                    <div className=" flex justify-around px-[150px]">
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">HTML and CSS</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">HTML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">RWD</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">BootStrap</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Sass</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Colors</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Icons</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SVG</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Canvar</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Graphics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">How To</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">JavaScript</h1>
                        <div>
                          <div className=" flex gap-[10px] ">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JavaScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">React</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">jQuery</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Vue</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AngularJs</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JSON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AJAX</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AppML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.JS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Backend</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PYTHON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MYSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PHP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JAVA</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C++</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C#</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">R</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Kotlin</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Go</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Django</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PostgreSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">TypeScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ASP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Node.js</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Raspberry Pi</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Git</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MongoDB</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AWS Cloud</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">XLM</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" border border-[rgb(119,119,119)] flex flex-col p-[20px] text-[white] mt-[20px]">
                                <p className=" text-[20px] font-[500]">Next Bootcamp:</p>
                                <p>August 1st</p>
                                <button className=" py-[4px] mt-[10px] rounded-[10px] bg-[rgb(4,170,109)]">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-around">
                    <div className=" relative -mb-[400px] right-[20px] -mr-[20px] bottom-[400px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Data Analytics</h1>
                      <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Generative AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-3.5</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-4</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Bard</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Machine Learning</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Data Science</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Numpy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Pandas</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SciPy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Matplotlib</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Statistics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Excel</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Sheets</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                    </div>
                    <div className=" relative bottom-[490px] -mb-[490px] right-[300px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Web Building</h1>
                      <div className=" text-[white]">
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Website <span className=" hover:border hover:border-[black] bg-[red] rounded-[10px] px-[5px]">HOT!</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Server <span className=" hover:border hover:border-[black] bg-[rgb(4,170,109)] rounded-[10px] px-[5px]">NEW</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Where To Start</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Templates</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Statistics</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Certificate</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Code Editor</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Test Your Typing Speed</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Play a code Game</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Cyper Security</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Accessibility</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Join our Newsletter</p>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  setDrop4(!drop4);
                }}
              >
                <li>
                  <div
                    onClick={() => {
                      setColor4(!color4);
                    }}
                  >
                    <p
                      className={`drop ${
                        color4 ? "active" : "inactive"
                      } bg-[rgb(40,42,53) px-[15px] py-[18px] gap-[5px] cursor-pointer flex items-center`}
                    >
                      Services
                      <FaCaretDown />
                    </p>
                  </div>
                </li>
              </div>
              <div
                className={`dropdown-meun ${
                  drop4 ? "active" : "inactive"
                } absolute bg-[rgb(40,42,53)] left-0 top-[60px] overflow-y-scroll h-[100vh] w-[100%]`}
              >
            <div className=" flex flex-col">
                  <div className=" flex justify-around gap-[50px] py-[30px] items-center">
                    <h1 className=" text-[rgb(220,222,153)] text-[30px] font-[500]">
                      Tutorials and References
                    </h1>
                    <RxCross1 className=" h-[40px] w-[40px] cursor-pointer text-[white]" />
                  </div>
                  <div className="pb-[100px]">
                    <div className=" flex justify-around px-[150px]">
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">HTML and CSS</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">HTML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">RWD</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">BootStrap</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.CSS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Sass</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Colors</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Icons</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SVG</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Canvar</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Graphics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">How To</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">JavaScript</h1>
                        <div>
                          <div className=" flex gap-[10px] ">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JavaScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">React</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">jQuery</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Vue</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AngularJs</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JSON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AJAX</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AppML</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">W3.JS</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Backend</h1>
                        <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PYTHON</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MYSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PHP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">JAVA</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Reference</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C++</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">C#</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">R</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Kotlin</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Go</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Django</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">PostgreSQL</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">TypeScript</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ASP</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Node.js</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Raspberry Pi</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Git</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">MongoDB</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AWS Cloud</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">XLM</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" border border-[rgb(119,119,119)] flex flex-col p-[20px] text-[white] mt-[20px]">
                                <p className=" text-[20px] font-[500]">Next Bootcamp:</p>
                                <p>August 1st</p>
                                <button className=" py-[4px] mt-[10px] rounded-[10px] bg-[rgb(4,170,109)]">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-around">
                    <div className=" relative -mb-[400px] right-[20px] -mr-[20px] bottom-[400px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Data Analytics</h1>
                      <div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Generative AI</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-3.5</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">ChatGPT-4</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Bard</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Machine Learning</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Data Science</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Numpy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Pandas</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">SciPy</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Matplotlib</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Statistics</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Excel</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                          <div className=" flex gap-[10px]">
                            <button className=" px-[5px] rounded-[5px] hover:bg-[#c0bdbd]"><span className=" text-[rgb(210,221,210)]">Learn</span> <span className=" text-[white]">Google Sheets</span></button>
                            <p className=" underline text-[rgb(220,222,153)] hover:text-[white] cursor-pointer hover:bg-[rgb(4,170,109)] px-[6px] rounded-[10px] py-[3px]">Tutorial</p>
                          </div>
                        </div>
                    </div>
                    <div className=" relative bottom-[490px] -mb-[490px] right-[300px]">
                      <h1 className=" text-[rgb(220,222,153)] pb-[15px] text-[20px]">Web Building</h1>
                      <div className=" text-[white]">
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Website <span className=" hover:border hover:border-[black] bg-[red] rounded-[10px] px-[5px]">HOT!</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Create a Server <span className=" hover:border hover:border-[black] bg-[rgb(4,170,109)] rounded-[10px] px-[5px]">NEW</span></p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Where To Start</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Templates</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Statistics</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Web Certificate</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Code Editor</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Test Your Typing Speed</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Play a code Game</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Cyper Security</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Accessibility</p>
                        <p className=" hover:bg-[#c0bdbd] cursor-pointer pr-[150px] py-[5px] pl-[2px]">Join our Newsletter</p>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className=" flex gap-[5px] cursor-pointer">
          <ul className=" flex">
            <li className=" flex gap-[5px] items-center hover:bg-[rgb(231,233,235)] rounded-[20px] py-[5px] px-[15px]">
              <BsStars className=" text-[rgb(152,100,246)]" />
              <a href="https://www.w3schools.com/bootcamp/index.php">
                Bootcamps
              </a>
            </li>
            <li className=" flex items-center gap-[5px] hover:bg-[rgb(231,233,235)] rounded-[20px] py-[5px] px-[15px]">
              <FiGift className=" text-[rgb(4,170,109)]" />
              <a href="https://www.w3schools.com/spaces/index.php">Spaces</a>
            </li>
          </ul>
          <div className=" flex">
            <button className=" bg-[rgb(4,170,109)] hover:bg-[#157444e5] py-[10px] text-[white] rounded-[30px] relative left-[40px] -ml-[40px] px-[20px]">
              <a href="https://www.w3schools.com/signup/index.php">Sign Up</a>
            </button>
            <button className=" hover:bg-[rgb(4,170,109)] py-[10px] px-[20px] rounded-[30px] bg-[rgb(217,238,225)] pl-[40px] hover:text-[white]">
              <a href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com">
                Login
              </a>
            </button>
          </div>
        </div>
      </nav>
      <header className=" flex justify-between items-center px-[10px] bg-[rgb(40,42,53)] text-[white]">
        <div>
          <ul className=" flex gap-[10px] cursor-pointer">
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/html/default.asp">HTML</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/css/default.asp">CSS</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/js/default.asp">JAVASCRIPT</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/sql/default.asp">SQL</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/python/default.asp">PYTHON</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/java/default.asp">JAVA</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/php/default.asp">PHP</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">
                BOOTSTRAP
              </a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/howto/default.asp">HOW TO</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/c/index.php">C</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/cpp/default.asp">C++</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/cs/index.php">C#</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/react/default.asp">REACT</a>
            </li>
            <li className=" hover:bg-black px-[10px] py-[5px]">
              <a href="https://www.w3schools.com/r/default.asp">R</a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-[30px]">
          <WiMoonAltThirdQuarter className="  hover:bg-black w-[40px] h-[40px] px-[10px] py-[5px]" />
          <SiIcomoon className="  hover:bg-black w-[40px] h-[40px] px-[10px] py-[5px]" />
          <BiSearch className="  hover:bg-black w-[40px] h-[40px] px-[10px] py-[5px]" />
        </div>
      </header>
    </>
  );
};
