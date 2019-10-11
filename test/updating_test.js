const assert = require('assert');
const User = require('../models/User');

describe('updating records', () => {
    let user = null;

    beforeEach(async () => {
        user = await new User({ name: 'Test_name', age: 20 }).save();
    });

    it('updated the user in the db', async () => {
        const props = { name: 'Test_name_#2' };
        const result = await User.updateOne({ name: user.name }, { $set: props });
        assert(result.nModified === 1);
    });

    it('increments the user\'s age', async () => {
        const result = await User.updateOne({ _id: user._id }, { $inc: { age: 1 } });
        assert(result.nModified === 1);
    });

});