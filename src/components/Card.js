// import React, { Component } from 'react'
//
// export default class Card extends Component {
//
//   render() {
//     return (
//       <li>
//         {this.props.title}
//       </li>
//     )
//   }
//
// }


import React from 'react'

const Card = props => (
  <li>
    { props.title }
  </li>
)

export default Card
