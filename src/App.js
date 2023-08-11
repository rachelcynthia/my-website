import './App.css';
import PortfolioHome from './PortfolioHome/PortfolioHome';
import NavigationProvider from './Provider/NavigationProvider';

function App() {
  return (
    <NavigationProvider>
      <div className="App">
        <PortfolioHome />
      </div>
    </NavigationProvider>

  );
}

export default App;
