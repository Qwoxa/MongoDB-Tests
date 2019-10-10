const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../models/user');


describe('Nesting blocks', () => {

    it('creates a user with a phone', async () => {
        const user = await new User({ name: 'Nick', phones: [{
            number: 123,
            note: 'some note'
        }] }).save();

        assert(user.name === 'Nick');
    });

});