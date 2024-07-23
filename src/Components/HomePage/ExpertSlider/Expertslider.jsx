import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Expertslider.css";


const expertCardData = {
  detail: [
    {
      name: "Banking, Finance and Insurance",
      img: "https://s3-alpha-sig.figma.com/img/d1f9/40c8/2f036f8a02a44d42f8a52582712c9cd7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PkHO3-EW2yKPmM3l9g~7Hdak2XaMchVAY5vQEL7llRaV3rqikcXmnOaTIvteerT6z8T6d5q5iyjpmdRC2OMPjjQOzQAKTKOLz03J6N8nRQ5pnWd3b5HcAzJc9uselac8-2bOFq0e27bh7D1yjGLK~cgf-JZkLKFtXNcdDsgBGsGDLFB46VSnWy6a6wzvx4PBZjS1JcfEh-R6JofGsEmbQqcNuzQMoFbbMm1omT-ChYwQ3GTwmgIaNDSyBdsw4PA1KDnwIgrnoUeL~0U6btN9HvUZHgPXVGcxHRaQi9DMD58B~UiRLJSiUpEUeBLR~6gGk0PH-K7XZgzGEcC66NAgRw__",
    },
    {
      name: "Oil and Gas",
      img: "https://s3-alpha-sig.figma.com/img/8502/64f6/b0a6901efee5861666b5ba71451629da?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWHwiF6wHuIpoq~c-iQNGKflDCJER0Ni4obqzuHHZ3KKYP3yULfRHIXCCDKT~pglycb~GF0B2Yei8aQmmf3Rlb0Hk4BcweaKHCbXHOBaPQzhxAQHvgm3O-vbqAVfxMN3zJCox~CIXV4XTZ7j4BlR6mxd6dh9oSVXFR7Ge5czAL34rpg3Del9YYbXjtWrY3DUIVL00BFGVIrjdWG07z7OdJQgjWC-8-uoQYLpT6ICdoEC6eqzbNEU-jfqJ2FFgZJYUxGcLUHchYBX-TsJMtpt7AxazykZXNGoOFjMJyFOMfxTdDEW8GD2EJ4f6bzzKRhtlV-T5J1KrIexA1~TvR4zhA__",
    },
    {
      name: "Ecommerce Solutions",
      img: "https://s3-alpha-sig.figma.com/img/8fbb/ae67/543bb37f0d280d14a1b9ac6e4549f681?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F1Oruga4p~gqZSPehGCU2YmAjmULl9iNMniSHs5QwLoepi58kI8OhhE9dtilCoOZiOGYAIHQSocNanDosXPrZQzDq1nT2ZFkYpql~r-Ij4PC-yp~1UWpVkP8TvMx5VXGHDXj1etSvCDBjCXAcftese8u1ikygHoC0RLQSV1a74KFRfcuY1tjQZssFh8D5eWPR2AtPiaBzPb9ZC-7vqbaKuPB9jJKBWA8LxtIjYysax1LDtWdapfDSDTeH1QZDsxb0I6bkBJBjZNj2dsLhhuIIh6fbnUl3CdmcDF6BD5HQPb6I6xyDDewOhb7-4x~q7eujDWdI9CFj-AqCpZOmp2bmA__",
    },
    {
      name: "Education And E-Learning",
      img: "https://s3-alpha-sig.figma.com/img/46fe/ad21/e204b9a0e5a628b2ce61464c08a7aee9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qz43MkO1hkhSPYgaX36mrxoOhlcZUhRjZ6NoYUCOx0dj6Vh4sWisViebWgqCVHQsLgzuvdfogtXZRlFbVkdT5h8sjLrIyA4KMDB03MRBzj7KImJygVVdyuyqIJMGKIURg9RcLWLoxT-f6g2DSsu9cjhTXLvZz8OokHpqeH~sQixvSysn99S7ltDtJct1WldvpeU1fHqKHJwCWU2N0e33EngdEeBLs~UzqTeT2HZaaXSHBTbHXjbmBWyzUG53uxIsiOWafweEV7kgsAgHh-MQGI2wfq5txCUfKzUG0KX~eEv2ianKc86~wOeILEll-~yn2wQl3UzfWIxliarusSVcHw__",
    },
  ],
};

const Expertslider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(expertCardData.detail[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (index, img) => {
    setHoveredIndex(index);
    setBackgroundImage(img);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="expert-carous flex w-full relative divide-x-[1.5px] divide-transparent mt-[40px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {expertCardData.detail.map((data, index) => (
        <div
          className="expert-carous-inner w-[100%] h-[425px] relative max-w-xl mx-auto w-1/4 p-4"
          key={index}
          onMouseEnter={() => handleMouseEnter(index, data.img)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-[#000000] opacity-40"></div>
          <div className="exper-carouse-inner">
            <div className="absolute overflow-hidden inset-0 flex items-end justify-center">
              <div
                className={`expert-crrrr transform ${
                  hoveredIndex === index || currentIndex === index
                    ? "translate-y-[-40px]"
                    : "translate-y-[35px]"
                } transition-transform duration-[.7s]`}
              >
                <h2 className="text-white font-semibold text-xl max-w-md mb-[40px] text-center">
                  {data.name}
                </h2>
                <div className="exper-carousel-but">
                  <button
                    type="button"
                    className="text-white bg-blue-800 focus:ring-10 focus:outline-none focus:ring-white mt-[-5px] font-medium rounded-full border-white border text-sm p-2 text-center items-center"
                  >
                    <FaArrowRightLong style={{ fill: "white", fontSize: "17px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertslider;
