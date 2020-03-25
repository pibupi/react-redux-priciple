import React from 'react'
import PropTypes from 'prop-types'
const connect = (mapStateToProps, mapDispatchToProps) => {
  return function(Component) {
    class Connect extends React.Component {
      componentDidMount() {
        this.context.store.subscribe(this.handleStoreChange)
      }
      handleStoreChange() {
        this.forceUpdate()
      }
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        )
      }
    }
    Connect.contextType = {
      store: PropTypes.object
    }
    return Connect
  }
}
export { connect }
