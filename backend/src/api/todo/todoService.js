const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
Todo.updateOptions({new: true, runValidatios:true})

module.exports = Todo