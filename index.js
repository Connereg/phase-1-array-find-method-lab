function superbowlWin(record){
    //Made a Function called 'superbowlWin' that takes in the array named 'record' to use in the following function
    const winningYear = record.find( eachYear => eachYear.result === 'W');
    // make a Variable named 'Winning Years' that MOVES THROUGH all objects in the Array and returns the FIRST match in 'Record' that are FOUND TO HAVE A 'W' IN THE 'Result' Parameter!
    console.log(winningYear)
   
    
    
    return winningYear ? winningYear.year : undefined;
    //   ^ Translates: NOT inverse of 'Winning Years' uses ? (shorthand for if) to either return a 'Year' from 'Record' when TRUE, if NOT TRUE then return 'Undefined'
}
