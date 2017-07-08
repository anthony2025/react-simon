import Footer from './Footer'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  devEmail: process.env.REACT_APP_DEV_EMAIL
})

export default connect(mapStateToProps)(Footer)
