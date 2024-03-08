import { render, screen } from '@testing-library/react'
import Largest from '../components/Largest'

test('no 1 is the largest number',()=>{
    render (<Largest no1={5} no2={3} no3={4}/>);
    const element=screen.getByText(/no1:5 is the largest/i);
    expect(element).toBeInTheDocument();
});

test('no 2 is the largest number',()=>{
    render (<Largest no1={3} no2={7} no3={4}/>);
    const element=screen.getByText(/no2:7 is largest/i);
    expect(element).toBeInTheDocument();
});

test("tesing for no3 Largest", () => {
    render(<Largest no1={90} no2={60} no3={140} />)
    expect(screen.getByText(/no3:140 is largest/)).toBeInTheDocument();
})
 
 
 
 
