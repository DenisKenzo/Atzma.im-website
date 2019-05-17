import Hero from '../hero/hero.jsx'
import Why from '../why/why.jsx'
import Showcases from '../showcases/showcases.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Feedback from '../feedback/feedback.jsx'
import Footer from '../footer/footer.jsx'

import './home.styl'

class Home extends React.Component {
  state = {
    modulesObj: config.modules
  }
  componentWillMount = () => {
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }

  splitLoadingComponents = moduleName => {
    switch (moduleName) {
    case 'hero':
      return <Hero content={this.state.modulesObj[moduleName]} />
    case 'why':
      return <Why content={this.state.modulesObj[moduleName]} />
    case 'showcases':
      return <Showcases content={this.state.modulesObj[moduleName]} />
    case 'business_types':
      return <BusinessTypes content={this.state.modulesObj[moduleName]} />
    case 'feedback':
      return <Feedback content={this.state.modulesObj[moduleName]} />
    }
  }

  render () {
    return (
      <div id='home'>
        {
          Object.keys(this.state.modulesObj).map(this.splitLoadingComponents)
        }
        <Footer />
      </div>
    )
  }
}
export default Home