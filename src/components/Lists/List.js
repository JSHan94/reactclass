import React, { useEffect, memo } from 'react';
import { CHANGE_MENU } from 'helpers/boardReducer';
import ListItem from 'components/Lists/ListItem';
import './List.css';

const List = memo(({ list, dispatch }) => {
  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'List' });
  }, [dispatch]);

  return (
    <div className="List">
      <div className="header">title</div>
      <div className="header">date</div>
      <div className="header">views</div>
      <div className="items">
        {list
          .sort((a, b) => b.id - a.id)
          .map((item) => {
            return <ListItem key={item.id} item={item} dispatch={dispatch} />;
          })}
      </div>
    </div>
  );
});

export default List;