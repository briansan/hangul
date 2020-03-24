export default function GenerateKorean(level) {
  var rand = (num, omit) => {
    if (omit === undefined || omit.length === 0) { omit = [-1] }
    for (
      var val = omit[0];
      omit.includes(val);
      val = Math.floor(Math.random() * num)
    );
    return val
  }

  // 11184 hangul code pts
  var ch = ""
  var omitCon = [];
  var omitVow = []; 
  if (level <= 3) {
    omitVow.push(9, 10, 11, 14, 15, 16, 19)
  }
  if (level <= 2) {
    omitVow.push(1, 3, 5, 7)
  }
  if (level === 1) {
    omitCon.push(1, 4, 8, 10, 13)
  }

  var base = 0xac00
  base += rand(19, omitCon) * 588 // initial consonant
  base += rand(21, omitVow) * 28  // medial vowel
  if (level >= 5) {
    base += rand(27, [0, 2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 18, 20]) // final consonant
  }
  return String.fromCharCode(base)
}
