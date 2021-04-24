import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    <Card className="my-3 p-3 rounded">
      <Card.Body>
          <Card.Title as="div">
            <strong>Elladie's Words</strong>
          </Card.Title>

          <Card.Text as="div">
            <div className="my-3">
              {word}
            </div>
          </Card.Text>

          <Card.Text as="h4">
            <Button onClick={getRandomWord(wordList)}>
              <h4>Next Word</h4>
            </Button>
          </Card.Text>

      </Card.Body>
    </Card>

  );
}

export default App;
