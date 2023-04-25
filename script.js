const btns = document.querySelectorAll('.btn')
const questions = document.querySelectorAll('.question-text')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-answer')
  })
})

questions.forEach(function (question) {
  question.addEventListener('click', function (e) {
    const questionText = e.currentTarget.parentElement.parentElement
    questionText.classList.toggle('show-answer')
  })
})
