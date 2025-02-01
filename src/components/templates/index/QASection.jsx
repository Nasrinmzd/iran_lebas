import { useState } from "react";
import SectionTitle from "../SectionTitle";

function QASection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      title: "ورود و ثبت نام",
      questions: [
        {
          id: "1-1",
          question: "چگونه پروفایل بسازیم؟",
          answer:
            "در بالای سایت روی گزینه «پروفایل» کلیک کنید و اطلاعات شماره یا ایمیلتان را وارد کنید. اطلاعات حساب کاربری خود را تکمیل کنید.",
        },
        {
          id: "1-2",
          question: "چطور می‌توانم رمز عبور خود را تغییر دهم؟",
          answer:
            "از طریق پنل کاربری خود می‌توانید به بخش تنظیمات مراجعه کرده و رمز عبور خود را تغییر دهید.",
        },
      ],
    },
    {
      id: 2,
      title: "روند ثبت سفارش",
      questions: [
        {
          id: "2-1",
          question: "چگونه سفارش خود را پیگیری کنم؟",
          answer:
            "با وارد شدن به حساب کاربری خود و مراجعه به بخش سفارشات می‌توانید وضعیت سفارش خود را مشاهده کنید.",
        },
      ],
    },
    {
      id: 3,
      title: "وضعیت بازگردانی محصول",
      questions: [
        {
          id: "3-1",
          question: "شرایط مرجوعی کالا چیست؟",
          answer:
            "کالا باید سالم و در بسته‌بندی اصلی باشد. حداکثر تا ۷ روز پس از دریافت کالا فرصت دارید درخواست مرجوعی ثبت کنید.",
        },
      ],
    },
    {
      id: 4,
      title: "اعتماد برای خرید راحت تر",
      questions: [
        {
          id: "4-1",
          question: "آیا خرید از سایت امن است؟",
          answer:
            "بله، تمامی تراکنش‌های مالی با استفاده از درگاه‌های معتبر بانکی انجام می‌شود و اطلاعات شما کاملاً محرمانه باقی می‌ماند.",
        },
      ],
    },
    {
      id: 5,
      title: "سایر موارد",
      questions: [
        {
          id: "5-1",
          question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
          answer:
            "شما می‌توانید از طریق فرم تماس با ما، ایمیل یا شماره تلفن پشتیبانی با ما در ارتباط باشید.",
        },
      ],
    },
  ];

  return (
    <section className="mx-[93px] mb-[150px]">
      <SectionTitle>سوالات متداول</SectionTitle>
      <div className="h-[498px] flex justify-between">
        <div className="w-[640px] h-[480px]">
          {faqData.map((category, index) => (
            <div key={category.id}>
              <button
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.id ? null : category.id
                  )
                }
                className={`w-full border-b border-primary flex justify-between pb-3 px-[18.95px] ${
                  index === 0 ? "pt-0" : "pt-[60px]"
                }`}
              >
                <span className="font-normal text-[18px]/[32px] text-secondary">
                  {category.title}
                </span>
                <svg className="w-[24px] h-[24px] fill-none ">
                  <use href={`${activeCategory === category.id ? "#arrow-down" : "#arrow-left"}`}></use>
                </svg>
              </button>
              {activeCategory === category.id && (
                <div className="space-y-3 px-4 pt-4">
                  {category.questions.map((q) => (
                    <button
                      key={q.id}
                      className={`flex ${activeQuestion === q.id ? "text-maincolorred" : ""}`}
                      onClick={() => setActiveQuestion(q.id)}
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-xl overflow-hidden">
          <img
            src="/images/Q&Abg.jpg"
            alt="Q&A"
            className="w-[579px] h-[498px] mx-auto object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

          <div className="absolute inset-0 text-center text-primary">
            {activeQuestion ? (
              <>
                <h2 className="text-2xl leading-9 font-bold pt-[92px] pb-9">
                  {
                    faqData
                      .find((cat) =>
                        cat.questions.some((q) => q.id === activeQuestion)
                      )
                      ?.questions.find((q) => q.id === activeQuestion)?.question
                  }
                </h2>
                <p className="font-normal	text-[18px] leading-8 px-[50px]">
                  {
                    faqData
                      .find((cat) =>
                        cat.questions.some((q) => q.id === activeQuestion)
                      )
                      ?.questions.find((q) => q.id === activeQuestion)?.answer
                  }
                </p>
              </>
            ) : (
                <p className="font-medium text-3xl text-secondary mt-[200px]">لطفاً سوال خود را انتخاب کنید.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QASection;
