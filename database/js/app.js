(() => {
  // Goal. localStorage に 値があれば、クリックすると入力情報を表示する なければ localStorage に保存する
  // 1: クリックすると localStorage に入力を保存する

  const $doc = document;
  const $email = $doc.getElementById('email');
  const $pass = $doc.getElementById('password');
  const $btn = $doc.getElementById('save-btn');
  // console.log($btn);

  $btn.addEventListener("click", () => {
    const inputEmail = $email.value;
    const inputPass = $pass.value;
    // console.log(inputEmail);
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("pass", inputPass);

    $email.innerHTML = inputEmail;
    $pass.innerHTML = inputPass;
  })




})();
