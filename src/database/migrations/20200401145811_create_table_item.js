
exports.up = function(knex) {
    return knex.schema
        .createTable('item', function(table) {
            table.increments('id');
            table.string('name').notNullable();
            table.string('photo').notNullable();
            table.decimal('value').notNullable();
        });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('item');     
};