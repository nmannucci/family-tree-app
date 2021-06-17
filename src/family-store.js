import { writable } from 'svelte/store';
import { users, userDb } from '../src/models/user.js';

function buildTree(user) {
  let size = 0;
  function recurseTree(user) {
    size += 1;
    if (!user?.hasChildren()) {
      return {
        name: user?.name ?? 'Person',
        marriages: [
          ...(user?.marriages
            ? user.marriages
                .filter((marriage) => marriage.spouse)
                .map((marriage, index, arr) => {
                  const spouse = userDb[marriage.spouse];
                  return {
                    spouse: {
                      name: spouse?.name ?? 'Spouse',
                    },
                  };
                })
            : []),
        ],
      };
    }

    const buildChildren = (children) => {
      if (children) {
        return children
          .map((val, index, arr) => userDb[val])
          .map((val, index, arr) => recurseTree(val));
      }
      return undefined;
    };

    const childrenNoSpouse = user.getChildrenNoSpouse();

    return {
      name: user.name,
      marriages: [
        ...(user?.marriages
          ? user.marriages
              .filter((marriage) => marriage.spouse)
              .map((marriage, index, arr) => {
                const spouse = userDb[marriage?.spouse];
                const children = marriage?.children;
                return {
                  spouse: {
                    name: spouse?.name ?? 'Spouse',
                  },
                  children: buildChildren(children),
                };
              })
          : []),
      ],

      children:
        childrenNoSpouse.length !== 0
          ? buildChildren(childrenNoSpouse)
          : undefined,
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

export default familyObject;
