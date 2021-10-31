import React from 'react'

export default function LifeCycle() {
  return (
    <div className="content">
      <div className="lifecycle">
        lifeCycle
        <h4>
          {' '}
          такие методы *жизненного цикла* как constructor, render,
          componentDidMount - используются очень часто.
        </h4>
        <p>Вкратце:</p>
        <div>
          <ol>
            <li>
              <b>constructor(props):</b>&nbsp; конструктор, в котором происходит
              начальная инициализация компонента
            </li>
            <li>
              <b>componentDidMount():</b>&nbsp; вызывается после рендеринга
              компонента. Здесь можно выполнять запросы к удаленным ресурсам
            </li>
            <li>
              <b>componentWillUnmount():</b>&nbsp; вызывается перед удалением
              компонента из DOM
            </li>
            <li>
              <b>shouldComponentUpdate(nextProps, nextState):</b>&nbsp;
              вызывается каждый раз при обновлении объекта props или state. В
              качестве параметра передаются новый объект props и state. Эта
              функция должна возвращать true (надо делать обновление) или false
              (игнорировать обновление). По умолчанию возвращается true. Но если
              функция будет возвращать false, то тем самым мы отключим
              обновление компонента, а последующие функции не будут срабатывать.
            </li>
            <li>
              <b>render():</b>&nbsp; рендеринг компонента (если
              shouldComponentUpdate возвращает true)
            </li>
            <li>
              <b>componentDidUpdate(prevProps, prevState) :</b>&nbsp; вызывается
              сразу после обновления компонента (если shouldComponentUpdate
              возвращает true). В качестве параметров передаются старые значения
              объектов props и state.
            </li>
          </ol>
        </div>
        <div>
          <h6>Полезные ссылки</h6>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.w3schools.com/react/react_lifecycle.asp"
                  target="_blank" rel="noreferrer"
                >
                  www.w3schools.com
                </a>
              </li>
              <li>
                Понимание жизненного цикла React-компонента-&nbsp;
                <a href="https://habr.com/ru/post/358090/" target="_blank" rel="noreferrer">
                  cтатья на русском
                </a>
              </li>
              <li>
                {' '}
                Состояние и жизненный цикл – React&nbsp;
                <a
                  href="https://ru.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class"
                  target="_blank" rel="noreferrer"
                >
                  документация
                </a>
              </li>
              <li>
                lifecycle (constructor, render, componentDidMount)&nbsp;
                <a href="https://www.youtube.com/watch?v=NyhZ5fj_Dvc" target="_blank" rel="noreferrer">видео</a>
                &nbsp; от Паши
              </li>
              <li>
                Мой lifeCycle на&nbsp;
                <a
                  href="https://github.com/Arminonly/react-lifecycle.git"
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
  )
}
