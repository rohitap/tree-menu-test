import useTreeData from './hooks/useTreeData';
import TreeContainer from './TreeContainer';
import './App.css';

const App = () => {
  const {error, loading, data} = useTreeData();

  return (
    <div className="App">
      {
        loading
        ? <div className="loader"></div>
        : <TreeContainer data={data} />
      }
      {
        error
        && <h1>Error occuring while fetching the data</h1>
      }
    </div>
  );
}

export default App;
