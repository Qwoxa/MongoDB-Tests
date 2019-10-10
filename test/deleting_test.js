const assert = require('assert');
const User = require('../models/user');

describe('deleting records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Qwe' });
        await user.save();
    });

    it('removes a user from the db', async () => {
        const result = await user.remove();
        assert(result.name === user.name);
    });
});