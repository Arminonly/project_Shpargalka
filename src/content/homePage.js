import React from 'react'

export default function HomePage() {
  return (
    <div className="content">
      <div className="home">
        <h5>
          React- это библиотека!, а не framework от facebook. Нужна, чтобы
          быстро создавать пользовательские интерфейсы. Легко переиспользуется,
          так как взят подход независимых компонент.
        </h5>
        <div>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                Официальный сайт
              </a>
            </li>
            <li>
              <a
                href="https://ru.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Официальный сайт на русском
              </a>
            </li>
            <li>
              <a
                href="https://reactstrap.github.io/"
                target="_blank"
                rel="noreferrer"
              >
               Reactstrap
              </a>
            </li>
            <li>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noreferrer"
              >
               Reactrouter
              </a>
            </li>
            <li>
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noreferrer"
              >
               Redux
              </a>
            </li>
            <li>
              <a
                href="https://reactdatepicker.com/#example-default"
                target="_blank"
                rel="noreferrer"
              >
               Reactdatepicker
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            Владилен Минин:
            <li>
              <a
                href="https://www.youtube.com/watch?v=xJZa2_aldDs&t=1663s"
                target="_blank"
                rel="noreferrer"
              >
                React JS Быстрый Курс 2020
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=V1rhxheJg4A"
                target="_blank"
                rel="noreferrer"
              >
                React JS - Приложение целиком (Контекст, Хуки, Анимации, Деплой)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=9KJxaFHotqI&t=786s"
                target="_blank"
                rel="noreferrer"
              >
                React Hooks - Полный Курс (Про Все Хуки!)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=OvLWWvjoi8s&t=30s"
                target="_blank"
                rel="noreferrer"
              >
                React JS + TypeScript. Введение в Типизацию (+ React Router DOM)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
