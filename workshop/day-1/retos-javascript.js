let name = 'Astro';

const getName = () => {
  console.log(name);
  let name = 'Next';
};

getName();

/* 
✅ Respuestas:
- [] undefined
- [] 'Astro'
- [X] ReferenceError
- [] 'Astro' 'Next'
- [] 'Next'
*/

// --------

const listOfNumbers = [1, 4, 6, 3, 2, 6, 14];

sorterByMayor({ list: listOfNumbers });

function sorterByMayor({ list }) {
  return list.sort((a, b) => a - b);
}

/* 
✅ Respuestas:
- [X] [1,2,3,4,6,6,14]
- [] [14,6,6,4,3,2,1]
- [] ReferenceError
- [] [1,14,2,3,4,6,6]
*/
