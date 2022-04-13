const smallCups = document.querySelectorAll('.small-cup')
const presentage = document.querySelector('.presentage')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => heightCups(idx))
})

function heightCups(selectedCupIndex) {
  if (!smallCups[selectedCupIndex].classList.contains('full')) {
    smallCups.forEach((cup, idx) => {
      if (idx <= selectedCupIndex) {
        cup.classList.add('full')
      }
    })
  } else {
    for (let i = selectedCupIndex; i >= 0; i--) {
      smallCups[i].classList.remove('full')
    }
  }
  updateBigCup()
}

const singleCupPresentage = 100 / smallCups.length
console.log(singleCupPresentage)
function updateBigCup() {

  const fullCups = document.querySelectorAll('.small-cup.full').length
  const totalCups = smallCups.length
  if (fullCups === 0) {
    presentage.style.visibility = 'hidden'
    presentage.style.height = 0
  } else {
    presentage.style.visibility = 'visible'
    presentage.style.height = `${fullCups * singleCupPresentage}%`
    presentage.innerText = `${fullCups * singleCupPresentage}%`
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}

