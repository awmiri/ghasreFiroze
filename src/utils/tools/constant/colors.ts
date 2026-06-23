const Colors = {
    gray1: '#f2f5f9',
    gray2: '#9f9f9f',
    gray3: '#737373',
    white: '#ffffff',
}

// رنگ‌های پایه
export const warnColor = "#FF0266";
export const successColor = "#0336FF";
export const mcolor = "#3B79A3";
export const mcolor1 = "#4D53E0";
export const grayCall = "#A8A8AA";
export const grayCallLight = "#F5F5F5";
export const trans = "transparent";
export const gold = "#FFCB05";
export const scaffoldColor = "#BDBDBD"; // Colors.grey[700] در Material شما
export const black1 = "#292826";
export const black2 = "#181818";

// رنگ‌های اصلی (Primary)
export const colorPrimaryLighter = "#E7EFFF";
export const colorPrimaryLight = "#A1B8F2";
export const colorPrimaryMain = "#144EDE";
export const colorPrimaryDark = "#0F3080";
export const colorPrimaryDarker = "#091E52";

// رنگ‌های ثانویه (Secondary)
export const colorSecondaryLighter = "#D8F3FF";
export const colorSecondaryLight = "#A7E1FA";
export const colorSecondaryMain = "#23B3F2";
export const colorSecondaryDark = "#0079AE";
export const colorSecondaryDarker = "#003349";

// رنگ‌های سوم (Territory/Success variant)
export const colorTerritoryLighter = "#D4F3EB";
export const colorTerritoryLight = "#99E6D2";
export const colorTerritoryMain = "#00C08F";
export const colorTerritoryDark = "#007D5D";
export const colorTerritoryDarker = "#003F2F";

// رنگ‌های خطا (Error)
export const colorErrorLighter = "#FBE7ED";
export const colorErrorLight = "#F2A1B7";
export const colorErrorMain = "#DE144B";
export const colorErrorDark = "#8A0B2E";
export const colorErrorDarker = "#64041E";

// رنگ‌های موفقیت (Success)
export const colorSuccessLighter = "#E7F9F2";
export const colorSuccessLight = "#9FE8CB";
export const colorSuccessMain = "#0FC57E";
export const colorSuccessDark = "#058C58";
export const colorSuccessDarker = "#025A38";

// رنگ‌های هشدار (Warning)
export const colorWarningLighter = "#FBF6E7";
export const colorWarningLight = "#F1DC9F";
export const colorWarningMain = "#DDA80F";
export const colorWarningDark = "#9E7707";
export const colorWarningDarker = "#6E5408";

// رنگ‌های اطلاعات (Info)
export const colorInfoLighter = "#F1F1F2";
export const colorInfoLight = "#C8C8CC";
export const colorInfoMain = "#919199";
export const colorInfoDark = "#565660";
export const colorInfoDarker = "#37373A";

// طیف‌های خاکستری
export const colorGray0 = "#FCFCFC";
export const colorDots = "#D8D8D8";
export const colorGray1 = "#F9F9FB";
export const colorGray2 = "#F0F0F5";
export const colorGray3 = "#D8DAE5";
export const colorGray4 = "#B3B6CC";
export const colorGray5 = "#9A9FBC";
export const colorGray6 = "#6F7591";
export const colorGray7 = "#5F647C";
export const colorGray8 = "#494D5F";
export const colorGray9 = "#282A34";

export const grayLight = "#EFEFEF";
export const grayLight1 = "#C8C8C8";
export const grayBold = "#9F9F9F";

export const colorGray80 = "#505050";
export const colorGray93 = "#5D5D5D";
export const colorGray206 = "#CECECE";
export const colorGray110 = "#6E6E6E";
export const colorGray156 = "#9C9C9C";
export const colorGray241 = "#F1F1F1";
export const colorGray220 = "#DCDCDC";
export const colorGray248 = "#F8F8F8";

// رنگ‌های دیگر
export const colorOtherOverlay = "rgba(0, 0, 0, 0.4)";
export const colorPurplePink = "#B620E0";

// آبجکت کامل برای استفاده راحت
export const colors = {
    warn: warnColor,
    successColor: successColor,
    primary: {
        lighter: colorPrimaryLighter,
        light: colorPrimaryLight,
        main: colorPrimaryMain,
        dark: colorPrimaryDark,
        darker: colorPrimaryDarker,
    },
    secondary: {
        lighter: colorSecondaryLighter,
        light: colorSecondaryLight,
        main: colorSecondaryMain,
        dark: colorSecondaryDark,
        darker: colorSecondaryDarker,
    },
    error: {
        lighter: colorErrorLighter,
        light: colorErrorLight,
        main: colorErrorMain,
        dark: colorErrorDark,
        darker: colorErrorDarker,
    },
    success: {
        lighter: colorSuccessLighter,
        light: colorSuccessLight,
        main: colorSuccessMain,
        dark: colorSuccessDark,
        darker: colorSuccessDarker,
    },
    warning: {
        lighter: colorWarningLighter,
        light: colorWarningLight,
        main: colorWarningMain,
        dark: colorWarningDark,
        darker: colorWarningDarker,
    },
    info: {
        lighter: colorInfoLighter,
        light: colorInfoLight,
        main: colorInfoMain,
        dark: colorInfoDark,
        darker: colorInfoDarker,
    },
    gray: {
        0: colorGray0,
        1: colorGray1,
        2: colorGray2,
        3: colorGray3,
        4: colorGray4,
        5: colorGray5,
        6: colorGray6,
        7: colorGray7,
        8: colorGray8,
        9: colorGray9,
        80: colorGray80,
        93: colorGray93,
        110: colorGray110,
        156: colorGray156,
        206: colorGray206,
        220: colorGray220,
        241: colorGray241,
        248: colorGray248,
        light: grayLight,
        light1: grayLight1,
        bold: grayBold,
    },
    overlay: colorOtherOverlay,
    purplePink: colorPurplePink,
    gold: gold,
    black1: black1,
    black2: black2,
} as const;

// تابع helper برای استفاده از رنگ‌ها با opacity
export const withOpacity = (color: string, opacity: number) => {
    // تبدیل hex به rgb و اضافه کردن opacity
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};