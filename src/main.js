import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>🚀 Vite MVP Project</h1>
  <div class="card">
    <button id="counter" type="button">点击次数: 0</button>
  </div>
  <p class="info">
    编辑 <code>src/main.js</code> 并保存以测试热更新。
  </p>
  <div class="features">
    <h2>✨ 功能特点</h2>
    <ul>
      <li>⚡️ Vite 快速构建</li>
      <li>🔥 热模块替换 (HMR)</li>
      <li>🚀 GitHub Actions 自动部署</li>
      <li>📦 GitHub Pages 托管</li>
    </ul>
  </div>
`

setupCounter(document.querySelector('#counter'))

// 添加一些交互效果
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1')
  title.addEventListener('click', () => {
    title.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`
  })
})
