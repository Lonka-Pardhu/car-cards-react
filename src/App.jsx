import Navbar from './components/Navbar'
import Cars from './components/Cars'
import Data from './components/data'
// import ClassCars from './components/classCars'
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
            {/* <ClassCars /> */}
        </div>
    );
}

export default App;
