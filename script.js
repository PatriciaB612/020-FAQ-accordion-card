const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-answer')
    // const questionText = e.currentTarget.id
    // console.log(questionText)
  })
})
