import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import Todos from '../Todos';

//Clean after each test
afterEach(()=>{
    cleanup();
})

//Test for non-completed todo
test('render non-completed task',()=>{
    const todo = {id : 1 , title :  'task-1', completed: false};
    render(<Todos todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('task-1')
    expect(todoElement).not.toContainHTML('<strike>') 
})
//Test for completed todo
test('render completed task',()=>{
    const todo = {id : 2 , title : 'task-2', completed: true};
    render(<Todos todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('task-2')
   
})

test('matches snapshot',()=>{
    const todo = {id : 1 , title :  'task-1', completed: false};
    const tree= renderer.create(<Todos todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot()
    



})