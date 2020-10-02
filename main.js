"use strict";

//forEach

{
  const scores = [1, 2, 3, 4, 5];

  // scores.forEach((score) => {
  //   console.log(`Score:${score}`);
  // });
  scores.forEach((score, index) => {
    console.log(`Score${index}:${score}`);
  });
}

//map()

{
  const prices = [1, 2, 3, 4, 5];

  const updatePrices = prices.map((price) => {
    return price + 20;
  });
  console.log(updatePrices);
  //21,22,23,24,25
}

//filter
console.log("filter");

{
  const numbers = [1, 2, 3, 4, 5];

  const evenNumbers = numbers.filter((number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(evenNumbers);
  //2,4
}

//オブジェクト
console.log("オブジェクト");

{
  const point = {
    x: 100,
    y: 180,
  };
  point.x = 120; //xを120にchange
  console.log(point);
  console.log(point.x); //120

  point.z = 200; //新しいkeyをつくる
  delete point.y; //yを消す
  console.log(point); //xとz
}

//オブジェクトとスプレッド構文
console.log("オブジェクトとスプレッド構文");

{
  const otherProps = {
    r: 4,
    color: "red",
  };

  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  console.log(point);
  //x:100, y:180, r:4, color:red

  //分割構文
  const { x, r, ...others } = point;
  console.log(x);
  console.log(r);
  console.log(others);
}

//object.key()
console.log("object.key()をつかう");

{
  const point = {
    x: 100,
    y: 180,
  };

  const keys = Object.keys(point);
  keys.forEach((key) => {
    console.log(`Key: ${key} Value: ${point[key]}`);
  });
}

{
  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 50 },
    { x: 40, y: 40 },
  ];
  console.log(points[1].y);
}
//変数を代入してみよう
console.log("変数を代入してみよう");
{
  let x = 1;
  let y = x;
  x = 5;
  console.log(x); //5
  console.log(y); //1
}
{
  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x); //[5,2]
  console.log(y); //[5,2]
}

{
  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x); //[5,2]
  console.log(y); //[5,2]
}

//文字列を操作してみよう
console.log("文字列を操作してみよう");
{
  const str = "hello";

  console.log(str.length);

  // str.substring(開始位置, 終了位置);
  //helloの2番目から4番目をとってくる
  console.log(str.substring(2, 4));
  console.log(str[1]);
}

//join(), split()を使う
console.log("join(), split()を使う");

//配列の要素を文字列として結合するための命令
{
  const d = [2019, 11, 14];

  // console.log(d.join("/"));
  const t = "17:08:24";
  console.log(t);
  // console.log(t.split(":"));
  // :をとる
  console.log(t.split(":"));

  const [hour, minute, second] = t.split(":");
  console.log(hour);
  console.log(minute);
  console.log(second);
}

//数値を操作してみよう
console.log("数値を操作してみよう");

{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach((score) => {
    sum += score;
  });
  const avg = sum / scores.length;
  console.log(sum);
  console.log(avg);

  //小数点きりすてる
  console.log(Math.floor(avg));
  //小数点きりあげる
  console.log(Math.ceil(avg));
  //四捨五入する
  console.log(Math.round(avg));
}

//ランダム
{
  console.log(Math.random());

  //0から6の中でランダムな整数値
  console.log(Math.floor(Math.random() * 6) + 1);
}

//現在日時を扱う
console.log("現在日時を扱う");
{
  const d = new Date();
  console.log(`${d.getMonth() + 1} 月 ${d.getDate()}日`);
}

//特定の日時を扱う
console.log("特定の日時を扱う");
{
  const d = new Date(2019, 10);
  d.setHours(10, 20, 30); //10時20分30秒
  // d.setDate(31); //日付をタス
  d.setDate(d.getDate() + 3); //今日から3日後
  console.log(d);
}

//alert(), confirm()をつかう
// console.log("alert(), confirm()をつかう");
// {
//   // alert("hello");
//   const answer = confirm("削除しますか");
//   if (answer) {
//     console.log("削除しました");
//   } else {
//     console.log("キャンセルしました");
//   }
// }

//setInterval()
// console.log("setInterval()");
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId); //止める
//     }
//   }
//   const intervalId = setInterval(showTime, 1000);
// }

//setTimeout()
console.log("setTimeout()");

// {
//   function showTime() {
//     console.log(new Date());
//   }
//   setTimeout(showTime, 1000);
// }
//システムに負荷をかけずに繰り返し処理を実行したい場合はsetTimeout()がよく使われる

//例外処理
console.log("例外処理を使ってみよう");
//大文字にする（文字列しかつかえない）
{
  const name = 5;
  // const name = "taguchi";

  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }
  console.log("finish");
}

//オブジェクトが複数ある場合を考える

{
  const posts = [
    {
      text: "javascriptの勉強中///",
      likeCount: 0,
    },
    {
      text: "プログラミング楽しい！///",
      likeCount: 0,
    },
  ];
  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }
  show(posts[0]);
}
