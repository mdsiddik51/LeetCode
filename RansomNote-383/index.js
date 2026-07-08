//383. Ransom Note
const ransomNote = "aa"
const magazine = "aab"

var canConstruct = function(ransomNote, magazine) {
    const chardata = {};

    for(const char of magazine){
       chardata[char] = (chardata[char] || 0) + 1; 
    }
    for(const char of ransomNote) {
        if(!chardata[char]){
            return false;
        }
        chardata[char]--;
    }
    return true;
};

const result = canConstruct(ransomNote , magazine);
console.log(result);