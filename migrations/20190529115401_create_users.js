exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('users');
    return await knex.schema.createTable('users', table=>{
        table.increments('userId');
        table.string('userFname');
        table.string('userLname');
        table.string('username');
        table.string('password');
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};