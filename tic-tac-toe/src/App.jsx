import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <div id="players">
          <Player name="Player 1" symbol="X" />  
          <Player name="Player 2" symbol="O" />  
        </div>

        GAME BOARD
      </div>
    </main>
  )
}

export default App
