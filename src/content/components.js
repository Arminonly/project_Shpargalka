import React from 'react'

export default function Components() {
  return (
    <div className="content">
      <div className="component">
        <h3> Компоненты и пропсы</h3>
        <h5>
          Компоненты позволяют разбить интерфейс на независимые части, про
          которые легко думать в отдельности. Их можно складывать вместе и
          использовать несколько раз.
        </h5>
        <h6>
          Компоненты могут ссылаться на другие компоненты в возвращённом ими
          дереве. Это позволяет нам использовать одну и ту же абстракцию —
          компоненты — на любом уровне нашего приложения. Неважно, пишем ли мы
          кнопку, форму или целый экран: все они, как правило, представляют
          собой компоненты в React-приложениях.
        </h6>

        <h5>
          чтобы узнать больше:
          <ul>
            <li>
              {' '}
              можно прочитать&nbsp;
              <a
                href="https://ru.reactjs.org/docs/components-and-props.html"
                target="_blank" rel="noreferrer"
              >
                здесь
              </a>
            </li>
            <li>
              {' '}
              или&nbsp;
              <a
                href="https://www.youtube.com/watch?v=wDwNS1VJwoQ"
                target="_blank" rel="noreferrer"
              >
                посмотреть&nbsp;
              </a>
              видео
            </li>
            <li>
              а также еще одно&nbsp;
              <a
                href="https://www.youtube.com/watch?v=A3VGXwJg16k"
                target="_blank" rel="noreferrer"
              >
                видео&nbsp;
              </a>
              о пропсах
            </li>
          </ul>
        </h5>
      </div>
    </div>
  )
}
