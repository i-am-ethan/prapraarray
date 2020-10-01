"use strict";

const scores = [1, 2, 3, 4, 5];
//最後に追加する
scores.push(6);
//先頭から削除する
//shiftは1つしか削除できないので()内になにも入れる必要はない
scores.shift();

//2,3,4,5,6

//spliceで途中の要素を削除する
//splice(変化が開始する位置,削除数);
scores.splice(1, 2);

//2,5,6
//slice(変化が開始する位置,削除数,追加する要素・・・);
scores.splice(1, 0, 300);
//2,300,5,6

console.log(scores);

