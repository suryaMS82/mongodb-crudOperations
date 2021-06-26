const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoschema = new schema({
    Description: String,
    Completed:Boolean
});

const todotask = mongoose.model('todotask',todoschema);
module.exports=todotask;