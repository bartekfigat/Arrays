var playList = [];

playList.push('Pierwsza paly lista');
playList.push('Respect', 'Imagine');
playList.unshift('Born');
printList(playList);


var nums = [1, 2, 3, 4, 5];

console.log(nums.length);

nums.push(6, 7);

printList(nums);

nums.pop();
nums.unshift(0);
nums.shift();
nums.shift();
nums.shift();


printList(nums);