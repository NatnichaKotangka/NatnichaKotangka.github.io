function display() {
    var inputName2 = document.getElementById("name2");
    var inputPassword2 = document.getElementById("pass2");

    inputName2.innerHTML = localStorage.getItem("sName");
    inputPassword2.innerHTML = localStorage.getItem("sPass");
}
