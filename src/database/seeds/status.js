
exports.seed = function(knex) {
  return knex('status').del()
    .then(function () {
      return knex('status').insert([
        {id: 1, status: 'Iniciado'},
        {id: 2, status: 'Preparando'},
        {id: 3, status: 'Saiu para Entrega'},
        {id: 4, status: 'Concluído'}
      ]);
    });
};
