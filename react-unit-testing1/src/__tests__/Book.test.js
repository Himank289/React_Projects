import { render,screen } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'
import Book from '../components/Book';

test('clicking the button changes book details',async () => {
render(<Book bkid={1} bkname="Learn Angular" bkprice={5000} />);
// render(<Book />);

// expect(screen.getByText(/Goodbye/i)).toBeInTheDocument();

const arr = screen.getAllByText(/Goodbye/i);  
 arr.forEach(inputEle => expect(inputEle).toBeInTheDocument());


  expect(screen.getByText(/Learn Angular/i)).toBeInTheDocument();
  expect(screen.getByText(/5000/i)).toBeInTheDocument();


  await userEvent.click(screen.getByText(/clickme/i));

//   expect(screen.getByText(/hello/i)).toBeInTheDocument();

const arr1 = screen.getAllByText(/hello/i);  
 arr1.forEach(inputEle => expect(inputEle).toBeInTheDocument());
  expect(screen.getByText(/200/)).toBeInTheDocument();
  expect(screen.getByText(/ila/i)).toBeInTheDocument();
})