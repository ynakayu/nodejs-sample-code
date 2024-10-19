const axios = require('axios');
const readline = require('readline');

const api_key = 'xxxxx';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function get_weather_by_zip_code(formatted_zip) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${formatted_zip},JP&appid=${api_key}&lang=jp`;

  axios.get(url)
    .then(function(response){
      const weather_data = response.data;
      console.log(weather_data);
    })
    .catch(function(error){
      console.log('エラーが発生しました。郵便番号が正しいか確認してください。');
    })
}

rl.question('郵便番号を入力してください（半角数字7桁）:', (zip) => {
  if(!zip || isNaN(zip) || zip.length !== 7) {
    console.log('有効な7桁の郵便番号を入力してください。');
  } else {
    formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
    console.log(`入力された郵便番号: ${formatted_zip}`);
    get_weather_by_zip_code(formatted_zip);
  }
  rl.close();
});