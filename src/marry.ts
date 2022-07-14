export interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

const p: Person = {
  first: 'Pawel',
  last: 'Sawicki',
  address: {
    city: 'Berlin',
    country: 'Germany',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const pNext = marry(p, 'Blub', 'München');

function hasChanged(pPrev: Person, pCurr: Person): boolean {
  // n is the number of nodes, the complexity is O(n)
  // is this possible in O(1)?
  return pPrev !== pCurr; // O(1)
  // return pPrev !== pCurr || pPrev.first !== pCurr.first || pPrev.last !== pCurr.last || pPrev.address !== pCurr.address
}
