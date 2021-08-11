function superbowlWin(record){
    //Made a Function called 'superbowlWin' that takes in the array named 'record' to use in the following function
    const winningYears = record.find( record => record.result === 'W');
    // make a Variable named 'Winning Years' that takes in all values in the Array named 'Record' that are FOUND TO HAVE A 'W' IN THE 'Result' Parameter!
    console.log(winningYears)
    return  !!winningYears ? winningYears.year : undefined;
    //   ^ Translates: NOT inverse of 'Winning Years' uses ? (shorthand for if) to either return a 'Year' from 'Record' when TRUE, if NOT TRUE then return 'Undefined'
}
