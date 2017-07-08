import Pad from './Pad'
import {connect} from 'react-redux'

import {playerPressedPad} from 'store/actionCreators'
import {getObservable} from 'store/selectors'

const mapStateToProps = state => ({
  observable: getObservable(state)
})
const mapDispatchToProps = {
  onClick: playerPressedPad
}

export default connect(mapStateToProps, mapDispatchToProps)(Pad)
