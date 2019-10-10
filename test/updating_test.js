const assert = require('assert');
const User = require('../models/user');

describe('updating records', () => {
    let user = null;

    beforeEach(async () => {
        user = new User({ name: 'Qwe', age: 20 });
        await user.save();
    });

    it('updated the user in the db', async () => {
        const props = { name: 'John' };
        const result = await User.updateOne({ name: user.name }, { $set: props });
        assert(result.nModified === 1);
    });

    it('increments the user\'s age', async () => {
        const result = await User.updateOne({ _id: user._id }, { $inc: { age: 1 } });
        assert(result.nModified === 1);
    });

});