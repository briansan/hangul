export var consonants = [
 ["ㄱ", "g"],
 ["ㄴ", "n"],
 ["ㄷ", "d"],
 ["ㄹ", "r"],
 ["ㅁ", "m"],
 ["ㅂ", "b"],
 ["ㅅ", "s"],
 ["ㅇ", "?"],
 ["ㅈ", "j"],
 ["ㅊ", "ch"],
 ["ㅋ", "k"],
 ["ㅌ", "t"],
 ["ㅍ", "p"],
 ["ㅎ", "h"],
]

export var vowels = [
  [ "ㅏ", "ah" ],
  [ "ㅑ", "yah" ],
  [ "ㅓ", "uh" ],
  [ "ㅕ", "yuh" ],
  [ "ㅗ", "oh" ],
  [ "ㅛ", "yoh" ],
  [ "ㅜ", "oo" ],
  [ "ㅠ", "yoo" ],
  [ "ㅡ", "uh" ],
  [ "ㅣ", "e" ],
]

export function letters() {
  return consonants.map((c, i) => {
    var vow = vowels[i]
    if (vow !== undefined) {
      vow = { vowKoreanSym: vow[0], vowEnglishPro: vow[1] };
    }
    return {
      conKoreanSym: c[0],
      conEnglishPro: c[1],
      ...vow,
    }
  })
}

export function headers() {
	return [
      {
        Header: 'Consonants',
        columns: [
          { Header: 'Korean', accessor: 'conKoreanSym', },
          { Header: 'English', accessor: 'conEnglishPro', },
        ],
      },
      {
        Header: 'Vowels',
        columns: [
          { Header: 'Korean', accessor: 'vowKoreanSym', },
          { Header: 'English', accessor: 'vowEnglishPro', },
        ],
      },
    ]
}
