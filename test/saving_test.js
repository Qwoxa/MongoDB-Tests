const assert = require('assert');
const User = require('../models/User');

describe('saving records', () => {
    it('saves a user to the db', async () => {
        const user = new User({ name: 'Nick', surname: 'Dyson' });
        await user.save();
        assert(!user.isNew);
    });
});