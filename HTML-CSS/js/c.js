(() => {
  // Goal:1. 全てのページに問題を表示させる
  // Goal:2. 全てのページにナビゲーションをつける
  // Hint: クイズゲームのアプリを開発
  // 1. 問題 a.横4 × 縦4 のみを実装する
  // 2. a.横4 × 縦4 を定数に代入する
  // 3. ナビゲーション項目を配列として定数に代入する
  // 4. ナビゲーションのリストを取得する
  // 5. innerHTML で a タグを代入する
  // 6. a タグの href 属性に配列 navUrl の値を代入する
  // 3. HTML に反映させる

  const question = "c. 横6 × 縦1";
  const nav = ["a", "b", "c", "Sign in"];
  const navUrl = ["./index.html", "./b.html", "./c.html", "./sign-in.html"];

  const $doc = document;
  $doc.getElementById("js-question").textContent = question;

  // console.log(
  //   $doc.getElementById('js-question').textContent = question
  // ); // a. 横4 × 縦4

  $doc.getElementsByTagName("li")[0].innerHTML =
    '<a href="' + navUrl[0] + '">' + nav[0] + "</a>";

  $doc.getElementsByTagName("li")[1].innerHTML =
    '<a href="' + navUrl[1] + '">' + nav[1] + "</a>";

  $doc.getElementsByTagName("li")[2].innerHTML =
    '<a href="' + navUrl[2] + ' ">' + nav[2] + "</a>";

  $doc.getElementsByTagName("li")[3].innerHTML =
    '<a href="' + navUrl[3] + '">' + nav[3] + "</a>";

  // HTML/CSS C.横6 × 縦1
  // 1. container を取得する
  // 2. box を生成する
  // 3. 2 を 6 回繰り返す
  // 4. box 内の文字を取得する 一つずつ増やす
  // 5. HTML に反映させる

  const $container = $doc.getElementById("js-container");
  // console.log($container);

  let num = 0;
  for (let i = 0; i < 6; i++) {
    num = i + 1;
    // $box.innerHTML = $num;
    let createBox = $doc.createElement("div");
    createBox.textContent = num;
    $container.appendChild(createBox);
    createBox.classList.add("box");
  }

  const createNav = $doc.createElement("nav");
})();
