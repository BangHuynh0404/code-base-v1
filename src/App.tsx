import './App.css';
import Query from './lib/react-query/QueryWrapper';

import RouterWrapper from './lib/react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Query>
        <RouterWrapper />
      </Query>
    </div>
  );
};

export default App;
