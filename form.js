// отправка формы в телеграм
for (const key in document.forms) {
  if (key === 'length') {
    return
  }
  document.forms[key].user_phone.addEventListener('keydown', function (e) {
    const code = e.keyCode
    // Разрешаем: backspace, delete, tab и escape
    if (code === 46 || code === 8 || code === 9 || e.code === 27 ||
      // Разрешаем: Ctrl+A
      (code === 65 && e.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (code >= 35 && code <= 39)) {
      // Ничего не делаем
      return
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if ((code < 48 || code > 57) && (code < 96 || code > 105)) {
        e.preventDefault()
      }
    }
  })
    // добавление события на формы
  document.forms[key].addEventListener('submit', function (event) {
    event.preventDefault()
      // передача данных с формы
    let user_name = document.forms[key].user_name.value
    let user_phone = document.forms[key].user_phone.value
    let select = document.forms[key].select.value

    const request = new XMLHttpRequest();
    const url = "telegram.php";
    const params =
      "user_name=" + encodeURIComponent(user_name) +
      "&user_phone=" + encodeURIComponent(user_phone) +
      "&select=" + encodeURIComponent(select)
    // настройки для передачи данных
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // условия если форма отправлена
      }
    });
    // отправка формы
    request.send(params);
  })
}
