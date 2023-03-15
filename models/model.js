const orm = require('../config/orm');
// workout model with all of its query functions
const workout = {
    selectAll: function() {
        return orm.selectAll('workouts');
    },

};
