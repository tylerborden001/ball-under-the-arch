var { Model } = require('objection');

module.exports = class State extends Model{
    static get tableName(){
        return 'state';
    }

    static get jsonAttributes(){
        return [];
    }

    static get jsonSchema(){
        return {
            'properties': {
                'name': {
                    'type': 'string'
                },
                'questionId': {
                    'type': 'array'
                },
                'question': {
                    'type': 'array'
                },
            },

            'required': [
                'name'
            ]
        };
    }
};
