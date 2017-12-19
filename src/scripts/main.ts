import '../styles/index.scss'
import { appName } from './modules/app'

let app = <HTMLElement> document.getElementById('app')
app.innerHTML = `Hello, ${appName}`
