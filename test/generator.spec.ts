import t from 'tap';

import generator from '../src/generator';

t.test('`generator()` invoked with simple string returns it', async t => {
    const strings = ['I am just simple string', 'Nothing interesting here'];
    for (const s of strings) {
        t.equal(generator(s), s, 'template and returned string are equal');
    }
});
