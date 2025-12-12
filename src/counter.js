export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `点击次数: ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)
    
    // 添加点击动画效果
    element.style.transform = 'scale(0.95)'
    setTimeout(() => {
      element.style.transform = 'scale(1)'
    }, 100)
  })
  setCounter(0)
}
