const s = "tac";
const t = "mat";

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const values = s.split('').sort().join('');
    const valuet = t.split('').sort().join('');

    if(values === valuet){
        return true
    }
    return false
    
};


const result = isAnagram(s, t);
console.log(result);