import { FC } from "react";
import pic from "./Asset/code.png";
import pic2 from "./Asset/codex.png";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import { Footer } from "./Footer";

export const MainBox: FC = () => {
  return (
    <>
      <div className=" relative w-[80%] h-[100vh] left-[250px] flex flex-col pt-[100px]">
        <div className=" flex justify-center p-[15px]">
          <a
            href="https://googleads.g.doubleclick.net/aclk?sa=l&ai=CcbFHCHuiZMm_EYyulgT4ma7oD_qy4Y9xrKzUsYMRZBABII69nhxgt7yDhfQwoAHk-IvjA8gBA-ACAKgDAcgDCKoEtwJP0PW0XtU7GrMMr6OusKCIcR9A-PonCrNrEIGZESz7ob9T22HeVAWt2n8BNnb-m0Jw8sd9WqULzeRg9JRhDk3FmHRnScAvELK-WAZWqaMCboZkLbCPXPtzWCHAecVZGGAi0DEERFD0BktLPHweusWY9VC3ekmrC2pZGnX0rfWHwk_C0lmYCsXIaNKo1M5G06yWhIHDG2mYjVDWqEt6JfrB_llGsn2a6tGnjGVb2MP4c8FlEAiwrLOfqD0cdmEJqqpqCFzwQ3PharwUPNrw0KpR4z0OpzcvnY7up8xjzpitbyvYxCzpTBVJ4w7UMiagiRAIncXnmEMxe5dxMqRISLg81h_Q43wNp_QCsK0me174XEZlYKAxjfA98mabDaO8MF4nvbenvLIZl1CPOQ6NQI5zbhgYNFdacsAEiYCItqAE4AQBoAYDgAfwpqSaAagHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB4OtsQKoB_-esQKoB9-fsQKoB8qpsQKoB-ulsQLYBwHSCB0IjOGAQBABGB0yBIvCgQ46B5rQgICAgAxIvf3BOvIIG2FkeC1zdWJzeW4tNjQxODE5ODcwMjU1NjkzN5oJYWh0dHBzOi8vd3d3LnRoZXJtb2Zpc2hlci5jb20vdXMvZW4vaG9tZS9nbG9iYWwvZm9ybXMvY2xpbmljYWwvY29uc3RpdHV0aW9uYWwtZ2VuZXRpYy10ZXN0aW5nLmh0bWyxCTTCBpnL073_gAoDyAsB4AsBuAwB2gwRCgsQgNXj0cqZleO9ARICAQOqDQJOR9gTDdAVAfgWAYAXAQ&ase=2&num=1&cid=CAQSGwBygQiD19i2pY1Czspa2qNmkUUcGhtIc-71cRgB&sig=AOD64_0csoBV85SbWmrLjrOJbmsZ8QEZGA&client=ca-pub-4276969157128104&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://pixel.everesttech.net/3652/cq%3Fev_sid%3D3%26ev_ln%3D%26ev_lx%3D%26ev_crx%3D642567862944%26ev_mt%3D%26ev_n%3Dd%26ev_ltx%3D%26ev_pl%3Dwww.w3schools.com%26ev_pos%3D%26ev_dvc%3Dc%26ev_dvm%3D%26ev_phy%3D1010294%26ev_loc%3D%26ev_cx%3D19370247055%26ev_ax%3D146142265353%26ev_efid%3D%7Bgclid%7D:G:s%26url%3Dhttps://www.thermofisher.com/us/en/home/global/forms/clinical/constitutional-genetic-testing.html%253Fcid%253Dgsd_rph_sbu_r03_co_cp1484_pjt8536_col022170_0ds_gdn_da_lgn_rt_s00_CmaNgsWhtp-RtEmea%2526ef_id%253D%257Bgclid%257D:G:s%2526s_kwcid%253DAL!3652!3!642567862944!!www.w3schools.com!d!!!19370247055!146142265353"
            target="_blank"
          >
            <img
              className=" cursor-pointer"
              src="https://tpc.googlesyndication.com/simgad/4288960982451256023"
              alt="image"
            />
          </a>
        </div>
        <div className=" flex gap-[10px]">
          <div>
            <div className=" px-[20px]">
              <h1 className=" font-normal text-[40px]">
                TypeScript Object Types
              </h1>
              <div className=" flex justify-between pt-[20px] pb-[10px]">
                <button className=" bg-[rgb(4,170,109)] hover:bg-[#157444e5] text-[white] py-[10px] rounded-[10px] text-[20px] px-[30px]">
                  <a
                    href="https://www.w3schools.com/typescript/typescript_tuples.php"
                    className=" flex items-center gap-[5px]"
                  >
                    <BiSolidChevronLeft />
                    Previous
                  </a>
                </button>
                <button className=" bg-[rgb(4,170,109)] hover:bg-[#157444e5] text-[white] py-[10px] rounded-[10px] text-[20px] px-[30px]">
                  <a
                    href="https://www.w3schools.com/typescript/typescript_enums.php"
                    className=" flex items-center gap-[5px]"
                  >
                    Next <BiSolidChevronRight />
                  </a>
                </button>
              </div>
              <hr />
              <div className=" leading-[40px] pt-[15px] pb-[10px]">
                <p>TypeScript has a specific syntax for typing objects.</p>
                <p>
                  Read more about objects in our{" "}
                  <span className=" underline cursor-pointer hover:text-[rgb(4,170,109)]">
                    <a href="https://www.w3schools.com/js/js_objects.asp">
                      JavaScript Objects chapter.
                    </a>
                  </span>
                </p>
              </div>
              <hr />
              <div className=" bg-[rgb(231,233,235)] p-[20px] rounded-[10px] mt-[20px] mb-[20px] w-[100%]">
                <div className=" flex justify-between items-center">
                  <h1 className=" text-[20px]">Example</h1>
                  <button className=" text-white bg-[black] text-[15px] py-[10px] px-[20px]">
                    Get your own TypeScript Server
                  </button>
                </div>
                <div>
                  <img src={pic} alt="an image" className=" py-[10px]" />
                </div>
                <button className=" bg-[rgb(4,170,109)] py-[5px] px-[20px] rounded-[10px] text-[20px] text-[white] hover:bg-[#157444e5]">
                  <a
                    href="https://www.w3schools.com/typescript/trytypescript.php?filename=demo_object_types_ex"
                    className=" flex items-center gap-[5px]"
                  >
                    Try it Yourself <BiChevronsRight />
                  </a>
                </button>
              </div>
            </div>
            <div className=" bg-[rgb(217,238,225)] p-[40px]">
              <p>
                Object types like this can also be written separately, and even
                be reused, look at{" "}
                <span className=" underline hover:text-[rgb(4,170,109)]">
                  <a href="https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php">
                    interfaces
                  </a>
                </span>{" "}
                for more details.
              </p>
            </div>

            <div className=" px-[20px]">
              <h1 className=" font-normal text-[40px]">Type Inference</h1>
              <p>
                TypeScript can infer the types of properties based on their
                values.
              </p>
              <div className=" bg-[rgb(231,233,235)] p-[20px] rounded-[10px] mt-[20px] mb-[20px] w-[100%]">
                <div className=" flex items-center">
                  <h1 className=" text-[20px]">Example</h1>
                </div>
                <div>
                  <img src={pic} alt="an image" className=" py-[10px]" />
                </div>
                <button className=" bg-[rgb(4,170,109)] py-[5px] px-[20px] rounded-[10px] text-[20px] text-[white] hover:bg-[#157444e5]">
                  <a
                    href="https://www.w3schools.com/typescript/trytypescript.php?filename=demo_object_types_ex"
                    className=" flex items-center gap-[5px]"
                  >
                    Try it Yourself <BiChevronsRight />
                  </a>
                </button>
              </div>
              <h1 className=" font-normal text-[40px]">Optional Properties</h1>
              <p>
                Optional properties are properties that don't have to be defined
                in the object definition.
              </p>
              <div className=" bg-[rgb(231,233,235)] p-[20px] rounded-[10px] mt-[20px] mb-[20px] w-[100%]">
                <div className=" flex items-center">
                  <h1 className=" text-[20px]">
                    Example without an optional property
                  </h1>
                </div>
                <div>
                  <img src={pic} alt="an image" className=" py-[10px]" />
                </div>
                <button className=" bg-[rgb(4,170,109)] py-[5px] px-[20px] rounded-[10px] text-[20px] text-[white] hover:bg-[#157444e5]">
                  <a
                    href="https://www.w3schools.com/typescript/trytypescript.php?filename=demo_object_types_ex"
                    className=" flex items-center gap-[5px]"
                  >
                    Try it Yourself <BiChevronsRight />
                  </a>
                </button>
              </div>

              <h1 className=" font-normal text-[40px]">TypeScript Exercises</h1>
              <div className=" bg-[rgb(40,42,53)] p-[20px] rounded-[10px] mt-[20px] mb-[20px] w-[100%]">
                <h1 className=" text-[white] text-[40px]">
                  Test Yourself With Exercises
                </h1>
                <div className=" flex flex-col bg-[white] p-[20px] leading-[40px]">
                  <h1 className=" text-[20px]">Exercise:</h1>
                  <p>Add the correct types for the object below:</p>
                  <div>
                    <img src={pic2} alt="an image" className=" py-[10px]" />
                  </div>
                  <div>
                    <button className=" bg-[rgb(4,170,109)] py-[5px] px-[5px] rounded-[10px] text-[20px] text-[white] hover:bg-[#157444e5]">
                      <a
                        href="https://www.w3schools.com/typescript/trytypescript.php?filename=demo_object_types_ex"
                        className=" flex items-center gap-[5px]"
                      >
                        Submit Answer <BiChevronsRight />
                      </a>
                    </button>
                    <p className=" underline hover:text-[rgb(4,170,109)] pt-[10px]">
                      <a href="https://www.w3schools.com/typescript/exercise.php?filename=exercise_object_types1">
                        Start the Exercise
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className=" flex justify-between pt-[20px] pb-[10px]">
                <button className=" bg-[rgb(4,170,109)] hover:bg-[#157444e5] text-[white] py-[10px] rounded-[10px] text-[20px] px-[30px]">
                  <a
                    href="https://www.w3schools.com/typescript/typescript_tuples.php"
                    className=" flex items-center gap-[5px]"
                  >
                    <BiSolidChevronLeft />
                    Previous
                  </a>
                </button>
                <button className=" bg-[rgb(255,255,255)] border border-[gray] text-[black] font-[500] hover:bg-[#c0bdbd] py-[10px] rounded-[10px] text-[20px] px-[30px]">
                  <a href="https://www.w3schools.com/signup/?utm_source=classic&utm_medium=typescript_tutorial&utm_campaign=button_lower_navigation">
                    Log in to track progress
                  </a>
                </button>
                <button className=" bg-[rgb(4,170,109)] hover:bg-[#157444e5] text-[white] py-[10px] rounded-[10px] text-[20px] px-[30px]">
                  <a
                    href="https://www.w3schools.com/typescript/typescript_enums.php"
                    className=" flex items-center gap-[5px]"
                  >
                    Next <BiSolidChevronRight />
                  </a>
                </button>
              </div>
            </div>
            <hr />
          </div>

          <div className=" flex flex-col gap-[50px]">
            <div>
              <a
                href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsvFxspgTMD4c8LBvRWRpD2B1i31DDaD4S2qOuuR8HS7u_jF6rK2N7chJWIb9KPNxcbp-zvNrwa5dadgkg-Qh3gzr5v1rpA_A9he-uL5k6lXPkHG3rAJ1BiUkoaoINajmSKTrAquPodDdvGuncJoK0gCYdODBVF0h86eHxpwujVHYaO0cJnTzy91FM1mjQa7LL7GzzsYWMUcHazMBqyP6U-y8faB3Z4qyYd7Bp5B5ErgMFZdZv_XuhPT85nttdpK8dRtS1ksTytyi530zInQ_hZ96PdtD0u7V1bWEp2WY98s3yT8NxK_I_kqquErqCLmWmOJe_wA-WYF74B5tN-OUIWsWK7o9EJ9PrpAnu05&sai=AMfl-YQcHo9nZwYKKBG99_Cu4C3uLtDUs6xhDgBjH--s3pyOjlxfMeSLZ7i01tiKrCsqM4UWOkBAigrTdhLTSuA&sig=Cg0ArKJSzDypy-5FxNiJ&fbs_aeid=[gw_fbsaeid]&adurl=https://shop.w3schools.com/collections/course-catalog/products/w3schools-full-access-course&nm=7&nx=64&ny=-533&mb=2"
                target="_blank"
              >
                <img
                  src="https://tpc.googlesyndication.com/simgad/16497773530891370813"
                  alt="image"
                />
              </a>
            </div>
            <div>
              <a href="https://www.w3schools.com/training/aws/home/">
                <img
                  src="https://www.w3schools.com/images/img_aws_training_dark_160.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://www.w3schools.com/training/aws/home/">
                <img
                  src="https://www.w3schools.com/images/img_aws_training_dark_160.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
