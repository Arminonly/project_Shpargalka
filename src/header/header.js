import React from 'react'
import './header.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from '../content/homePage'
import Components from '../content/components'
import StatePage from '../content/state'
import LifeCycle from '../content/lifeCycle'
import Events from '../content/events'
import Refs from '../content/refs'
import Api from '../content/api'
import VirtualDOM from '../content/virtualDom'
import FragmemtMemo from '../content/fragmentMemo'
import UseEffect from '../content/useEffect'
import Routing from '../content/route'
import Context from '../content/context'
import Form from '../content/form'
import ErrorPage from '../content/errorPage'

export default function Header() {
  return (
    <Router>
      <div className="header">
        <ul className="routeItem">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components">Components & Props</Link>
          </li>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li>
            <Link to="/lifeCycle">LifeCycle</Link>
          </li>
          <li>
            <Link to="/events">Events and keys</Link>
          </li>
          <li>
            <Link to="/refs">Refs</Link>
          </li>
          <li>
            <Link to="/api">Api</Link>
          </li>
          <li>
            <Link to="/virtualDom">VirtualDOM</Link>
          </li>
          <li>
            <Link to="/fragmentMemo">Fragment and Memo</Link>
          </li>
          <li>
            <Link to="/useEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/route">Routing</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/state">
            <StatePage />
          </Route>
          <Route path="/lifeCycle">
            <LifeCycle />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/refs">
            <Refs />
          </Route>
          <Route path="/api">
            <Api />
          </Route>
          <Route path="/virtualDom">
            <VirtualDOM />
          </Route>
          <Route path="/fragmentMemo">
            <FragmemtMemo />
          </Route>
          <Route path="/useEffect">
            <UseEffect />
          </Route>
          <Route path="/route">
            <Routing />
          </Route>
          <Route path="/context">
            <Context />
          </Route>
          <Route path="/form">
            <Form/>
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
