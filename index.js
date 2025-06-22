function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
  if (text) element.textContent = text
  return element
}


function addElementToDOM(targetId, content) {
  const target = document.getElementById(targetId)
  if (target) {
    const newElement = createElement('div', {}, content)
    target.appendChild(newElement)
  }
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

function simulateClick(targetId, content) {
  addElementToDOM(targetId, content)
}

function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId)
  const input = form.querySelector('input')
  const value = input.value.trim()
  const errorMessage = document.getElementById('error-message')

  if (value === '') {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')
  addElementToDOM(targetId, value)
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
