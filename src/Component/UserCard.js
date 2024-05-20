import React from 'react'
import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src="https://i.pinimg.com/236x/54/72/d1/5472d1b09d3d724228109d381d617326.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username} </Card.Subtitle>
        <Card.Text> {user.email}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
