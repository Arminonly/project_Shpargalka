import React from 'react'

export default function StatePage() {
  return (
    <div className="content">
      <div className="state">
        <h4>Для чего стейт?</h4>
        <p>
          Хранить какое-то изменяющееся значение. С которым, например будет
          взаимодействовать пользователь.
        </p>
        <div>
          <p>Документация</p>
          <div>
            <ul>
              <li>
                <a
                  href="https://ru.reactjs.org/docs/state-and-lifecycle.html"
                  target="_blank" rel="noreferrer"
                >
                  Состояние и жизненный цикл – React
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=yCZxQXMemqo"
                  target="_blank" rel="noreferrer"
                >
                  видео от Паши
                </a>
              </li>
            </ul>
          </div>
          <h6> Как это работает в функциональных компонентах</h6>
          <div>
            <ul>
              <li>
                {' '}
                Использование&nbsp;
                <a
                  href="https://ru.reactjs.org/docs/hooks-state.html"
                  target="_blank"  rel="noreferrer"
                >
                  хука состояния&nbsp;
                </a>
                React
              </li>
              <li>
                Хук состояния&nbsp;
                <a
                  href="https://learn-reactjs.ru/core/hooks/state-hook"
                  target="_blank" rel="noreferrer"
                >
                  React. useState.
                </a>
              </li>
              <li>
                Введение в React Hooks: useState. Kанал &nbsp;
                <a
                  href="https://www.youtube.com/watch?v=hQRPsKzpo34"
                  target="_blank" rel="noreferrer"
                >
                  Владилена
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>мой пример на GitHub</p>
            <div>
              <ul>
                <li>
                  State на &nbsp;
                  <a
                    href="https://github.com/Arminonly/react-state.git"
                    target="_blank" rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
