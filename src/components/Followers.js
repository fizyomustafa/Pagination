import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'

const Followers = () => {

  const [followersList, setFollowersList] = useState([])
  const [loading, setLoading] = useState(true)

  const getFollowers = async() =>{
      const {data} = await axios.get("https://api.github.com/users/fizyomustafa/followers?per_page=100")
      setFollowersList(data)
      console.log(data)
  }


  useEffect(() =>{
    getFollowers()
  },[])

  return (
    <div>
    <Container>
        <Row xs={1} md={3} lg={4} className="g-4 mt-5">
        {followersList.map((follower, index) => (
        <Col key={index}>
       <Card>
         <Card.Img variant="top" src={follower.avatar_url} />
        <Card.Body>
          
          <Card.Text>
            {follower.login}
          </Card.Text>
          <Button href={follower.html_url}variant="primary">VIEW PROFILE</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>
    </div>
  )
}
export default Followers