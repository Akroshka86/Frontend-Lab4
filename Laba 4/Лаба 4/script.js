function submitForm() {

    var keyInput = document.getElementById('fullName').value;
    var passwordInput = document.getElementById('password').value;
    var maleRadio = document.getElementById('male');
    var femaleRadio = document.getElementById('female');

    var preference1 = document.getElementById('preference1');
    var preference2 = document.getElementById('preference2');
    var preference3 = document.getElementById('preference3');
    var preference4 = document.getElementById('preference4');




    var nameCheck = /^[A-Za-zА-Яа-яЁё\s]+$/;
    var emptyCheck = /^(?!\s*$).+/;

    if (!nameCheck.test(keyInput)) {
        document.getElementById('fullNameError').textContent = "Поле 'Имя' должно содержать только буквы.";
        return;
    } else {
        document.getElementById('fullNameError').textContent = "";
    }

    if (!emptyCheck.test(passwordInput)) {
        document.getElementById('passwordError').textContent = "Поле 'Пароль' должно содержать символы.";
        return;
    } else {
        document.getElementById('passwordError').textContent = "";
    }


    if (maleRadio.checked || femaleRadio.checked) {
        document.getElementById('genderError').textContent = "";
    } else {        
        document.getElementById('genderError').textContent = "Выберите пол.";
        return;
    }

    if (preference1.checked || preference2.checked || preference3.checked || preference4.checked) {
        document.getElementById('preferenceError').textContent = "";
    } else {        
        document.getElementById('preferenceError').textContent = "Выберите хотя бы один вариант.";
        return;
    }

    // Создаем новый объект FormData, используя данные из формы с идентификатором "myForm"
    var formData = new FormData(document.getElementById("myForm"));
    var output = "<h2>Введенные данные:</h2>";

    // Добавляем HTML-код для каждой пары ключ-значение к переменной output
    formData.forEach(function(value, key)
    {
        output += "<p><strong>" + key + ":</strong> " + value + "</p>";
    });
    document.getElementById("output").innerHTML = output;
}

function resetForm() {
    document.getElementById("myForm").reset();
    document.getElementById("output").innerHTML = "";
}