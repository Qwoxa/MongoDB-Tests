const assert = require('assert');
const User = require('../models/user');

describe('saving records', () => {
    it('saves a user to the db', async () => {
        const user = new User({ name: 'Nick', surname: 'Dyson' });
        const createdUser = await user.save();
    });
});