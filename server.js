const express = require("express");
const app = express();

app.use(
  (date = (req, res, next) => {
    let currentDate = new Date().getHours();
    if (currentDate >= 9 && currentDate <= 17) {
      next();
    } else {
      res.status(503).send("Our office is not open now");
    }
  })
);
app.use(express.static(__dirname + "/public"));

app.listen(4000, (err) => {
  if (err) console.log("error");
  else console.log("ok");
});
