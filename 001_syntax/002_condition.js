/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if (age >= 20) {
    console.log("成年です。");
  } else {
    console.log("未成年です。");
  }
}

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if (hour >= 4 && hour < 12) {
    console.log("Good Morning");
  } else if (hour >= 12 && hour < 17) {
    console.log("Hello");
  } else if (hour >= 17 || hour < 4) {
    console.log("Good Night");
  }
}

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

 function getDay(day = 0) {
  const dayArray = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  // const pre = day >= 7 ? 0 : dayArray[day];
  // return pre;
  if (day >= 7) {
    return 0;
  } else {
    console.log(dayArray[day]);
  }
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
