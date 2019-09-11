import React from 'react'

import './PopoverItem.css'

export default class PopoverItem extends React.Component {
  render() {
    const { onClick, content } = this.props

    return (
      <button className="PopoverItem" onClick={onClick}>
        {content}
      </button>
    )
  }
}
