let form = document.getElementById("form")
let modal = document.querySelector(".main__modal-sucess") 

function openModalSucess(e) {

  e.preventDefault()

  const formData = new FormData(form);
  const data = {}

  for (const [key, value] of formData) {
    data[key] = value
  }

  if(data["switch"]) {
    data["switch"] = true
  } else {
    data["switch"] = false
  }

  console.log(data)

  modal.classList.add("main__modal-sucess--open")

  setTimeout(() => {
    modal.classList.remove("main__modal-sucess--open")
  }, 3000)
}

form.addEventListener("submit", openModalSucess)