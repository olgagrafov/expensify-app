const add = (a ,b)  =>  a + b + 1 ;
const generateGreeting = (name = 'Anonymous') => `Helo ypu ${name}`;

test('should add two numbers', () =>{
    const result = add(3, 4);

  expect(result).toBe(8);
});


test('Print Greeting', () =>{
    const result = generateGreeting('Vasia');

  expect(result).toBe('Helo ypu Vasia');
});

test('Print Anonymous Greeting', () =>{
    const result = generateGreeting();

  expect(result).toBe('Helo ypu Anonymous');
});

