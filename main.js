window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 650) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}
let count = 1
function clickToChangeTheme() {
  if (count === 1) {
    count = 2
    document.querySelector("#body").classList.remove("green")
    document.querySelector("#body").classList.add("blue")
  } else if (count === 2) {
    document.querySelector("#body").classList.remove("blue")

    count = 3
  } else if ((count = 3)) {
    document.querySelector("#body").classList.add("green")
    count = 1
  }
}

function createGame(player1, hour, player2) {
  return `
   <li >
              <img src="./assets/${player1}.svg" alt="Bandeira do(a) ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/${player2}.svg" alt="Bandeira do(a)${player2}" />
            </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3

  if (delay > 3.7) {
    return ` <div class="card" >
          <div>
            <h2 id="date">${date} <span>${day}</span></h2>
          </div>

          <ul>
           
            ${games}
            
          </ul>
        </div>`
  } else {
    return ` <div class="card" style= "animation-delay: ${delay}s">
          <div>
            <h2 id="date">${date} <span>${day}</span></h2>
          </div>

          <ul>
           
            ${games}
            
          </ul>
        </div>`
  }
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOMINGO", createGame("ecuador", "13:00", "qatar")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("eua", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "TERÇA",
    createGame("argentina", "07:00", "saudiArabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "QUARTA",
    createGame("marocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costaRica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "QUINTA",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southKorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "SEXTA",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "eua")
  ) +
  createCard(
    "26/11",
    "SABADO",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudiArabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "DOMINGO",
    createGame("japan", "07:00", "costaRica") +
      createGame("belgium", "10:00", "marocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southKorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "TERÇA",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "eua") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "QUARTA",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudiArabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "QUINTA",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "marocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costaRica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("southKorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  )
