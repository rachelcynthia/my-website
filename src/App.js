import logo from './logo.svg';
import './App.css';
import Home from './ResumeHome/ResumeHome';
import PortfolioHome from './PortfolioHome/PortfolioHome';
import NavigationProvider from './Provider/NavigationProvider';

function App() {
  return (
    <NavigationProvider>
      <div className="App">
        {/* <Home /> */}
        <PortfolioHome />
      </div>
    </NavigationProvider>

  );
}

export default App;
