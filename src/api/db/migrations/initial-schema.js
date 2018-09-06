exports.up = async function migrateUp( knex ){
    await knex
        .schema
        .createTableIfNotExists(
            "state",
            ( table ) => {
                table.increments( "id" ).primary();
                table.string( "name" );
            }
        );
};

exports.down = function migrateDown( knex ){
    return knex
        .schema
        .dropTableIfExists( "state" );
};
