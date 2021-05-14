import { writable } from 'svelte/store';

const familyObject = writable({
  name: 'Katherine Louie',
  marriages: [
    {
      spouse: {
        name: 'Tony Mannucci',
      },
    },
  ],
  children: [
    {
      name: 'Nico Mannucci',
      marriages: [
        {
          spouse: { name: 'Alexis Lim' },
        },
      ],
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
    {
      name: 'Matthew Mannucci',
      marriages: [
        {
          spouse: {
            name: 'Sarah Fung',
          },
        },
      ],
      children: [
        {
          name: 'Maggie Mannucci',
        },
      ],
    },
    {
      name: 'Libby Mannucci',
      marriages: [
        {
          spouse: { name: 'Ethan Folula' },
        },
      ],
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
});

export default familyObject;

// {
//   name: "Niclas Superlongsurname",
//   class: "",
//   // textClass: "nodeText",
//   marriages: [
//     {
//       spouse: {
//         name: "Iliana",
//         class: "node",
//         extra: {
//           nickname: "Illi",
//         },
//       },
//       children: [
//         {
//           name: "James",
//           class: "node",
//           marriages: [
//             {
//               spouse: {
//                 name: "Alexandra",
//                 class: "node",
//               },
//               children: [
//                 {
//                   name: "Eric",
//                   class: "node",
//                   marriages: [
//                     {
//                       spouse: {
//                         name: "Eva",
//                         class: "node",
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: "Jane",
//                   class: "node",
//                   marriages: [
//                     {
//                       spouse: {
//                         name: "Johnny Mig",
//                       },
//                     },
//                   ],
//                   children: [
//                     {
//                       name: "Nico Mannucci",
//                       class: "node",
//                       marriages: [
//                         {
//                           spouse: {
//                             name: "Alexis Lim",
//                             class: "node",
//                           },
//                         },
//                       ],
//                     },
//                     {
//                       name: "Nico Mannucci",
//                       class: "node",
//                       marriages: [
//                         {
//                           spouse: {
//                             name: "Alexis Lim",
//                             class: "node",
//                           },
//                         },
//                       ],
//                     },
//                     {
//                       name: "Nico Mannucci",
//                       class: "node",
//                     },
//                     {
//                       name: "Nico Mannucci",
//                       class: "node",
//                       marriages: [
//                         {
//                           spouse: {
//                             name: "Alexis Lim",
//                             class: "node",
//                           },
//                         },
//                       ],
//                     },
//                   ],
//                 },
//                 {
//                   name: "Jasper",
//                   class: "node",
//                 },
//                 {
//                   name: "Emma",
//                   class: "node",
//                 },
//                 {
//                   name: "Julia",
//                   class: "node",
//                 },
//                 {
//                   name: "Nico Mannucci",
//                   class: "node",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// },
