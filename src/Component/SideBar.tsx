import { FC } from "react";
import { MainBox } from "./MainBox";

export const SideBar: FC = () => {
  return (
    <>
      <div className=" flex">
      <nav className=" fixed flex flex-col left-0 w-[250px] -z-[100] pt-[100px] h-[100%] bg-[#e7e9eb]">
        <div className=" overflow-auto pr-[10px] hover:visible">
          <div className=" visible pb-[150px]">
            <div>
              <h1 className=" py-[10px] px-[15px] text-[20px] font-semi-bold">TypeScript tutorial</h1>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/index.php">TS HOME</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_intro.php">TS Introduction</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_getstarted.php">TS Get Started</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_simple_types.php">TS Simple Types</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_special_types.php">TS Special Types</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_arrays.php">TS Arrays</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_tuples.php">TS Turple</a></p>
              <p className=" hover:cursor-pointer px-[15px] bg-[rgb(4,170,109)]">TS Object Types</p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_enums.php">TS Enum</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php">TS Aliases & Interfaces</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_union_types.php">TS Union Types</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_functions.php">TS Function</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_casting.php">TS Casting</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_classes.php">TS Classes</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_basic_generics.php">TS Basic Generics</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_utility_types.php">TS Utility Types</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_keyof.php">TS Keyof</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_null.php">TS Null</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_definitely_typed.php">TS Definitely Typed</a></p>
              <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_5_updates.php">TS 5 Updates</a></p>   
            </div>
            
            <div>
                <h1 className=" py-[10px] px-[15px] text-[20px] font-semi-bold">TypeScript Exercises</h1>
                <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_editor.php">TS Editor</a></p>
                <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_exercises.php">TS Exercises</a></p>
                <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_quiz.php">Ts Quiz</a></p>
                <p className=" hover:cursor-pointer hover:bg-[#c0bdbd] px-[15px]"><a href="https://www.w3schools.com/typescript/typescript_exam.php">TS Certificate</a></p>
            </div>
          </div>
        </div>
      </nav> 
      <MainBox />
      </div>
    </>
  );
};
