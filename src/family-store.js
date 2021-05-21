import { writable } from 'svelte/store';
import { users, userDb } from '../src/models/user.js';

function buildTree(user) {
  let size = 0;
  function recurseTree(user) {
    console.log(user);
    size += 1;
    if (!user?.children) {
      return {
        name: user?.firstName,
        marriages: [
          ...(user?.spouse
            ? {
                spouse: {
                  name: userDb[user?.spouse]?.firstName,
                },
              }
            : []),
        ],
      };
    }

    return {
      name: user.firstName,
      marriages: [
        {
          spouse: {
            name: userDb[user.spouse]?.firstName,
          },
          children: user.children
            .map((val, index, arr) => userDb[val])
            .map((val, index, arr) => recurseTree(val)),
        },
      ],
    };
  }
  const tree = recurseTree(user);
  return { size: size, tree: tree };
}

function buildTreeFromUsers(users) {
  let roots = [];
  for (let i = 0; i < users.length; i++) {
    if (!users[i].parents) {
      roots = [...roots, users[i]];
    }
  }
  let chosenRoots = [];
  for (let i = 0; i < roots.length; i++) {
    let spouse = userDb[roots[i].spouse];
    if (!spouse || !chosenRoots.find((chosen) => chosen.id === spouse.id)) {
      chosenRoots = [...chosenRoots, roots[i]];
    }
  }

  const chosenTrees = chosenRoots.map((chosenUser, index, arr) =>
    buildTree(chosenUser)
  );

  // Return the tree with the largest size because that will be the truest tree
  return chosenTrees.sort((a, b) => a.size - b.size).pop().tree;
}

const familyObject = writable([buildTreeFromUsers(users)]);

// const familyObject = writable([
//   {
//     name: 'Katherine Louie',
//     marriages: [
//       {
//         spouse: {
//           name: 'Tony Mannucci',
//         },
//         children: [
//           {
//             name: 'Nico Mannucci',
//             marriages: [
//               {
//                 spouse: {
//                   name: 'Alexis Lim',
//                 },
//                 children: [
//                   {
//                     name: 'Lucas Mannucci',
//                   },
//                   {
//                     name: 'Lily Mannucci',
//                   },
//                   {
//                     name: 'Rose Mannucci',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: 'Matthew Mannucci',
//             marriages: [
//               {
//                 spouse: {
//                   name: 'Sarah Fung',
//                 },
//                 children: [
//                   {
//                     name: 'Maggie Mannucci',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: 'Libby Mannucci',
//             marriages: [
//               {
//                 spouse: { name: 'Ethan Folula' },
//                 children: [
//                   {
//                     name: 'Lila Folula',
//                   },
//                   {
//                     name: 'Becky Folula',
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

export default familyObject;
