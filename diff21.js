Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

Examples

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0

function diff21(n){
    let diff = 21-n
    let diffover = n-21
    if(n > 21){
    return diffover + diffover
    }return diff
  }console.log(diff21(19));