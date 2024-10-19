const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('郵便番号を入力してください（半角数字7桁）:', (zip) => {
  if(!zip || isNaN(zip) || zip.length !== 7) {
    console.log('有効な7桁の郵便番号を入力してください。');
  } else {
    formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
    console.log(`入力された郵便番号: ${formatted_zip}`);
  }
  rl.close();
});