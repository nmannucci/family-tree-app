import { writable } from 'svelte/store';

const family = writable({
  spouse: [{ name: 'Maggie Johnson' }],
  parents: [{ name: 'Jamie Johnson' }, { name: 'Mark Blitz' }],
  siblings: [
    { name: 'Johnny Blitz' },
    { name: 'Maggie Blitz' },
    { name: 'Maggie Blitz' },
    { name: 'Maggie Blitz' },
  ],
  children: [
    { name: 'Darwin Blitz' },
    { name: 'Lily Blitz' },
    { name: 'Violet Blitz' },
  ],
});

// const customFamily = {
//   subscribe: family.subscribe,
//   addFamilyMember: (familyObject) => {

//   }
// }

export default family;
