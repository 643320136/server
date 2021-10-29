
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/blog0715",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(()=>{console.log("数据库连接成功")})
  .catch(e=>{console.log("数据库连接失败",e)})









