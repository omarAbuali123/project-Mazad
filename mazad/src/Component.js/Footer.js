
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#677f8e] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">من نحن</h2>
          <p>
            في مزاد، نحن ملتزمون بتقديم تجربة مزاد سيارات سلسة ومثيرة. مع مجموعة واسعة من السيارات ومنصة سهلة الاستخدام، نضمن للمشترين والبائعين تجربة سلسة ومرضية.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">اتصل بنا</h2>
          <ul>
            <li className="mb-2"><strong>البريد الإلكتروني:</strong> support@yourcarauctionsite.com</li>
            <li className="mb-2"><strong>الهاتف:</strong> +1 (800) 123-4567</li>
            <li className="mb-2"><strong>العنوان:</strong> 123 شارع المزاد، مدينة السيارات، الولايات المتحدة الأمريكية</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">روابط سريعة</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">الصفحة الرئيسية</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">من نحن</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">المزادات</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">كيف يعمل</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">الأسئلة الشائعة</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">اتصل بنا</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">المدونة</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">تابعنا</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">فيسبوك</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">تويتر</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">إنستغرام</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">لينكدإن</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">قانوني</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">شروط الخدمة</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">سياسة ملفات تعريف الارتباط</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">اشترك في النشرة الإخبارية</h2>
          <p>ابقَ على اطلاع بأحدث المزادات والعروض الحصرية. <a href="#" className="text-blue-400 hover:underline">اشترك الآن</a></p>
        </div>
        <div className="footer-section">
          <h2 className="text-xl font-bold mb-4">حمل تطبيقنا</h2>
          <p>جرب مزاداتنا أثناء التنقل. <a href="#" className="text-blue-400 hover:underline">متجر التطبيقات</a> | <a href="#" className="text-blue-400 hover:underline">جوجل بلاي</a></p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>حقوق الطبع والنشر © 2024 مزاد. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;










