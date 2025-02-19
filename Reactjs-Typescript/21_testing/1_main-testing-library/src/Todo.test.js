import { render,screen,cleanup } from "@testing-library/react";
import Todo from "./Todo";
// import {renderer} from 'react-test-renderer';

afterEach(()=>{
 cleanup();
});

describe("Todo", () => {
  it("should render todo component", () => {
    const todos={id:1,title:"TCS",completed:true};
    render(<Todo todo={todos}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument;
    expect(todoElement).toHaveTextContent('TCS');
    expect(todoElement).not.toHaveTextContent('CTS');
    expect(todoElement).toContainHTML('strike');
  });
//   it("To match snapshot", () => {
//     const todos={id:1,title:"TCS",completed:true};
//     const tree = renderer.create(<Todo todo={todos}/>).toJSON();
//     expect(tree).toMatchSnaphsot();
//   });
});
