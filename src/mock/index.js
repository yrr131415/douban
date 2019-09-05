var Mock=require("mockjs");

// 配置数据请求
Mock.mock("/aa","get",require("./json/findmovie.json"));
Mock.mock("/group","get",require("./json/group.json"));
Mock.mock("/book","get",require("./json/book.json"));
Mock.mock("/index","get",require("./json/shouye.json"));


