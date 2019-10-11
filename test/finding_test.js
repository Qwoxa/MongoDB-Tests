const assert = require('assert');
const User = require('../models/User');

describe('finding records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Qwe' });
        await user.save();
    });

    it('finds a user in the db', async () => {
        const result = await User.findOne({ name: user.name });
        assert(result.name === user.name);
    });

    it('finds a user by ID in the db', async () => {
        const result = await User.findById(user._id);
        assert(String(result._id) === String(user._id));
    });
});