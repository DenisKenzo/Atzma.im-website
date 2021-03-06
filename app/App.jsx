import Home from './components/home/home.jsx'
import ContactUs from './components/contact-us/index.jsx'
import ErrorPage from './components/error_page'
import qs from 'qs'
import './main.styl'

const { Switch, Route } = ReactRouterDOM
class App extends React.Component {
  componentDidMount () {
    const obj = qs.parse(location.search.slice(1))
    if (obj.page === 'error') {
      window.location = config.baseUrl + '/error'
    }
  }

  render () {
    return (
      <Switch>
        <Route exact path={config.baseUrl + '/'} component={Home} />
        <Route exact path={config.urls.contact_us} component={ContactUs} />
        <Route exact path={config.baseUrl + '/error'} component={ErrorPage} />
      </Switch>
    )
  }
}
export default App
