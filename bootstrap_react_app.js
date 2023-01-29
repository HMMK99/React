import React from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'

const App = () => <h1>{`Time: ${Date.now()}`}</h1>

render(<App/>, document.getElementById('app'))