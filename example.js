// setTimeout(function() {
//   console.log('first task complete');
// }, 2000);

// console.log('second task complete');

setTimeout(function(){
  console.log('first task done');
  setTimeout(function(){
    console.log('second task done');
    setTimeout(function(){
      console.log('third task done');
    }, 2000);
  }, 2000);
}, 2000);