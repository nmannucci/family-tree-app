import { writable } from 'svelte/store';
import { User } from '../models/user';

let localStoredUser = new User(
  'QAgQdq9pNmQwr4dyMHRuPYCgI3U2',
  'Nico',
  ['kat', 'tony'],
  [{ spouse: 'alexis', children: ['luca', 'john'] }],
  ['matt', 'libby'],
  { email: 'nmannucci1@gmail.com' }
);

const currentUser = writable(localStoredUser);

export const currentUserStore = {
  subscribe: currentUser.subscribe,
  setCurrentUserFromFirebase: (firebaseUser) => {
    let user = new User(
      firebaseUser.uid,
      firebaseUser.displayName,
      undefined,
      undefined,
      undefined,
      { email: firebaseUser.email }
    );
    currentUser.set(user);
  },
  setDisplayName: (displayName) => {
    currentUser.update((user) => {
      user.name = displayName;
      return user;
    });
    console.log(displayName);
  },
  setParents: (parentIds) => {
    currentUser.update((user) => {
      user.parents = parentIds;
      return user;
    });
    console.log(parentIds);
  },
  setSiblings: (siblingIds) => {
    currentUser.update((user) => {
      user.siblings = siblingIds;
      return user;
    });
    console.log(siblingIds);
  },
  setMarriages: (marriages) => {
    currentUser.update((user) => {
      user.marriages = marriages;
      return user;
    });
    console.log(marriages);
  },
};
