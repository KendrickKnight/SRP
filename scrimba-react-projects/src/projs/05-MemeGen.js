import "./05-MemeGen.css"
import Meme from "../components/Meme.js"

function MemeGen() {

  return (
    <div className="MemeGen-wrap">
        <header>
            <h2>Meme Generator</h2>
            <p>React course - Project 05</p>
        </header>

        <Meme />
        
    </div>
  );
}

export default MemeGen;
