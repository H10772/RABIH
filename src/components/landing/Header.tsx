import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm sticky top-0 z-50">
      <div className="flex flex-col md:flex-row items-center py-1 px-2 md:px-4 gap-2 max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="w-full flex items-center justify-between md:justify-start gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="./public/Rabih_logo-06[1].svg" 
              alt="RABIH Logo" 
              className="w-[120px] md:w-[140px] lg:w-[160px] h-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <nav className="flex gap-2 lg:gap-3 items-center text-xs lg:text-sm font-medium text-[#444]">
                <a href="#" className="text-[#F97415] font-black px-1 py-1 rounded-lg hover:bg-orange-50 transition-colors">الرئيسية</a>
                <a href="#steps" className="px-1 py-1 rounded-lg hover:text-[#F97415] hover:bg-orange-50 transition-colors">خطوات إنشاء المتجر</a>
                <a href="#delivery" className="px-1 py-1 rounded-lg hover:text-[#F97415] hover:bg-orange-50 transition-colors">التوصيل</a>
                <a href="#payments" className="px-1 py-1 rounded-lg hover:text-[#F97415] hover:bg-orange-50 transition-colors">المدفوعات</a>
                <a href="#pos" className="px-1 py-1 rounded-lg hover:text-[#F97415] hover:bg-orange-50 transition-colors">POS نقطة بيع</a>
                <a href="#pricing" className="px-1 py-1 rounded-lg hover:text-[#F97415] hover:bg-orange-50 transition-colors">خطط الأسعار</a>
              </nav>
            </div>

            {/* Search and Buttons */}
            <div className="flex items-center gap-2 lg:gap-3 ml-3">
              <div className="relative flex items-center">
                <Search className="absolute right-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث هنا"
                  className="border border-gray-200 rounded-full pl-4 pr-10 py-1.5 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-[#F97415]/50 w-28 lg:w-36"
                />
              </div>

              <div className="flex gap-2 lg:gap-3">
                <Button
                  variant="outline"
                  className="border-[#F97415] text-[#F97415] hover:bg-[#F97415] hover:text-white text-xs lg:text-sm h-8 lg:h-9 px-3 lg:px-4 font-medium"
                  onClick={() => navigate("/auth")}
                >
                  سجل الآن
                </Button>

                <Button
                  className="bg-[#F97415] hover:bg-[#F97415]/90 text-white text-xs lg:text-sm h-8 lg:h-9 px-3 lg:px-4 font-medium"
                  onClick={() => navigate("/auth")}
                >
                  ابدأ مجانًا
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-16 left-0 w-[80%] bg-white py-3 px-3 shadow-lg rounded-r-lg border border-gray-100 z-50">
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-[#F97415] font-black py-1 px-2 bg-orange-50 rounded-lg">الرئيسية</a>
              <a href="#steps" className="py-1 px-2 hover:bg-orange-50 rounded-lg">خطوات إنشاء المتجر</a>
              <a href="#delivery" className="py-1 px-2 hover:bg-orange-50 rounded-lg">التوصيل</a>
              <a href="#payments" className="py-1 px-2 hover:bg-orange-50 rounded-lg">المدفوعات</a>
              <a href="#pos" className="py-1 px-2 hover:bg-orange-50 rounded-lg">POS نقطة بيع</a>
              <a href="#pricing" className="py-1 px-2 hover:bg-orange-50 rounded-lg">خطط الأسعار</a>
            </nav>

            <div className="mt-3 flex flex-col gap-2">
              <div className="relative flex items-center">
                <Search className="absolute right-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث هنا"
                  className="border border-gray-200 rounded-full pl-5 pr-10 py-2 w-full focus:outline-none"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#F97415] text-[#F97415] hover:bg-[#F97415] hover:text-white flex-1 py-2 font-medium"
                  onClick={() => navigate("/auth")}
                >
                  سجل الآن
                </Button>

                <Button
                  className="bg-[#F97415] hover:bg-[#F97415]/90 text-white flex-1 py-2 font-medium"
                  onClick={() => navigate("/auth")}
                >
                  ابدأ مجانًا
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
