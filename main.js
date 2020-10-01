"use strict";
//スプレット構文
const addScores = [1, 2, 3];
const scores = [1, 2, 3, 4, 5, ...addScores];

console.log(scores);

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(...addScores);
//sum(1,2,3)と同じ意味になる。

//分割代入

{
  const scores = [1, 2, 3, 4];
  const [a, b, c, d] = scores;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

{
  const scores = [1, 2, 3, 4];
  const [a, b, ...othres] = scores;
  console.log(a);
  console.log(b);
  console.log(othres);
}

//値の交換
{
  let x = 1;
  let y = 2;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}
