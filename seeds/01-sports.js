exports.seed = function(knex, Promise) {
    return knex('sports').del()
        .then(function() {
            const sports = [{
                name: 'basketball',
                type: 'balls',
                gender: 'both',
                origin: 1222
            }, {
                name: 'tennis',
                type: 'balls',
                gender: 'both',
                origin: 1723
            }, {
                name: 'swimming',
                type: 'endurance',
                gender: 'both',
                origin: 1955
            }, {
                name: 'golf',
                type: 'balls',
                gender: 'both',
                origin: 1226
            }];

            return knex('sports').insert(sports);
        });
};
