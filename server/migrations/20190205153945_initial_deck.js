
exports.up = function (knex, Promise) {
    return knex.schema.createTable('default_deck', (table) => {
        table.increments()
        table.string('front')
        table.string('back')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('default_deck')
};
