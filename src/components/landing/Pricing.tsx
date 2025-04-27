import React, { useState } from "react";
import PricingCard from "@/components/ui/pricing-card";

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const features = [
    { text: "دعم فني ممتاز", included: false },
    { text: "أنشطة تفاعلية", included: false },
  ];

  const description =
    "يقدم محتوى أساسي لتطوير المهارات الشخصية.";

  return (
    <section
      id="pricing"
      className="bg-[rgba(249,116,21,0.03)] flex items-center justify-center py-12 px-4 sm:px-6 min-h-[60vh]"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-4">
            خطط الاسعار
          </h2>

          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#F97415] text-white"
                  : "text-black hover:bg-gray-200"
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              شهريا
            </button>
            <button
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-[#F97415] text-white"
                  : "text-black hover:bg-gray-200"
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              سنويا
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-md md:max-w-none">
          <PricingCard
            title="مبتدأ"
            price="700 جنيها"
            description={description}
            features={features}
          
          />

          <PricingCard
            title="متوسط"
            price="1200 جنيها"
            description={description}
            features={features}
           
          />

          <PricingCard
            title="متقدم"
            price="2000 جنيها"
            description={description}
            features={features}
            isPopular={true}
           
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;