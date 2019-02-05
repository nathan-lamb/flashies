
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('default_deck').del()
    .then(function () {
      // Inserts seed entries
      return knex('default_deck').insert([
        { id: 1, front: 'blau', back: 'blue' },
        { id: 2, front: 'die Katze', back: 'cat' },
        { id: 3, front: 'vermeiden', back: 'to avoid' },
        { id: 4, front: 'die Kinder', back: 'children' },
        { id: 5, front: 'sich verabschieden', back: 'to say goodbye' },
        { id: 6, front: 'für', back: 'for' }
      ]);
    });
};
