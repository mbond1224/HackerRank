/Main Code Starts
function processData(input) {
    input = input.split("\n");
    let [m, n] = input[0].split(" ").map(Number);
    let X = [];
    let Y = [];
    let i = 0,
        j = 0;
    let nums, row;
    for (i = 0; i < n; i++) {
        row = [];
        row.push(1);
        nums = input[i + 1].split(" ").map(Number);
        for (j = 0; j < m; j++) row.push(nums[j]);
        Y[i] = nums[j];
        X.push(row);
    }
    let coef_mat = fitMultiLinear(X, Y);

    let queries = Number(input[++i]);
    const a = coef_mat[0][0];
    let calculated_values = 0;
    ++i;
    let s = [];
    for (let m = 0; m < queries; m++) {

        nums = input[i + m].split(" ").map(Number);
        calculated_values = a;
        for (j = 0; j < nums.length; j++) {
            calculated_values += nums[j] * coef_mat[j + 1];
        }
        console.log(calculated_values.toFixed(2));

        
    }




}

function fitMultiLinear(X, Y) {

    let XT = T(X);
   
    let SQ = Mult(XT, X);
   
    let inv = inverse(SQ);
   
    let invT = Mult(inv, XT);
   
    let result = Mult(invT, Y);

    return result;
}



function T(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let Transpose = [],
        row;
    for (let j = 0; j < m; j++) {
        row = [];
        for (let i = 0; i < n; i++) {
            row.push(matrix[i][j]);
        }
        Transpose.push(row);
    }
    return Transpose;
}

function Mult(A, B) {
    let n = A.length;
    let m = A[0].length;
    let l = B[0].length;
    let product = [],
        row = [],
        s = 0;
    if (!l) {
        let c = [];
        c.push(B);
        B = T(c);
        l = B[0].length;
    }
    for (let i = 0; i < n; i++) {
        row = [];
        for (let k = 0; k < l; k++) {

            s = 0;
            for (let j = 0; j < m; j++) {
                s += A[i][j] * B[j][k];
            }
            row.push(s);
        }
        product.push(row);
    }
    return product;
}



function inverse(Matrix) {
// inverse function source :   http://blog.acipo.com/matrix-inversion-in-javascript/
      let idx = 0, ii = 0,j = 0,dim = Matrix.length,e = 0,t = 0;
      let Identity = [],Clone = [];
    for (idx = 0; idx < dim; idx++) {
        // Create the row
        Identity[Identity.length] = [];
        Clone[Clone.length] = [];
        for (j = 0; j < dim; j += 1) {

          
            if (idx == j) {
                Identity[idx][j] = 1;
            } else {
                Identity[idx][j] = 0;
            }

            
            Clone[idx][j] = Matrix[idx][j];
        }
    }

  
    for (idx = 0; idx < dim; idx += 1) {
      
        e = Clone[idx][idx];

      
        if (e == 0) {
            //look through every row below the i'th row
            for (ii = idx + 1; ii < dim; ii += 1) {
                //if the ii'th row has a non-0 in the i'th col
                if (Clone[ii][idx] != 0) {
                    //it would make the diagonal have a non-0 so swap it
                    for (j = 0; j < dim; j++) {
                        e = Clone[idx][j]; //temp store i'th row
                        Clone[idx][j] = Clone[ii][j]; //replace i'th row by ii'th
                        Clone[ii][j] = e; //repace ii'th by temp
                        e = Identity[idx][j]; //temp store i'th row
                        Identity[idx][j] = Identity[ii][j]; //replace i'th row by ii'th
                        Identity[ii][j] = e; //repace ii'th by temp
                    }
                    //don't bother checking other rows since we've swapped
                    break;
                }
            }
            //get the new diagonal
            e = Clone[idx][idx];
            //if it's still 0, not invertable (error)
            if (e == 0) {
                return;
            }
        }

        // Scale this row down by e (so we have a 1 on the diagonal)
        for (j = 0; j < dim; j++) {
            Clone[idx][j] = Clone[idx][j] / e; //apply to original matrix
            Identity[idx][j] = Identity[idx][j] / e; //apply to identity
        }

        
        for (ii = 0; ii < dim; ii++) {
            // Only apply to other rows (we want a 1 on the diagonal)
            if (ii == idx) {
                continue;
            }

            // We want to change this element to 0
            e = Clone[ii][idx];

           
            for (j = 0; j < dim; j++) {
                Clone[ii][j] -= e * Clone[idx][j]; //apply to original matrix
                Identity[ii][j] -= e * Identity[idx][j]; //apply to identity
            }
        }
    }
    return Identity;
}
//Main Code Ends
/*
let input = `2 7
0.18 0.89 109.85
1.0 0.26 155.72
0.92 0.11 137.66
0.07 0.37 76.17
0.85 0.16 139.75
0.99 0.41 162.6
0.87 0.47 151.77
4
0.49 0.18
0.57 0.83
0.56 0.64
0.76 0.18`;
processData(input);
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
