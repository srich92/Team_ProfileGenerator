const Engineer = require('../lib/Engineer');



test("create an engineer object",() =>{
    const engineer = new Engineer('shantel','eng1','vaivas@222.com','srich92');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toContain('@');
    expect(engineer.github).toEqual(expect.any(String));
    
})