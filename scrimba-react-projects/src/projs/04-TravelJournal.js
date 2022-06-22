import TJCard from "../components/TJCard"
import "./04-TravelJournal.css"
import data from "../data/TJData"

function TravelJournal() {

  const journals = data.map(item => {
    return(
      <TJCard 
        key={item.id}
        {...item}
      
      />
    )
  }
    )


  return (
    <div className="TravelJournal">
        <div className="TJ-nav">
          <img src="" alt=""></img>
          <p>My Travel Journal</p>
        </div>

        {journals}
        
    </div>
  );
}

export default TravelJournal;
