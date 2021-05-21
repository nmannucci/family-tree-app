class User {
  constructor(
    id,
    firstName,
    lastName,
    parents,
    spouse,
    siblings,
    children,
    contactInfo
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.parents = parents;
    this.spouse = spouse;
    this.siblings = siblings;
    this.children = children;
    this.contactInfo = contactInfo;
  }
}

export const userDb = {
  alexis: new User('alexis', 'Alexis', 'Lim', undefined, 'nico', undefined, [
    'john',
    'luca',
  ]),
  kat: new User('kat', 'Katherine', 'Louie', undefined, 'tony', undefined, [
    'nico',
    'matt',
    'libby',
  ]),
  tony: new User('tony', 'Tony', 'Mannucci', undefined, 'kat', undefined, [
    'nico',
    'matt',
    'libby',
  ]),
  matt: new User('matt', 'Matthew', 'Mannucci', ['kat', 'tony'], undefined, [
    'nico',
    'libby',
  ]),
  libby: new User(
    'libby',
    'Libby',
    'Mannucci',
    ['kat', 'tony'],
    undefined,
    ['nico', 'matt'],
    undefined
  ),
  john: new User(
    'john',
    'Johhny',
    'Mannucci',
    ['nico', 'alexis'],
    undefined,
    ['luca'],
    undefined
  ),
  luca: new User(
    'luca',
    'Luca',
    'Mannucci',
    ['nico', 'alexis'],
    undefined,
    ['john'],
    undefined
  ),
  nico: new User(
    'nico',
    'Nico',
    'Mannucci',
    ['kat', 'tony'],
    'alexis',
    ['matt', 'libby'],
    ['luca', 'john'],
    {
      phone: '6263403194',
      email: 'hello@gmail.com',
      address: {
        street: '36 San Miguel RD',
        city: 'Pasadena',
        state: 'CA',
        zip: '91105',
        country: 'United States',
      },
    }
  ),
};

export const users = Object.values(userDb);
