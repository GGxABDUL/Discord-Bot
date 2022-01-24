Create a file called 247.js and put this code
-----------------------------------------------
    
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("■■■■■■■■■■■■")
  console.log("■Bot Hosted■")
  console.log("■24/7 run  ■")
  console.log("■Code Run  ■")
  console.log("■Bot Online■")
  console.log("■■■■■■■■■■■■")
})

app.get("/", (req, res) => {
  res.send("Bot Run 24/7");
})

-----------------------------------------------
    
On your bot main file, Put this code

----------------------------------------------

const express = require(./247.js)

-----------CODE END---------------------------
