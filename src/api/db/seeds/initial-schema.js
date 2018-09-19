exports.seed = async function(knex) {
  await knex('state').del()
  // await knex('questions').del()
  // await knex('user').del()
  // repeat for all of your tables

  // await knex('state').insert({ name: 'arkansas', questionID: 1 })
  // await knex('state').insert({ name: 'illinois', questionID: 2 })
  // await knex('state').insert({ name: 'iowa', questionID: 3 })
  // await knex('state').insert({ name: 'kansas', questionID: 4 })
  // await knex('state').insert({ name: 'kentucky', questionID: 5 })
  // await knex('state').insert({ name: 'missouri', questionID: 6 })
  // await knex('state').insert({ name: 'nebraska', questionID: 7 })
  // await knex('state').insert({ name: 'oklahoma', questionID: 8 })
  // await knex('state').insert({ name: 'tennessee', questionID: 9 })
  // repeat for all of your initial data
}
