export interface DealTypeOption {
  label: string;
  value: string;
}

// آرایه انواع معامله
export const dealTypeOptions: DealTypeOption[] = [
  { label: "فروش", value: "sell" },
  { label: "رهن کامل", value: "full_mortgage" },
  { label: "رهن و اجاره", value: "mortgage_rent" },
  { label: "پیش فروش", value: "pre_sell" },
  { label: "معاوضه", value: "swap" },
];

export function MakeMap(arr: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const item of arr) {
    out[item] = item;
  }
  return out;
}
// نوع معامله
export const dealTypes = [
  "فروش",
  "رهن کامل",
  "رهن و اجاره",
  "پیش فروش",
  "معاوضه",
];
export const nowSituation = ["تخلیه", "سکونت مستاجر", "سکونت مالک"];

export const wc = ["ایرانی", "فرنگی", "وان", "جکوزی"];

// نوع ملک
export const propertyTypes = [
  "آپارتمان",
  "ویلا",
  "زمین",
  "دفتر کار",
  "مغازه",
  "انبار",
  "باغ",
  "هتل",
];
// انواع کاربری اداری و تجاری
export const commercialOfficeTypes = [
  "دفتر کار",
  "اتاق اداری",
  "مطب",
  "مغازه و غرفه",
  "صنعتی، کشاورزی و تجاری",
];
export const typeOfReq = ["فروشنده", "خریدار"];
export const typeOfContact = ["سازنده", "مشاور املاک", "مالک", "خریدار"];

//
// نوع نما
export const buildingFacades = [
  "مدرن",
  "کلاسیک",
  "نئوکلاسیک",
  "سنگ",
  "آجر",
  "کامپوزیت",
  "سیمان",
  "شیشه",
  "ترکیبی",
];
export const kitchen = [
  "ام دی اف",
  "چوب",
  "فلزی",
  "جزیره",
  "مدرن",
  "کلاسیک",
  "صفحه سنگ",
  "صفحه چوب",
  "اپن",
  "لاندری",
  "فول فرنیش",
  "هود",
  "گاز رومیزی",
  "فر تو کار",
];

export const buildingArea = [
  "مسکونی",
  "تجاری",
  "باغ",
  "خدماتی",
  "مزروعی",
  "صنعتی",
  "شهری",
  "شهرکی",
  "ساحلی",
];
export const buildingGallery = [
  "نقاشی",
  "گچ",
  "سنگ",
  "کاغذ دیواری",
  "پارچه کوبی",
  "چوبکاری",
  "گچ بری",
  "کناف",
  "رابیس",
];

// جهت ملک
export const propertyDirections = [
  "شمالی",
  "جنوبی",
  "شرقی",
  "غربی",
  "شمالی جنوبی",
];

export const propertyDirectionsGallery = [
  "داخل پاساژ",
  "داخل بازار",
  "داخل کوچه",
  "بر اصلی",
];

export const propertyGalleryLocation = ["دو نبش", "دو دهنه"];
export const gallerySituationItems = [
  "تخلیه",
  "قولنامه ای",
  "سند دار",
  "قابل معاوضه",
  "سرقفلی",
  "ملکیت",
];

// نوع فیلتر
export const vahedFilterType = ["مشترک", "جدا"];

// وضعیت مشاعات ساختمان
export const sharedAreasStatus = [
  "لابی",
  "سالن اجتماعات",
  "استخر",
  "سونا",
  "جکوزی",
  "سالن ورزشی",
  "ندارد",
  "اسانسور",
  "کارواش",
  "روف گاردن",
];

// وضعیت امکانات بیشتر ساختمان
export const moreFeature = [
  "تراس",
  "پاسبو",
  "انباری",
  "بالکن",
  "اینترنت مرکزی",
  "جارو برقی مرکزی",
  "اعلام حریق",
  "اطفای حریق",
  "شوتینگ زباله",
  "شومینه",
  "ایفون تصویری",
  "ماهواره مرکزی",
  "باربیکیو",
  "دوربین مدار بسته",
  "پنجره دو جداره",
  "سرایداری",
  "درب ضد سرقت",
  "برق اضطراری",
];
export const situation = [
  "قولنامه ای",
  "سند دار",
  "جواز دار",
  "مشارکت در ساحت",
  "تراکم بالا",
  "تراکم متوسط",
  "تراکم پایین",
];
export const situationOfContact = ["درحال پیگیری", "پیگیری نشده", "پیگیری شده"];
export const HVAC = [
  "اسپلیت",
  "داکت اسپلیت",
  "کولز ابی",
  "پکیح رادیاتور",
  "گرمایش از کف",
  "بخاری",
  "هواساز",
  "موتورخاته",
  "چیلر",
];
export const floorMatterial = [
  "سرامیک",
  "پارگت",
  "موگت",
  "سنگ",
  "موزاییک",
  "سیمان",
];
export const parking = [
  "پارکینگ مشاع",
  "پارکینگ اختصاصی",
  "پارکینگ مزاحم",
  "مسقف",
  "غیرمسقف",
  "باکس",
];

// نوع پارکینگ
export const parkingType = ["رمپ", "همکف"];

// متراژ واحد
export const unitAreas = [
  "زیر ۵۰ متر",
  "۵۰ تا ۸۰ متر",
  "۸۰ تا ۱۲۰ متر",
  "۱۲۰ تا ۱۵۰ متر",
  "۱۵۰ تا ۲۰۰ متر",
  "بیش از ۲۰۰ متر",
];

// تعداد سرویس بهداشتی
export const bathroomCounts = [
  "۱ سرویس",
  "۲ سرویس",
  "۳ سرویس",
  "بیش از ۳ سرویس",
];

// جنس کف
export const floorMaterials = [
  "سرامیک",
  "سنگ",
  "چوب",
  // 'پارکت',
  // 'لمینت',
  // 'موزاییک'
];

// جنس دیوارها
export const wallMaterials = [
  "رنگ",
  "کاغذ دیواری",
  "سنگ",
  "چوب",
  "پنل دکوراتیو",
];

// نوع پلان
export const planTypes = [
  "تفکیکی",
  "یک تکه",
  // 'مستطیلی',
  // 'مربع',
  // 'L شکل',
  // 'مدرن',
  // 'خاص'
];

// ارتفاع سقف
export const ceilingHeights = [
  "کمتر از ۲.۸ متر",
  "۲.۸ تا ۳ متر",
  "۳ تا ۳.۵ متر",
  "بیش از ۳.۵ متر",
];

// وضعیت انباری
export const storageStatus = ["دارد", "ندارد"];

// امکان معاوضه
export const swapPossibility = ["دارد", "ندارد"];

// شرایط فروش
export const saleConditions = ["نقدی", "اقساطی", "نقد و اقساط", "قابل مذاکره"];

// نوع شیرآلات
export const faucetTypes = ["معمولی", "اهرمی", "هوشمند"];

// جنس داخلی سرویس‌ها
export const bathroomMaterials = ["سرامیک", "سنگ", "مرمر", "گرانیت"];

// جنس چوب (کابینت یا دکور داخلی)
export const woodMaterials = ["MDF", "هایگلاس", "چوب طبیعی", "PVC"];

// وضعیت سیستم هوشمند BMS
export const bmsStatus = ["دارد", "ندارد"];

// نوع سیستم سرمایش
export const coolingSystems = [
  "کولر آبی",
  "کولر گازی",
  "اسپلیت",
  "چیلر",
  "داکت اسپلیت",
];

// جنس سازه اسکلت ساختمان
export const structureTypes = ["بتنی", "فلزی", "اسکلت پیچ و مهره", "ترکیبی"];

// جنس لوله‌ها
export const pipeMaterials = ["پلیکا", "پنج لایه", "پلی اتیلن", "فلزی"];

// متریال و کیفیت ساخت ساختمان
export const buildingMaterials = ["لوکس", "درجه یک", "معمولی", "اقتصادی"];

// انواع مشارکت در ساخت
export const constructionParticipationTypes = [
  "سازندگان موجود در سایت برای مشارکت",
  "سال ساخت ساختمان",
  "سال صدور پایان کار",
];

// قراردادهای مشارکت در ساخت - نام معمار و طراح
export const architectDesignerNames = [
  "نامشخص",
  "داخلی",
  "برند معروف",
  "معمار بین‌المللی",
];

// قراردادهای مشارکت - جنس تاسیسات برق و لوله‌ها
export const electricalPlumbingMaterials = [
  "پنج‌لایه",
  "پلی‌اتیلن",
  "فلزی",
  "PVC",
  "ترکیبی",
];

// قراردادهای مشارکت - جنس سقف‌ها
export const ceilingMaterials = [
  "گچ‌بری",
  "رنگ‌شده",
  "کناف",
  "چوب",
  "آلومینیوم",
  "ترکیبی",
];

// قراردادهای مشارکت - جنس دیوارها
export const wallStructureMaterials = [
  "بلوک سیمانی",
  "آجری",
  "گچی",
  "یونولیت",
  "ترکیبی",
];

// قراردادهای مشارکت - جنس و نوع رنگ دیواره‌ها و کابینت و چوب و درب‌ها
export const interiorMaterialFinishes = [
  "رنگ روغنی",
  "رنگ اکریلیک",
  "کاغذ دیواری",
  "MDF",
  "چوب طبیعی",
  "PVC",
  "های‌گلاس",
];

// قراردادهای مشارکت - انواع عایق در کف و سقف و دیوارها
export const insulationTypes = [
  "عایق حرارتی",
  "عایق صوتی",
  "عایق رطوبتی",
  "ترکیبی کامل (حرارت، صدا، رطوبت)",
  "ندارد",
];

// قراردادهای مشارکت - برند شیشه، چوب، سنگ و آهن
export const materialBrandNames = [
  "شادیران",
  "نیپون",
  "مپنا",
  "مهرازان",
  "سایر برندهای معتبر",
  "نامشخص",
];

// تغییرات قیمت
export const priceChangeTypes = ["افزایش", "کاهش", "فروش فوری"];

// شرایط فروش
export const saleConditionTypes = ["نقدی", "اقساطی", "معاوضه"];

// نوع اقساط (برای حالت فروش اقساطی)
export const installmentCounts = [
  "۳ قسط",
  "۶ قسط",
  "۱۲ قسط",
  "۱۸ قسط",
  "۲۴ قسط",
  "بیش از ۲۴ قسط",
];

// نوع معاوضه
export const exchangeTypes = [
  "معاوضه با ملک",
  "معاوضه با خودرو",
  "معاوضه با متریال ساختمانی",
  "معاوضه با زمین",
  "سایر",
];

//
// وضعیت فایل ملک
export const fileStatusTypes = [
  "فعال",
  "رزرو",
  "قولنامه شده",
  "فروخته شده",
  "بایگانی",
];

// نوع پیوست برای فایل
export const fileAttachmentTypes = ["تصویر ملک", "ویدیو", "مدارک ملک", "سایر"];

// انواع اطلاعات مالی فایل
export const financialInfoTypes = [
  "قیمت کل",
  "قیمت هر متر",
  "مبلغ رهن",
  "مبلغ اجاره",
  "پورسانت توافق",
  "درصد کمیسیون",
];

// نوع مالک
export const ownerTypes = ["مستقیم", "واسطه"];

// ساعت مجاز تماس با مالک
export const contactAllowedTimes = [
  "۸ تا ۱۲",
  "۱۲ تا ۱۶",
  "۱۶ تا ۲۰",
  "۲۰ تا ۲۳",
  "همه ساعات",
];
