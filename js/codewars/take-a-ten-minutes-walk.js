// // You live in the city of Cartesia where all roads are laid out
//  in a perfect grid. You arrived ten minutes too early to an appointment, 
//  so you decided to take the opportunity to go for a short walk. 
//  The city provides its citizens with a Walk Generating App on their phones --
//   everytime you press the button it sends you an array of one-letter strings 
//   representing directions to walk (eg. ['n', 's', 'w', 'e']). Y
//   ou always walk only a single block for each letter (direction) and you 
//   know it takes you one minute to traverse one city block, 
//   so create a function that will return true if the walk the app gives you
//    will take you exactly ten minutes (you don't want to be early or late!)
//     and will, of course, return you to your starting point. Return false otherwise.

// // Note: you will always receive a valid array containing a random assortment 
// of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty 
// array (that's not a walk, that's standing still!).

// Link: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    let point = [0,0]; // [(east <--> west),(north <--> south)] coordinate
    let NS = 0; // North and South  Y coordinate
    let EW = 0; // East and West X coordinate
  
    const [pointX, pointY] = point; // array destructuring
    
    if( walk.length !== 10) return false;
    
    for(let i = 0; i < walk.length; i++){
      if(walk[i] === 'n'){
        NS++;
      }else if (walk[i] === 's'){
        NS--;
      }
      
      if(walk[i] === 'e'){
        EW++;
      }else if(walk[i] === 'w'){
        EW--;
      }
    }
    
    return EW === pointX && NS === pointY ? true : false;
  }


  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
  console.log(isValidWalk(['w']));
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

  export default isValidWalk;