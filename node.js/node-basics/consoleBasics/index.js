function demoLog() {
  console.log("Using 'console.log' to print stuff");
}

module.exports = () => {
  console.log(`\n=======================================`);
  console.log(`======== Module: Console     ==========`);
  console.log(`=======================================\n`);

  demoLog();
};
