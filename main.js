console.log('loaded content script to webpage')

document.addEventListener('keydown', (e) => {
  // console.log(`key pressed: ${e.key}`)

  if (e.key === 'Control') {
    // console.log('control key pressed')

    const selection = window.getSelection().toString().trim()
    if (selection && !selection.includes(' ')) {
      console.log(selection)
    }
  }
})