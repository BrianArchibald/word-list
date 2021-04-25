import 'bootstrap/dist/css/bootstrap.min.css';
import  { Card, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap'

function App() {

  function getRandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

const wordList = ['I', 'see', 'can', 'go', 'a', 'like', 'me', 'the', 'to', 'is']
const word = getRandomWord(wordList);

  // const completeWordList = [
  //   ['I', 'see', 'can', 'go', 'a', 'like', 'me', 'the', 'to', 'is'],
  //   ['am', 'at', 'you', 'he', 'it', 'in', 'my', 'on', 'we', 'up'],
  //   ['she', 'be', 'and', 'red', 'an', 'no', 'by', 'here', 'will', 'look'],
  //   ['was', 'day', 'play', 'all', 'got', 'not', 'come', 'so', 'said', 'do']
  // ]

  return (
    <Container className="main-container">
      <Card className="text-center">
      <Card.Header>Elladie's Word List</Card.Header>
      <Card.Body>
        <Card.Title>{word}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Next</Button>
        <br></br>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="secondary">Right</Button>
        <br/>
        <br/>
        Score : 1
        <br/>
        <br/>
        <Button variant="secondary">Wrong</Button>
      </Card.Footer>
    </Card>
    </Container>

  );
}

export default App;
