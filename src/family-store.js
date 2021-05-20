import { writable } from 'svelte/store';

const familyObject = writable({
  name: 'Katherine Louie',
  marriages: [
    {
      spouse: {
        name: 'Tony Mannucci',
      },
      children: [
        {
          name: 'Nico Mannucci',
          marriages: [
            {
              spouse: {
                name: 'Alexis Lim',
              },
              children: [
                {
                  name: 'Lucas Mannucci',
                },
                {
                  name: 'Lily Mannucci',
                },
                {
                  name: 'Rose Mannucci',
                },
              ],
            },
          ],
        },
        {
          name: 'Matthew Mannucci',
          marriages: [
            {
              spouse: {
                name: 'Sarah Fung',
              },
              children: [
                {
                  name: 'Maggie Mannucci',
                },
              ],
            },
          ],
        },
        {
          name: 'Libby Mannucci',
          marriages: [
            {
              spouse: { name: 'Ethan Folula' },
              children: [
                {
                  name: 'Lila Folula',
                },
                {
                  name: 'Becky Folula',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default familyObject;
