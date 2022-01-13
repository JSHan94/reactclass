import React, { useReducer, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import List from 'components/Lists/List'
import Write from 'components/Lists/Write';
import Detail from 'components/Lists/Detail';
import Update from 'components/Lists/Update';
import { boardReducer, GET_LOCAL_STORAGE } from 'helpers/boardReducer';
import './Board.css';

const initialState = {
  list: [],
  id: 0,
  menu: 'List',
};

const Eventpage = () => {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  const { list, id, menu } = state;
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem('list', JSON.stringify(list));
      localStorage.setItem('id', id);
    }
  }, [id, list]);

  useEffect(() => {
    dispatch({ type: GET_LOCAL_STORAGE });
    isMount.current = false;
  }, []);

  return (
    <div className="Board">
      <div className="menu">
        <h1>{menu}</h1>
      </div>
      <div className="btn-write">
        <Link to="/write">write</Link>
      </div>
      <List list={list} dispatch={dispatch}/>
      <Write id={id} dispatch={dispatch} />
    </div>
  );
};

export default Eventpage;