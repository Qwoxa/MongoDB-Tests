const assert = require('assert');
const User = require('../models/User');


describe('Nesting blocks', () => {
    let user;

    it('creates a user with a phone', async () => {
        user =  await new User({ name: 'Test_name', phones: [{
            number: 17043053545,
            note: 'Test_phone_number'
        }] }).save();

        assert(!user.isNew);
    });

    it('adds a number to the user', async () => {
        const phone = { number: 17043053546, note: 'Test_phone_#2' };
        await user.phones.push(phone);
        assert(user.phones.length === 2);
    });

});