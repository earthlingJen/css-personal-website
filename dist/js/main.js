console.log('Hello world!')

const headline = document.querySelector('.headline')
const content = document.querySelector('.content')

const toggleContent = event => {
  console.log('headline clicked')
  content.classList.toggle('content-small')
}

headline.addEventListener('click', toggleContent)
