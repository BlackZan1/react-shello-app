import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import { useDispatch } from 'react-redux';
import { setBoardDataAction } from './redux/reducers/boardsReducer';
import ActiveBoard from './components/Board/ActiveBoard/ActiveBoard';
import { getData, deleteData } from './utils/configStorage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let lsitems = getData();

    try {
      if(lsitems.boards.length && lsitems.boards[0] !== null) {
        let { boards } = lsitems;

        dispatch(setBoardDataAction(boards));
      }
    }
    catch(err) {
      deleteData();
    }
  }, [dispatch])

  return <Router>
    <div className="App">
      <Header />

      <section className='Section'>
        <Switch>
          <Route path={'/board/:id?'} exact component={ActiveBoard} />
          <Route path={'/'} exact component={Wrapper} />

          <Redirect to={'/'} />
        </Switch>
      </section>
    </div>
  </Router>
}

export default App;
