import { writable } from 'svelte/store';

const profile = writable({
  firstName: 'Nico',
  lastName: 'Mannucci',
  contact: {
    phone: '6263403194',
    email: 'hello@gmail.com',
    address: {
      street: '36 San Miguel RD',
      city: 'Pasadena',
      state: 'CA',
      zip: '91105',
      country: 'United States',
    },
  },
  bio:
    'Lorem!!!!, ipsum dolor sit amet consectetur adipisicing elit. Amet officia perspiciatis totam consequatur nobis mollitia corrupti. Illum nam mollitia quidem voluptatum veniam deserunt, delectus odit My name is Nico and I am just about to graduate college.',
});

export default profile;
