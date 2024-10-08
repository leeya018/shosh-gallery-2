import React from "react";

const MainSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-10 bg-background 
    bg-center bg-black bg-opacity-40  shadow-lg px-5"
    >
      <h1 className="text-4xl font-bold text-white">הגלריה של שוש</h1>
      <div className="text-2xl font-bold text-white mt-4"> 052-6211512</div>
      <p className="mt-4 text-2xl text-white max-w-2xl text-right">
        שמי שוש , אמא ל 3 ילדים , גרה בלהבים . יצאתי לפרישה מוקדמת לפני ארבע
        שנים ומאז חלק מעיסוקיי הוא ציור . מציירת באקרילי על קנבס בעיקר נופים
        מהטיולים שלי מהארץ והעולם ונהנת מכל רגע ,
      </p>
      <p className="mt-4 text-2xl text-white max-w-2xl text-right">
        ברוכים הבאים לגלריה של שוש , אומנית מוכשרת שמביאה לכם את יופיה של ארץ
        ישראל במקומות אקזוטיים בעולם באמצעות ציורים מרהיבים . כל ציור בגלריה
        נושא עמו את הרגעים הקסומים והנופים העוצרי נשימה של הארץ – מהגליל הירוק
        ועד המדבר הזהוב . הכנסו וגלו את האמנות שמעוררת את הלב והנשמה .
      </p>
    </section>
  );
};

export default MainSection;
