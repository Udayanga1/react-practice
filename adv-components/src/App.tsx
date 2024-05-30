import Button from "./components/Button"
import Container from "./components/Container"

function App() {
  return (
    <main>
      <Container as={Button} >Click me</Container>
      {/* <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p> */}
    </main>
  )
}

export default App
