const { it } = require('node:test')
const validate = require('./validate');
const { exportAllDeclaration } = require('@babel/types');

it('check the regualar expression of the input', () => {
    let names = 'ada45609@gmail.com';
    let nameValidate = /[a-zA-Z0-9~!#$%^&*@]+@[a-zA-Z]+.[a-zA-Z]*/;
    let toget = nameValidate.exec(names);
    expect(toget).toBe('you have a valid email address')
})