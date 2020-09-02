exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.string('name').notNullable().index();
        table.string('description');
        table.boolean('completed').notNullable().defaultTo(0)
    })

    .createTable('resources', table => {
        table.increments();
        table.string('name').notNullable().unique().index();
        table.string('description')
    })

    .createTable('tasks', table => {
        table.increments();
        table.string('description').notNullable();
        table.string('notes');
        table.boolean('completed').notNullable().defaultTo(0);
        table.integer('projects_id').unsigned()
        .references('projects.id').onDelete('RESTRICT').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
