import React from 'react'

export default function Form() {
  return (
    <div className="content">
      <div className="form">
        <div>
          <p>
            Форма это способ взаимодействия между пользователем и программой
          </p>
          <p>
            {' '}
            Пользователь вводит свои данные в форму и программа делает
            какие-либо манипуляции с этими данными
          </p>
        </div>
        <div>
          <ul>
            <li>
              Формы:&nbsp;
              <a
                href="https://ru.reactjs.org/docs/forms.html"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://ant.design/components/form/"
                target="_blank"
                rel="noreferrer"
              >
                Ant Design
              </a>
            </li>
            <li>
              {' '}
              Мой пример на&nbsp;
              <a
                href="https://github.com/Arminonly/react-form.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form>
            <fieldset>
              <legend>Personal name</legend>
              First name &nbsp; <input type="text" list='fname'/>
              <datalist id='fname' >
                  <option value='Alex'   />
                  <option value='Tom' />
                  <option value='Sam' />
                  <option value='Dilan' />
              </datalist>
              <br />
              last name &nbsp; <input type="text" list='lname'/>
              <datalist id='lname' >
                  <option value='Smith'/>
                  <option value='Hanks'/>
                  <option value='Jordan'/>
                  <option value='Bob'/>
              </datalist>
              <br />
              date of birth &nbsp; <input type="text" placeholder='date : month : year' />
              <br />
              <br />
            </fieldset>
          </form>
        </div>
        <div>
          <form>
            <label>
              <code>datalist</code>&nbsp;
            </label>
            <input list="browsers" />
            <datalist id="browsers">
              <option value="chrome" />
              <option value="firefox" />
              <option value="internet explorer" />
              <option value="opera" />
              <option value="safari" />
            </datalist>
          </form>
        </div>
      </div>
    </div>
  )
}
