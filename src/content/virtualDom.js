import React from 'react'

export default function VirtualDOM() {
  return (
    <div className="content">
      <div className="virtualDom">
        <div>
          Virtual DOM — это техника и набор библиотек / алгоритмов, которые
          позволяют нам улучшить производительность на клиентской стороне,
          избегая прямой работы с DOM путем работы с легким JavaScript-объектом,
          имитирующем DOM-дерево.
          <br />
          Используя библиотеки наподобие React, мы можем повысить
          производительность приложений и сделать это очень просто.
        </div>
        <h6>Что такое Virtual DOM?</h6>
        <div>
          <ul>
            <li>
              <a
                href="https://habr.com/ru/post/256965/"
                target="_blank"
                rel="noreferrer"
              >
                Статья
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=gb-93KcTRFo"
                target="_blank"
                rel="noreferrer"
              >
                Видео
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
