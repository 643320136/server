const express = require("express")
const router = express.Router()
const linkDB = require("../../db/link")
const {URL} = require("url")

//鉴权
router.use((req, res, next) => {
  if (!req.session.userInfo || (req.session.userInfo._id !== '60f98313e364303ec42a5c73')) {
    return res.send({
      code: 6,
      msg: "您不是管理员"
    })
  }
  next()
})

//check
router.post("/check", (req, res) => {
  res.send({
    code: 0,
    msg: "您拥有管理员权限"
  })
})

//友链相关
router.use("/link", require("./link"))

//文章相关
router.use("/article", require("./article"))

//contact
router.use("/contact", require("./contact"))

module.exports = router



