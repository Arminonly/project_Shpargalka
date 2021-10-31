import React from 'react'

export default function UseEffect() {
  return (
    <div className="content">
      <div className="useeffect">
        <p>useEffect используется в функциональных компонентах и очень часто</p>
      </div>
      <div>
        <ul>
          <li>
            {' '}
            Использование  &nbsp;
            <a
              href="https://ru.reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noreferrer"
            >
               хука эффекта
               &nbsp;</a>React
          </li>
          <li>useEffect &nbsp;
              <a href='https://www.youtube.com/watch?v=slaaDOt0ZvM'target="_blank"
              rel="noreferrer">
               (классовый подход и функциональный)
              </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
