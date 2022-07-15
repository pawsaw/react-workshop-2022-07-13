import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { BookDetailsScreen } from './screens/BookDetailsScreen';
import { BookScreen, OnBookSelected } from './screens/BookScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  const history = useHistory();

  const onBookSelected: OnBookSelected = (selectedBook) => {
    history.push(`/books/${selectedBook.isbn}`);
  };

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
          <Route path="/books/:isbn" component={BookDetailsScreen} />
          <Route path="/books" render={() => <BookScreen onBookSelected={onBookSelected} />} />
          <Redirect to="/books" />
        </Switch>
      </main>
    </>
  );
}

export default App;
