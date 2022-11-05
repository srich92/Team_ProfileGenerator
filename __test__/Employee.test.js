const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test("create an Employee object",()=>{
    const emp =new  Employee("Dave","dae123","dave@gmail.com")

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(String));
    expect(emp.email).toContain('@');
});

