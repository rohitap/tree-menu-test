import useTreeData from './hooks/useTreeData';
import TreeContainer from './TreeContainer';
import Error from './Error';
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

      {error && <Error />}
    </div>
  );
}

export default App;
