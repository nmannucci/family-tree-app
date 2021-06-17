export class User {
  constructor(id, name, parents, marriages, siblings, contactInfo) {
    this.id = id;
    this.name = name;
    this.parents = parents;
    this.marriages = marriages;
    this.siblings = siblings;
    this.contactInfo = contactInfo;
  }

  hasChildren() {
    if (this.marriages) {
      for (let i = 0; i < this.marriages.length; i++) {
        const marriageChildren = this.marriages[i].children;
        if (marriageChildren !== undefined && marriageChildren.length !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  getChildrenNoSpouse() {
    let result = [];
    if (this.marriages) {
      for (let i = 0; i < this.marriages.length; i++) {
        const marriage = this.marriages[i];
        if (!marriage.spouse && marriage.children) {
          result = result.concat(marriage.children);
        }
      }
    }
    return result;
  }
}

export const userDb = {
  alexis: new User(
    'alexis',
    'Alexis',
    undefined,
    [
      {
        spouse: 'nico',
        children: ['luca', 'john'],
      },
    ],
    undefined
  ),
  kat: new User(
    'kat',
    'Katherine',
    undefined,
    [
      {
        spouse: 'tony',
        children: ['nico', 'matt', 'libby'],
      },
    ],
    undefined
  ),
  tony: new User(
    'tony',
    'Tony',
    ['nono', 'noni'],
    [
      {
        spouse: 'kat',
        children: ['nico', 'matt', 'libby'],
      },
    ],
    ['mark']
  ),
  mark: new User('mark', 'Mark', ['nono', 'noni'], undefined, ['tony']),
  val: new User('val', 'Val', ['nono', 'nancy'], undefined, undefined),
  noni: new User(
    'noni',
    'Noni',
    undefined,
    [
      {
        spouse: 'nono',
        children: ['tony'],
      },
    ],
    undefined
  ),
  nono: new User(
    'nono',
    'Nonno',
    undefined,
    [
      {
        spouse: 'nancy',
        children: ['val'],
      },
      {
        spouse: 'noni',
        children: ['tony', 'mark'],
      },
    ],
    undefined
  ),
  nancy: new User(
    'nancy',
    'Nancy',
    undefined,
    [
      {
        spouse: 'nono',
        children: ['val'],
      },
    ],
    undefined
  ),
  matt: new User('matt', 'Matthew', ['kat', 'tony'], undefined, [
    'nico',
    'libby',
  ]),
  libby: new User(
    'libby',
    'Libby',
    ['kat', 'tony'],
    [{ spouse: 'ethan' }],
    ['nico', 'matt']
  ),

  ethan: new User(
    'ethan',
    'Ethan',
    undefined,
    [
      {
        spouse: 'libby',
      },
    ],
    undefined
  ),

  john: new User('john', 'Johhny', ['nico', 'alexis'], undefined, ['luca']),
  luca: new User('luca', 'Luca', ['nico', 'alexis'], undefined, ['john']),
  nico: new User(
    'nico',
    'Nico',
    ['kat', 'tony'],
    [
      {
        spouse: 'alexis',
        children: ['luca', 'john'],
      },
    ],
    ['matt', 'libby'],
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
