

// const acdc = ["Angus", "Malcolm", "Stevie", "Phil", "Cliff"]

// acdc.forEach((member) => {
//     console.log(`Member : ${member}`)
// })


// const abbaUl = document.querySelector(".abba-ul")

// let items = ""

// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha'];

// abba.forEach((member) => {
//   items += `<li class="abba-li">${member}</li>`
// })

// abbaUl.insertAdjacentHTML("beforeend", items)


// const abbaLis = document.querySelectorAll(".abba-li")

// abbaLis.forEach((item) => {
//     item.innerText += ' Yeah!!!'
// })

// abbaUl.style.listStyleType = "upper-roman";

const abbaLi = document.querySelectorAll("li")


abbaLi.forEach((member) => {
  member.innerText +=  `: ${member.dataset.instrument}, Yeah!!!`
})

const image = document.querySelector("img")

image.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("rounded-circle")
})

const images = document.querySelectorAll(".fan")

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("rounded-circle")
  })
})

const roundedLink = document.getElementById("rounded-btn")



roundedLink.addEventListener("click", (event) => {
  event.preventDefault()
  images.forEach((image) => {
    image.classList.toggle("rounded-circle")
  })
})


const btnChecked = document.querySelector(".btn-light")
const boxes = document.querySelectorAll(".form-check-input")

btnChecked.addEventListener("click", (event) => {
  event.preventDefault()
  boxes.forEach((box) => {
    box.checked = !box.checked
  })
  let text = event.currentTarget.innerText
  console.log(text)
  if (text === "Select all") {
    console.log("coucou")
    event.currentTarget.innerText = "Unselect all"
  } else {
    event.currentTarget.innerText = "Select all"
  }
})
