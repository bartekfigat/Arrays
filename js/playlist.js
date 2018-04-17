// var playList = [];

// playList.push('Pierwsza paly lista');
// playList.push('Respect', 'Imagine');
// playList.unshift('Born');
// printList(playList);


// var nums = [1, 2, 3, 4, 5];

// console.log(nums.length);

// nums.push(6, 7);

// printList(nums);

// nums.pop();
// nums.unshift(0);
// nums.shift();
// nums.shift();
// nums.shift();


// printList(nums);

// var playList = [
//     'I Did It My Way',
//     'Respect',
//     'Imagine',
//     'Born to Run',
//     'Louie Louie',
//     'Maybellene'
//   ];
  
//   function print(message) {
//     document.write(message);
//   }   


// function printList( list ) {
//     var listHTML = '<ol>';
//     for (var i = 0; i < list.length; i += 1) {
//         listHTML += '<li>' + list[i] + '</li>';
//     } 
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printList(palyList);
 
var count;

var pytania = [
           ['Jaki kolor ma żaba', 'Zielony'],
           ['Jakie jest naszubsze zwierze na świecie', 'gazela'],
           ['Następne pytanie', 'Jest takie'],
           ['Następna Array']
];
    for(var i = 0; i <= pytania.length; i += 1){
        console.log(pytania[i]);
        
    }    
    
   const counter =  Math.floor(pytania.length);

   document.write(counter);
              
