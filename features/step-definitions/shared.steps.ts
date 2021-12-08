
var steps = [
    require('./login.steps'),
    require('./forgotpassword.steps')
];

module.exports = function() {
    
    steps.forEach(function(step) {
        step.call(this);
    }.bind(this));
};