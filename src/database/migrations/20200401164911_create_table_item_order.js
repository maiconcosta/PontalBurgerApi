
exports.up = function (knex) {
    return knex.schema
        .createTable('item_order', function (table) {
            table.integer('item_id').notNullable().unsigned();
            table.integer('order_id').notNullable().unsigned();

            table.foreign('item_id').references('id').inTable('item');
            table.foreign('order_id').references('id').inTable('order');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('item_order');
};
