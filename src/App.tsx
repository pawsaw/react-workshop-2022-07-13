import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookScreen } from './screens/BookScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <main>
        <Switch>
          <Route path="/playground" component={PlaygroundScreen} />
          <Route path="/books" component={BookScreen} />
          <Redirect to="/books" />
        </Switch>
      </main>
    </>
  );
}

export default App;
