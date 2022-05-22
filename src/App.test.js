/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
  ReactDOM.unmountComponentAtNode('div');

});


// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });
