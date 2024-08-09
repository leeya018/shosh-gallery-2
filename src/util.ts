import { Product } from "./api/product/interfaces";

export const modals = {
  addProduct: "addProduct",
  editProduct: "editProduct",
  productView: "productView",
  login: "login",
  contact: "contact",
};

export const currencies: Record<string, string> = {
  USD: "$",
  ILS: "₪",
  EUR: "€",
};

export const productsItems: Product[] = [
  {
    price: 800,

    description: "אישה אפריקנית ",
    imageUrl: "/images/pics/IMG_1748.jpg",
    currency: "ILS",
    size: {
      height: 40,
      width: 60,
    },
    name: "אישה אפריקנית ",
  },

  {
    size: {
      height: 80,
      width: 100,
    },
    description: "Three Rondavels , דרום אפריקה ",
    currency: "ILS",

    price: 3000,
    name: "Three Rondavels ",
    imageUrl: "/images/pics/IMG_1756.jpg",
  },
  {
    currency: "ILS",
    description: "אישה אפריקנית ממדגסקר באקרילי ",
    size: {
      width: 100,
      height: 80,
    },
    price: 2800,
    name: "אישה אפריקנית ממדגסקר",
    imageUrl: "/images/pics/IMG_1747.jpg",
  },
  {
    imageUrl: "/images/pics/IMG_1749.jpg",

    description: "צופה לעבר הים מחלון ביתי ",
    name: "צופה לעבר הים מחלון ביתי ",
    price: 799,
    currency: "ILS",
    size: {
      height: 40,
      width: 60,
    },
  },

  {
    price: 1000,
    name: " Taal volcano  ",

    imageUrl: "/images/pics/IMG_1759.jpg",
    description: "לוע של הר געש  Taal volcano  דרום אפריקה \n",
    size: {
      width: 60,
      height: 40,
    },
    currency: "ILS",
  },
  {
    size: {
      width: 60,
      height: 40,
    },

    price: 1000,
    description: "שקיעה באי סנטוריני יון באקרילי ",
    name: "שקיעה ביון",
    imageUrl: "/images/pics/IMG_1757.jpg",

    currency: "ILS",
  },
  {
    size: {
      width: 60,
      height: 40,
    },

    currency: "ILS",

    price: 1500,
    imageUrl: "/images/pics/IMG_1776.jpg",
    name: "הקניון הלבן",
    description:
      "הקניון הלבן - נחל שגיא , סלעי קרטון שהטבע פיסל באזור הערבה   ",
  },
  {
    name: "אישה אפריקנית ",
    description: "אישה אפריקנית מדרום אפריקה באקרילי ",

    imageUrl: "/images/pics/IMG_1752.jpg",
    currency: "ILS",

    size: {
      height: 70,
      width: 100,
    },
    price: 3000,
  },

  {
    price: 1000,
    size: {
      width: 60,
      height: 40,
    },
    name: "Simon's town",

    currency: "ILS",
    imageUrl: "/images/pics/IMG_1764.jpg",

    description: "דרום אפריקה נקודת תצפית ",
  },
  {
    name: " Sugba lagoon פיליפינים ",
    size: {
      height: 40,
      width: 60,
    },
    currency: "ILS",
    price: 1500,
    imageUrl: "/images/pics/IMG_1755.jpg",
    description: " Sugba lagoon פיליפינים ",
  },
  {
    name: "בירכת צפירה ",
    description:
      " , בריכת צפירה - בריכת האינסוף היפה בעולם,  גב גדול ועמוק הנמצא בראש מפל של נחל צהלים ",

    price: 1300,
    size: {
      height: 40,
      width: 50,
    },
    imageUrl: "/images/pics/IMG_1777.jpg",

    currency: "ILS",
  },
  {
    description: "פיליפינים בדרך ל Sugba island ",
    name: "Siargao island ",
    currency: "ILS",
    size: {
      width: 60,
      height: 40,
    },
    price: 1000,

    imageUrl: "/images/pics/IMG_1762.jpg",
  },
  {
    description: "הרי הנגב ",

    size: {
      height: 40,
      width: 60,
    },
    imageUrl: "/images/pics/IMG_1766.jpg",
    currency: "ILS",

    name: "גבים מלאים במים לאחר שיטפון ",
    price: 800,
  },
  {
    description: " נערה מתבגרת משבט ההימבה נמיביה אקרילי ",
    size: {
      height: 30,
      width: 60,
    },
    name: "נערה מתבגרת מנמיביה ",
    imageUrl: "/images/pics/IMG_1746.jpg",
    price: 800,
    currency: "ILS",
  },
  {
    name: "שקיעה בחוף אשקלון",
    size: {
      width: 60,
      height: 40,
    },
    currency: "ILS",
    price: 798,

    imageUrl: "/images/pics/IMG_1768.jpg",
    description: "שקיעה בחוף אשקלון ",
  },
  {
    description: "Osemena peak פיליפינים ",
    currency: "ILS",
    name: "Osemena peak פיליפינים ",
    price: 1000,
    imageUrl: "/images/pics/IMG_1763.jpg",
    size: {
      width: 60,
      height: 40,
    },
  },
  {
    description: "Tuasan falls  פיליפינים ",

    currency: "ILS",

    name: "Tuasan falls  פיליפינים ",
    price: 1500,
    size: {
      width: 60,
      height: 40,
    },
    imageUrl: "/images/pics/IMG_1753.jpg",
  },
  {
    imageUrl: "/images/pics/IMG_1760.jpg",
    description: "The naked island of the Philippines",

    currency: "ILS",
    size: {
      height: 40,
      width: 60,
    },
    price: 1500,
    name: "האי הערום בפיליפינים ",
  },
  {
    name: "Guyam island  אי בפיליפינים ",
    currency: "ILS",

    price: 1000,
    size: {
      height: 40,
      width: 60,
    },
    description: " Guyam island אי בפיליפינים ",
    imageUrl: "/images/pics/IMG_1758.jpg",
  },
  {
    description: "שקיעה במדגסקר בין עצי הבאובב",

    currency: "ILS",

    price: 1000,
    size: {
      width: 60,
      height: 40,
    },
    imageUrl: "/images/pics/IMG_1743.jpg",
    name: "שקיעה במדגסקר בין עצי הבאובב",
  },
  {
    price: 800,
    description: "האי סנטוריני יון ",

    imageUrl: "/images/pics/IMG_1772.jpg",
    size: {
      width: 60,
      height: 40,
    },
    name: "האי סנטוריני ",

    currency: "ILS",
  },
  {
    currency: "ILS",

    description:
      "ילדה מקומית מאוגנדה עם זר פרחים על הראש שהכינה בעצמה באקרילי ",
    imageUrl: "/images/pics/IMG_1751.jpg",
    name: "ילדה מקומית אוגנדה ",
    size: {
      height: 50,
      width: 50,
    },
    price: 1500,
  },
];

export const handleWhatsAppClick = (message: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE; // Ensure this is set in your .env file

  if (phoneNumber) {
    // Remove any special characters from the phone number
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    window.open(url, "_blank");
  } else {
    console.error("Phone number is not defined in environment variables");
  }
};
