function oddeven(num) {
    var n;
      n =  num % 2 // you can declare and initialize variable in a same line
      if (n === 0) { 
       console.log('Number is Even');
      } else if (n === 1) { /// no need of repeated if statement
       console.log('Number is Odd');
      }
      else {console.log('Invalid Number');} // use better checks to identify where input (num) is a number
      }
