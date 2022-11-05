const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Intern = require('../lib/Intern');



test("create an intern object",() =>{
    const intern = new Intern('Shantel','intern1','srichards646@gmail.com','Harvard University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toContain('@');
    expect(intern.school).toEqual(expect.any(String));
    
})