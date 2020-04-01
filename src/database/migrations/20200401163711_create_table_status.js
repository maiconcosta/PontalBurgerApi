
exports.up = function (knex) {
    return knex.schema
        .createTable('status', function (table) {
            table.increments('id');
            table.string('status').notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('status');
};
