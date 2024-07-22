const express = require('express');
const z = require('zod');

const app = express();
app.use(express.json());
// app.get('/health-checkup', function (req, res) {
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;
//   console.log(username, password, kidneyId);
//   if (username != 'spa' || password != 'spa') {
//early returns is a good habit
//     res.status(400).json({ msg: 'something is wrong with yr inputs' });
//     return;
//   }
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: 'something is wrong with yr inputs' });
//     return;
//   }
//   res.json({
//     msg: `your kidney is fine ${kidneyId}`,
//   });
// });

let numberOfRequests = 0;
function calculateRequest(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}
const schema = zod.array(zod.number());

function userMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  const response = schema.safeParse(kidneys);
  //respones will be either true or false
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != 'spa' || password != 'spa') {
    //early returns is a good habit
    res.status(400).json({ msg: 'something is wrong with yr inputs' });
    return;
  }
  next();
}

function kindeyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: 'something is wrong with yr inputs' });
    return;
  }
  next();
}
app.get(
  '/health-checkup',
  calculateRequest,
  userMiddleware,
  kindeyMiddleware,
  (req, res) => {
    //do something
  }
);
app.post('/kidney-checkup', userMiddleware, kindeyMiddleware, (req, res) => {
  //do something
  //we need some input validation
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send('your kidney length is ' + kidneyLength);
});
app.get('/heart-checkup', userMiddleware, (req, res) => {
  //do something
});

//global catches
app.use((err, req, res, next) => {
  res.json({
    msg: 'sorry something is up',
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
