import React from 'react'
import PropTypes from 'prop-types'
import StyledComponent from './index.style'

class Component extends React.Component {
  render () {
    return (
      <StyledComponent {...this.props}>
        {this.props.children}
      </StyledComponent>
    )
  }
}

Component.PropTypes = {
  
}

Component.defaultProps = {

}

export default Component