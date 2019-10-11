const assert = require('assert');
const User = require('../models/User');

describe('finding records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Test_name' });
        await user.save();
    });

    it('finds a user in the db', async () => {
        const foundUser = await User.findOne({ _id: user._id });
        assert(foundUser.equals(user));
    });

    it('finds a user by ID in the db', async () => {
        const foundUser = await User.findById(user._id);
        assert(foundUser.equals(user));
    });
});