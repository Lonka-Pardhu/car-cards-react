import Navbar from './components/Navbar'
import Cars from './components/Cars'
import Data from './components/data'
function App() {
    const carsData = Data.map((data) => {
        return (<Cars key={data.id} data={data} />)
    })
    return (
        <div className="main">
            <Navbar />
            <div className="cars-card-root">
                {carsData}
            </div>
        </div>
    );
}

export default App;
