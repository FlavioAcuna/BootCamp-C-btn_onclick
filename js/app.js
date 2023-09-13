//Button

function changeBtn() {
  document.getElementById("login_btn").innerHTML = "Logout";
}

function removeBtn(elemento) {
  elemento.remove();
}
function likeBtn() {
  console.log(document.getElementsByClassName("btn_like"));

  alert("Ninja was liked");
}
