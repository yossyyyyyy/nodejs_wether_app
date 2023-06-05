const request = require('request');
const dotenv = require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('ejs', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('hello.ejs', { weather: null });
});

app.post('/weather', (req, res) => {
  const city = req.body.city;

  const option = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`,
    method: 'GET',
    json: true,
  };

  request(option, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const weather = {
        city: city,
        weather: body.weather[0].main,
        temperature: body.main.temp,
      };
      res.render('hello.ejs', { weather });
    } else {
      res.render('error.ejs');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
