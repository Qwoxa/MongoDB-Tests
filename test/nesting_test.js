const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../models/User');


describe('Nesting blocks', () => {
    let user;

    it('creates a user with a phone', async () => {
        user = await new User({ name: 'Nick', phones: [{
            number: 123,
            note: 'some note'
        }] }).save();

        assert(user.name === 'Nick');
    });

    // it('adds a number to the user', async () => {
    //     const number = { number: 998, note: 'new number' };
    //     const result = await phones.push(number);
    //     console.log(result);
    //     assert(true);
    // });

});