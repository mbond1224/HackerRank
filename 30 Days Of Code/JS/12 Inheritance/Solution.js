class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
   constructor(firstName,lastName,id,scores){
       super(firstName,lastName,id);
       this.scores=scores;
   }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
   calculate(){
    let mean=this.scores.reduce((a, b) => a + b, 0)/this.scores.length;
    if(mean<=100 && mean>=90)
        return "O";
    if(mean<90 && mean>=80)
        return "E";
    if(mean<80 && mean>=70)
        return "A";
      if(mean<70 && mean>=55)
        return "P";
      if(mean<55 && mean>=40)
        return "D";
      if(mean<40)
        return "T";
}
}
