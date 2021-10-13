import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx'
import './index.scss';

const users = [
  { name: "Dan", age: 33, id: 1 },
  { name: "Ann", age: 55, id: 2 },
  { name: "Olga", age: 34, id: 3 },
  { name: "Mike", age: 45, id: 4 },
  { name: "Ar", age: 45, id: 5 },
  { name: "Alya", age: 45, id: 6 },
];

const rootElem = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElem);