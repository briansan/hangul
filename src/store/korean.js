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

  var initial = rand(19, omitCon)
  var vowel = rand(21, omitVow)
  ch = String.fromCharCode(0xac00 + (initial*588+vowel*28))
	return ch
}
