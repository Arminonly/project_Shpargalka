import React from 'react'

export default function Refs() {
  return (
    <div className="content">
      <div className="refs">
        <h6>Рефсы нужны чтобы иметь доступ к элементам!</h6>

        <div>
          <p>Документация</p>
          <p>
            В обычном потоке данных React родительские компоненты могут
            взаимодействовать с дочерними только через пропсы. Чтобы
            модифицировать потомка, вы должны заново отрендерить его с новыми
            пропсами. Тем не менее, могут возникать ситуации, когда вам
            требуется императивно изменить дочерний элемент, обойдя обычный
            поток данных. Подлежащий изменениям дочерний элемент может быть как
            React-компонентом, так и DOM-элементом. React предоставляет лазейку
            для обоих случаев.
          </p>
          <p>Ситуации, в которых использование рефов является оправданным:</p>
          <pre>
            <ol>
              <li>
                Управление фокусом, выделение текста или воспроизведение медиа.
              </li>
              <li>Императивный вызов анимаций.</li>
              <li>Интеграция со сторонними DOM-библиотеками.</li>
            </ol>
          </pre>

          <span>
            <a
              href="https://ru.reactjs.org/docs/refs-and-the-dom.html"
              target="_blank" rel="noreferrer"
            >
              Рефы и DOM – React
            </a>
          </span>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=-HjuRS7VeHg"
                  target="_blank" rel="noreferrer"
                >
                  Видео
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=8Yy6MDsF-Tg"
                  target="_blank" rel="noreferrer"
                >
                  Видео с хуками
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
