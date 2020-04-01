
exports.up = function(knex) {
    return knex.schema
        .createTable('order', function(table) {
            table.increments();
            table.timestamp('schedule');
            table.string('locale').notNullable();
            table.string('observation');
            table.decimal('total').notNullable();

            table.integer('status_id').unsigned();          
            table.foreign('status_id').references('id').inTable('status');
        });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('order');     
};
