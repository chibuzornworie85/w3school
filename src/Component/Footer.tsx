import {FC} from 'react';

export const Footer: FC = () => {
  return (
    <>
      <footer>
            <div className=' flex justify-around mt-[20px] mb-[20px]'>
                <button className=' bg-[rgb(40,42,53)] rounded-[10px] px-[50px] hover:bg-[rgb(4,170,109)] text-[white] text-[15px] font-[500] py-[10px]'><a href="https://www.w3schools.com/spaces/index.html">Spaces</a></button>
                <button className=' bg-[rgb(40,42,53)] rounded-[10px] px-[50px] hover:bg-[rgb(4,170,109)] text-[white] text-[15px] font-[500] py-[10px]'><a href="https://www.w3schools.com/pro/index.php">Upgrade</a></button>
                <button className=' bg-[rgb(40,42,53)] rounded-[10px] px-[50px] hover:bg-[rgb(4,170,109)] text-[white] text-[15px] font-[500] py-[10px]'><a href="https://campus.w3schools.com/pages/newsletter">Newsletter</a></button>
                <button className=' bg-[rgb(40,42,53)] rounded-[10px] px-[50px] hover:bg-[rgb(4,170,109)] text-[white] text-[15px] font-[500] py-[10px]'><a href="https://campus.w3schools.com/collections/certifications">Get Certified</a></button>
                <button className=' bg-[rgb(40,42,53)] rounded-[10px] px-[50px] hover:bg-[rgb(4,170,109)] text-[white] text-[15px] font-[500] py-[10px]'><a href="">Report Error</a></button>
            </div>
            <hr />
            <div className=' flex justify-around text-center pb-[20px]'>
                <div>
                    <h1 className=' pb-[10px] text-[20px] font-[500] pt-[30px]'>Top Tutorials</h1>
                    <ul className=' leading-[20px]'>
                        <li><a href="https://www.w3schools.com/html/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>HTML Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/html/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>CSS Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/js/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>JavaScript Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/js/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>How To Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/sql/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>SQL Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/python/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Python Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/w3css/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>W3.CSS Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/w3css/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Bootstrap Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/php/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>PHP Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/php/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Java Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/cpp/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>C++ Tutorial</a></li>
                        <li><a href="https://www.w3schools.com/cpp/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>jQuery Tutorial</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className=' pb-[10px] text-[20px] font-[500] pt-[30px]'>Top References</h1>
                    <ul className=' leading-[20px]'>
                        <li><a href="https://www.w3schools.com/tags/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>HTML Reference</a></li>
                        <li><a href="https://www.w3schools.com/cssref/index.php" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>CSS Reference</a></li>
                        <li><a href="https://www.w3schools.com/cssref/index.php" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>JavaScript Reference</a></li>
                        <li><a href="https://www.w3schools.com/sql/sql_ref_keywords.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>SQL Reference</a></li>
                        <li><a href="https://www.w3schools.com/sql/sql_ref_keywords.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Python Reference</a></li>
                        <li><a href="https://www.w3schools.com/sql/sql_ref_keywords.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>W3.CSS Reference</a></li>
                        <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Bootstrap Reference</a></li>
                        <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>PHP Reference</a></li>
                        <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Java Reference</a></li>
                        <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Angular Reference</a></li>
                        <li><a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>jQuery Reference</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className=' pb-[10px] text-[20px] font-[500] pt-[30px]'>Top Examples</h1>
                    <ul className=' leading-[20px]'>
                        <li><a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>HTML Examples</a></li>
                        <li><a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>CSS Examples</a></li>
                        <li><a href="https://www.w3schools.com/js/js_examples.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>JavaScript Examples</a></li>
                        <li><a href="https://www.w3schools.com/howto/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>How To Examples</a></li>
                        <li><a href="https://www.w3schools.com/howto/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>SQL Examples</a></li>
                        <li><a href="https://www.w3schools.com/howto/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Python Examples</a></li>
                        <li><a href="https://www.w3schools.com/howto/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>W3.CSS Examples</a></li>
                        <li><a href="https://www.w3schools.com/howto/default.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Bootstrap Examples</a></li>
                        <li><a href="https://www.w3schools.com/php/php_examples.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>PHP Examples</a></li>
                        <li><a href="https://www.w3schools.com/java/java_examples.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Java Examples</a></li>
                        <li><a href="https://www.w3schools.com/xml/xml_examples.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>XML Examples</a></li>
                        <li><a href="https://www.w3schools.com/jquery/jquery_examples.asp" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>jQuery Examples</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className=' pb-[10px] text-[20px] font-[500] pt-[30px]'>Get Certified</h1>
                    <ul className=' leading-[20px]'>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/html-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>HTML Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/html-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>CSS Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/html-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>JavaScript Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/front-end-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Front End Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/sql-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>SQL Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/python-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Python Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/php-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>PHP Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/jquery-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>jQuery Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/java-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>Java Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/c-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>C++ Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/c-certificate-1" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>C# Certificate</a></li>
                        <li><a href="https://campus.w3schools.com/collections/certifications/products/xml-certificate" target='_blank' className=' hover:text-[rgb(4,170,109)] hover:underline'>XML Certificate</a></li>
                    </ul>
                </div>
            </div>
            <hr />

            <div className=' text-[rgb(172,172,172)]'>
                <p className=' flex gap-[10px] py-[10px] justify-end'><span className='hover:text-[rgb(4,170,109)] cursor-pointer'><a href="https://www.w3schools.com/forum/default.asp">FORUM</a></span> | <span className='hover:text-[rgb(4,170,109)] cursor-pointer'><a href="https://www.w3schools.com/about/default.asp">ABOUT</a></span></p>
                <p className=' p-[20px] leading-[20px] flex text-center'>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.</p>
                <div className=' flex justify-center text-center flex-col pb-[10px]'>
                <p><span className='hover:text-[rgb(4,170,109)] hover:underline cursor-pointer'><a href="https://www.w3schools.com/about/about_copyright.asp">Copyright 1999-2023</a></span> by Refsnes Data. All Rights Reserved.</p>
                <p><span className='hover:text-[rgb(4,170,109)] cursor-pointer hover:underline'><a href="https://www.w3schools.com/w3css/default.asp">W3Schools is Powered by W3.CSS.</a></span></p>
                </div>
                <div className=' flex justify-center pb-[50px]'>
                <a href="https://www.w3schools.com/"><img src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1691/original/306149583_580886133837672_8720407359695224497_n.png" alt="logo" className=' h-[60px] cursor-pointer hover:text-[green]' /></a>
                </div>
            </div>
      </footer>
    </>
  );
}
