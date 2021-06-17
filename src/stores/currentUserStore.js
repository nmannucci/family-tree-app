import { writable } from 'svelte/store';
import { User } from '../models/user';

const currentUser = writable(null);
// ERROR ON RE-LOAD OF PAGE. STORE IS EMPTY ON RE-LOAD

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
