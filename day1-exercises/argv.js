var myArgs = process.argv.slice(2);
 console.log('myArgs: ', myArgs);
 switch (myArgs[0]) {
    case 'insult':
      console.log(myArgs[1], 'smells quite badly.');
      break;
    case 'compliment':
      console.log(myArgs[1], 'is really cool.');
      break;
    default:
      
  }

// var a = Number(value);
// console.log(a);
