export default function fontFamilycorrect(lang, prefixfont) {
  let fontFamily;
  switch (lang) {
    case "en":
      switch (prefixfont) {
        case "ExtraLight":
          fontFamily = "Poppins-ExtraLight";
          break;
        case "Light":
          fontFamily = "Poppins-Light";
          break;
        case "Regular":
          fontFamily = "Poppins-Regular";
          break;
      }
      break;
    case "ru":
      switch (prefixfont) {
        case "Bold":
          fontFamily = "Raleway-Bold";
          break;
        case "Light":
          fontFamily = "Raleway-Light";
          break;
        case "Medium":
          fontFamily = "Raleway-Medium";
          break;
        case "Regular":
          fontFamily = "Raleway-Regular";
          break;
      }
      break;
    case "kz":
      switch (prefixfont) {
        case "ExtraLight":
          fontFamily = "Poppins-ExtraLight";
          break;
        case "Light":
          fontFamily = "Poppins-Light";
          break;
        case "Regular":
          fontFamily = "Poppins-Regular";
          break;
      }
      break;
    default:
      switch (prefixfont) {
        case "Bold":
          fontFamily = "Raleway-Bold";
          break;
        case "Light":
          fontFamily = "Raleway-Light";
          break;
        case "Medium":
          fontFamily = "Raleway-Medium";
          break;
        case "Regular":
          fontFamily = "Raleway-Regular";
          break;
      }
      break;
  }
  return fontFamily;
}
