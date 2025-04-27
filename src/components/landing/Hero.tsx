import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between" style={{ minHeight: "calc(100vh - 60px)" }}>
      {/* الهيرو */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl flex gap-5 max-md:flex-col max-md:items-center max-md:text-center">
          {/* الصورة تتحول لباكجراوند لما الشاشة تصغر */}
          <div className="w-[76%] max-md:w-full">
            <div
              className="grow flex flex-col items-center justify-center max-md:bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/1e102eeb77ae1600f9bad8b253ce4d418ddd151c?placeholderIfAbsent=true')] max-md:bg-cover max-md:bg-center max-md:bg-no-repeat max-md:min-h-[400px] pt-8"
            >
              <div className="flex gap-3 max-md:flex-col max-md:items-center max-md:text-center">
                {/* نخفي الصورة لما تصغر الشاشة */}
                <div className="w-[38%] max-md:hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e102eeb77ae1600f9bad8b253ce4d418ddd151c?placeholderIfAbsent=true"
                    alt="Hero illustration"
                    className="aspect-[0.81] object-contain w-full"
                  />
                </div>

                <div className="w-[62%] ml-3 max-md:w-full flex flex-col justify-center items-center text-center">
                  <h1 className="text-[#333] text-6xl font-black leading-[84px] max-md:text-[34px] max-md:leading-[50px]  mb-4">
                    من غير مصاريف كتير ولا تعقيد… ابني متجرك الإلكتروني على مزاجك!
                  </h1>

                  {/* الزرار */}
                  <button className="bg-orange-500 text-white text-lg font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
                    ابدأ تجربتك المجانية الآن
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* الصورة الجانبية */}
          <div className="w-[24%] max-md:w-full max-md:mt-5 flex justify-center max-md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c5df4d5f793ffaf9e9ae0b2747165b849a7d9e?placeholderIfAbsent=true"
              alt="Hero decoration"
              className="aspect-[0.6] object-contain w-[442px] max-w-full"
            />
          </div>
        </div>
      </div>

      {/* لوجوهات الشركات */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-12">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <img
            key={index}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d306e011238812e3b26a48f6ea882666152d1ff?placeholderIfAbsent=true"
            alt="Partner logo"
            className="w-28 md:w-32 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
