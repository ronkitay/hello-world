function demoNativeDateAndTime() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const formattedDate = `${yyyy}/${mm}/${dd}`;

  console.log(`Using Native: The date format today is: ${formattedDate}`);
}

function demoMomentsDateAndTime() {
  const moment = require("moment");
  var formattedDate = moment().format("YYYY/MM/DD");
  console.log(`Using Moment.JS: The date format today is: ${formattedDate}`);
}

function demoDateFnsDateAndTime() {
  const { format } = require("date-fns");
  const formattedDate = format(new Date(), "yyyy/MM/dd");
  console.log(`Using Date-FNS: The date format today is: ${formattedDate}`);
}

function demoDayJsDateAndTime() {
  const dayjs = require("dayjs");
  const formattedDate = dayjs(new Date()).format("YYYY/MM/DD");
  console.log(`Using Day.JS: The date format today is: ${formattedDate}`);
}

module.exports = () => {
  console.log(`\n=======================================`);
  console.log(`======== Module: Date & Time ==========`);
  console.log(`=======================================\n`);

  demoNativeDateAndTime();
  demoMomentsDateAndTime();
  demoDateFnsDateAndTime();
  demoDayJsDateAndTime();
};
