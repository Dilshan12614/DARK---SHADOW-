const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  MONGODB: process.env.MONGODB || "mongodb+srv://d1lshanashinsa793_db_user:7IIHK8SYZhbbdAPUm@cluster0.slp4i1y.mongodb.net/DARK_SHADOW?retryWrites=true&w=majority&appName=Cluster0",
  OWNER_NUM: process.env.OWNER_NUM || "94740534738",
};
