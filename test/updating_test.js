const assert = require('assert');
const User = require('../models/user');

describe('updating records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Qwe' });
        const createdUser = await user.save();
        assert(createdUser.isNew === false);
    });

    it('updated the user in the db', async () => {
        const props = { name: 'John' };
        const result = await User.updateOne({ name: user.name }, props);
        assert(result.nModified === 1);
    });

});