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
//         .schema
//         .createTableIfNotExists(
//             "user",
//             ( table ) => {
//                 table.increments( "id" ).primary();
//                 table.string( "name" );
//                 table.string("email");
//                 table.string("password");
//             }
//         );
// };

exports.down = function migrateDown( knex ){
    return knex
        .schema
        .dropTableIfExists( "state" );
};
