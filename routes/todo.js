var express = require('express');
var router = express.Router();

var Todo = require('mongoose').model('Todo');

router.get('/', function(req, res, next) {
	Todo.find(function(err, todos, count) {
		res.render('todo/index', {
			todos: todos,
			title: "Todo List"
		});
	});
});

router.post('/', function(req, res, next) {
	new Todo({
		title: "Title",
		body: "Body"
	}).save(function(err, todo, count) {
		res.send('save success!');
	});
});

router.delete('/', function(req, res, next) {

	//先获取
	Todo.findById(req.body.id, function(err, todo) {
		if (!err) {
			
			todo.remove();
			res.send('success !');
		}
	});
});

router.put('/', function(req, res, next) {

	//先获取
	Todo.findById(req.body.id, function(err, todo) {

		if (!err) {
			todo.title = req.body.title;
			todo.body = req.body.body;
			
			//获取到了更新
			todo.save(function(err, todo, count) {
				res.redirect('/todo');
			});
		}
	});
});

module.exports = router;