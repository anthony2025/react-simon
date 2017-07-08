import StateOverlay from './StateOverlay'
import {connect} from 'react-redux'
import {getGameTree} from 'store/selectors'

const mapStateToProps = state => {
  return {
    gameTree: JSON.stringify(getGameTree(state), null, 2)
  }
}

export default connect(mapStateToProps)(StateOverlay)
