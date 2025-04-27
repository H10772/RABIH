import React from "react";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full min-h-[110px] md:w-[calc(50%-20px)]">
      {/* الرقم */}
      <div className="text-5xl text-[#A5A5A5] font-semibold leading-none md:min-w-[60px]">
        {number}
      </div>

      {/* المحتوى */}
      <div className="flex flex-col flex-1">
        <div className="text-[28px] text-[#070812] font-semibold leading-none">
          <h3 className="z-10">{title}</h3>
        </div>
        <div className="bg-[rgba(255,220,96,1)] h-3.5 w-1/2 mt-1" />
        <p className="text-[#999] text-lg font-medium leading-[21px] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Steps: React.FC = () => {
  const stepsDescription =
    "ابدأ رحلتك في التجارة أونلاين معانا بسجّل بياناتك المطلوبة لإنشاء حساب على منصّة بناء المتاجر بتاعتنا.";

  return (
    <section
      id="steps"
      className="z-10 flex min-h-[690px] flex-col items-center text-right justify-center max-md:max-w-full direction-rtl"
    >
      <div className="flex min-h-[690px] w-full max-w-[1920px] flex-col items-center justify-center py-[148px] max-md:max-w-full max-md:py-[100px]">
        <div className="flex w-full flex-col items-center leading-none">
          <div className="w-[1128px] max-w-full text-[50px] text-[#070812] font-black py-0.5 max-md:text-[40px]">
            <h2 className="z-10 max-md:max-w-full max-md:text-[40px] text-center">
              كل اللي محتاجه 4 خطوات بس و متجرك يبقى شغّال!
            </h2>
            <div className="bg-[rgba(255,220,96,1)] flex shrink-0 h-[13px] max-md:max-w-full mx-auto" />
          </div>
          <p className="text-[#999] text-xl font-medium mt-4 max-md:max-w-full">
            منصة من غير كود، تقدر تبدأ بيها متجرك أونلاين بكل سهولة.
          </p>
        </div>

        <div className="w-[1530px] max-w-full mt-[63px] max-md:mt-10 direction-rtl">
          <div className="flex flex-wrap justify-center gap-8 max-md:flex-col max-md:items-center">
            <Step
              number="01"
              description={stepsDescription}
              title="ضيف منتجاتك"
            />
            <Step
              number="02"
              title="أنشئ حسابك"
              description={stepsDescription}
            />
            <Step
              number="03"
              title="فعّل الدفع والتوصيل"
              description={stepsDescription}
            />
            <Step
              number="04"
              title="اختر شكل متجرك"
              description={stepsDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;