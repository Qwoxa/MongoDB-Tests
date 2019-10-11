const assert = require('assert');
const User = require('../models/User');

describe('saving records', () => {
    it('saves a user to the db', async () => {
        const user = await new User({ name: 'Nick' }).save();
        assert(!user.isNew);
    });
});