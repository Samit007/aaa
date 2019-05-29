exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('items');
    return await knex.schema.createTable('items', table=>{
        table.increments('itemid');
        table.string('itemname');
        table.string('itemprice');
        table.string('itemdesc');
        table.string('itemimage');
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};