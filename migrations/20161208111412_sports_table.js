exports.up = function(knex, Promise) {
    return knex.schema.createTable('sports', function(table) {
        table.increments();
        table.text('name');
        table.text('type');
        table.text('gender');
        table.integer('origin');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sports');
};
