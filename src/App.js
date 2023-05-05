import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";

function App() {
  return (
    <>
      <Navbar />
        <div className="flex flex-col items-center h-screen">
            <Banner/>
            <div
                className="bg-cover bg-center h-3/4 w-full mt-0 flex justify-center items-center"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)`
                }}
            >
                <h1 className="text-4xl font-bold bg-gray-800 bg-opacity-20 text-white mb-4">
                    Sustainable. Ethical. Animal Free.
                </h1>
            </div>
        </div>
    </>
  );
}

export default App;
