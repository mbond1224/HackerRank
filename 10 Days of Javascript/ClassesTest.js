//Main Code Starts
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
    class Polygon{
        constructor(sides){
            this.sides=sides;
        }
        perimeter () {
            let total=0;
            let sidesCt=this.sides.length;
            for(let i=0;i<sidesCt;i++)
                total+=this.sides[i];
        return total;
        }
        
    }
    // Main Code Ends
    const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
