# 开发文档

## 1. 返回数据格式说明
- **code** *Number*
    - 0 请求成功
    - 1 格式错误-数据格式不正确
    - 2 用户名冲突-用户已存在
    - 3 验证失败-用户不存在
    - 4 服务器错误
    - 5 登陆失败-密码错误
    - 6 鉴权失败-用户未登录
    - 7 修改失败-新用户名与原用户名相同
    - 8 修改失败-新旧密码相同
    - 9 上传失败
    - 10 友链添加失败-友链已存在
    - 11 文章查询失败-找不到对应id的文章
    
- **msg** *String*
    用于描述请求状况
  
- **data** *Object*
    请求需要返回数据时，会存放在data选项

## 2. 接口说明

### 登录接口

### 注册接口