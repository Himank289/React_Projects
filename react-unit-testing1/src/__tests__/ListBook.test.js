import { render, screen } from '@testing-library/react'
import ListBooks from '../components/ListBooks'
 
  const data = [
    {
        "bkid": 1,
        "bkname": "angular",
        "bkprice": 200,
       
      },  {
        "bkid": 2,
        "bkname": "oops",
        "bkprice": 800,
       
      },
      {
        "bkid": 3,
        "bkname": "cloud",
        "bkprice": 1200,
       
      },
]
 
test("Unordered List renders successfully", () => {
    render(<ListBooks books={data}/>)
    expect(screen.getByText(/cloud/i)).toBeInTheDocument();
})

test("Unordered List renders successfully", () => {
    render(<ListBooks books={data}/>)
    expect(screen.getByText(/1200/i)).toBeInTheDocument();
})