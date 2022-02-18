//i
  //
function findShortestString(arr) {

  // let smallest = arr[0]

  // for (let current of arr) {
  //   if (current.length < smallest.length) {
  //     smallest = current
  //   }

  // }
  // return smallest;

  return arr.reduce((smallest, current) => {
    return current.length < smallest.length ? current : smallest;
  })
}

if (require.main === module) {
  // add your own tests in here
  assertEqual('a', findShortestString(['a', 'aaaaaa', 'aaaaaaaaaaa', 'aaaaaaaaaaaaaaa']))
  console.log('\n\n')
  assertEqual('in', findShortestString(['damsel', 'in', 'distress', 'in']))
  console.log('\n\n')

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  const strings = [];
  
  for (let i = 0; i < 100; i++) {

  }

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion', 'juniper', 'lily', 'dadelion'])
  }

  const avgTime = (Date.now() - startTime) / 2000;
  console.log(avgTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution


function assertEqual(a, b) {
  console.log(`=> ${b}`)
  if (a === b) {
    return console.log('passed')
  }
  return console.log(`Expected ${a} to equal ${b}`)
}