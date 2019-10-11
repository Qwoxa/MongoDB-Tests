const assert = require('assert');
const User = require('../models/User');

describe('deleting records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Test_name' });
        await user.save();
    });

    it('removes a user from the db', async () => {
        const deletedUser = await user.remove();
        assert(deletedUser.$isDeleted());
    });
});