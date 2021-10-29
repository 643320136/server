const express = require("express")
const app = express()
app.listen(4010, () => {
  console.log("服务已经开启 请访问: http://localhost/4010")
})

//连接数据库
require("./middleware/mongoose")

//中间件
app.use(require("./middleware/cors"))
app.use(require("./middleware/session"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"))

//路由监听
app.use("/", require("./router/index"))

// 让路由正常的跳回前端路由  
// app.get("*",(req, res)=>{
//   res.sendFile(path.jojn(__dirname,"./public/index.html"))
// })




