
exports.up = function (knex) {
    return knex.schema
        .createTable('item_ingredient', function (table) {
            table.integer('item_id').notNullable().unsigned();
            table.integer('ingredient_id').notNullable().unsigned();

            table.foreign('item_id').references('id').inTable('item');
            table.foreign('ingredient_id').references('id').inTable('ingredient');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('item_ingredient');
};
