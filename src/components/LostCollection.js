import React from 'react'
import LostCard from './lostCard'
import { Card } from 'semantic-ui-react'

const LostCollection = ({ lost, toggleImage }) => (
  <Card.Group itemsPerRow={6}>
    {lost.map(lost => (
      <LostCard key={lost.id} lost={lost} toggleImage={toggleImage} />
    ))}
  </Card.Group>
)

export default LostCollection


