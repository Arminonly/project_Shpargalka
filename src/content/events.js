import React from 'react'

export default function Events() {
  return (
    <div className="content">
      <div className="events">
        <div>
          {' '}
          <p className="first"> В 98% случаях используются:</p>
          <ul>
            <li>onClick() - обычно используется в кнопке</li>
            <li>onChange() - обычно используется в элементе формы (input)</li>
          </ul>
        </div>
        <div>
          Документация
          <ul>
            <li>
              <a
                href="https://ru.reactjs.org/docs/handling-events.html"
                target="_blank" rel="noreferrer"
              >
                Обработка событий – React
              </a>
            </li>

            <li>
              {' '}
              Видео&nbsp;
              <a
                href="https://www.youtube.com/watch?v=8txuLUav6tU"
                target="_blank" rel="noreferrer"
              >
                от Паши
              </a>
            </li>
            <li>
              {' '}
              Мой &nbsp;
              <a
                href="https://github.com/Arminonly/react-events/tree/master/src"
                target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Keys</h6>
          <p>
            Для того, чтобы React мог различать одинаковые элементы выведенные
            только через цикл! (важно запомнить что только через цикл)
          </p>
          <ul>
            <li>
              <a
                href="https://ru.reactjs.org/docs/lists-and-keys.html"
                target="_blank" rel="noreferrer"
              >
                Списки и ключи – React
              </a>
            </li>
            <li>
              <a
                href="https://habr.com/ru/company/hh/blog/352150/"
                target="_blank" rel="noreferrer"
              >
                Keys in React
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
