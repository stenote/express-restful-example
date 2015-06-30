//初始化 mongo
var mongo = require('mongoose');

//链接到数据库
mongo.connect('mongodb://192.168.1.103/test');


//获取 schema
var Schema = mongo.Schema;

//初始化 Model
var Todo = new Schema({
	title: String,
	body: String
});

//绑定 model
mongo.model('Todo', Todo);
