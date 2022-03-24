const test = require('ava');

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = new Promise((resolve, reject) => {
        setTimeout(() => resolve('bar'), Math.round(Math.random() * 2000 + 1000))
    });

    t.is(await bar, 'bar');
})
