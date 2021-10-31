import React from 'react'

export default function Api() {
  return (
    <div className="content">
      <div className="api">
        <div>
          <div>
            Как отправить запрос (AJAX и обращение к API – React) - прочитать{' '}
            <a
              href="https://ru.reactjs.org/docs/faq-ajax.html"
              target="_blank"
              rel="noreferrer"
            >
              здесь
            </a>
          </div>
          <div>
            {' '}
            метод{' '}
            <a
              href="https://learn.javascript.ru/fetch"
              target="_blank"
              rel="noreferrer"
            >
              Fetch
            </a>
          </div>
          <p>
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              rel="noreferrer"
            >
              npm axios
            </a>{' '}
          </p>
          <p>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/HTTP/Methods"
              target="_blank"
              rel="noreferrer"
            >
              Методы HTTP запроса
            </a>
          </p>
          <div>
            Видео
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=NEYrSUM4Umw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get запрос
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=x9UEDRbLhJE"
                  target="_blank"
                  rel="noreferrer"
                >
                  POST запрос
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
