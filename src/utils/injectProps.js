import React from 'react'

export default mapToProps => Comp => props =>
  <Comp {...mapToProps} {...props} />
