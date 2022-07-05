# Linkjob前端面试题目

本应用是一个`TODO list`的应用，应用代码存在一些bug，同时有些功能需要完善，请根据如下要求，修改代码，并生成一个可用于部署的zip包，zip包中包含可直接部署的文件。

## 1. 相关命令

```shell
# 安装依赖
yarn

# 运行测试环境
yarn dev

# 生成可部署文件
yarn build
```

## 2. 待修复的问题

1. 点击`+`按钮，可以添加一行新的TODO Item
2. 点击TODO Item的title，可以编辑该行的内容，弹出对话框并保存，重新渲染页面
3. 点击每行开头的`X`按钮，删除该行
4. `app.js`代码中，增加方法的`jsdoc`注释
5. 请把本repo fork到您自己的github账号，并commit修改后的代码
6. commit完成后，增加一个v1.0.0的标签
