import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <div id="players">
          <Player initialName="Player 1" symbol="X" />  
          <Player initialName="Player 2" symbol="O" />  
        </div>

        <GameBoard />
      </div>
    </main>
  )
}

export default App
