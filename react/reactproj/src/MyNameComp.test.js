import { render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

describe("MyName Component",()=>{
    test("render myname Component",()=>{
        render(<MyNameComp/>);
        let createElement = screen.getByText("NithishBlaze");
        expect(createElement).toBeInTheDocument();
    })
    test("render with props name",()=>{
        render(<MyNameComp name="Nithish" post="Java Developer" />);
        let createElement = screen.getByText("My name is:Nithish");
        expect(createElement).toBeInTheDocument();
    })
    test("render with props post",()=>{
        render(<MyNameComp name="Nithish" post="Java Developer" />);
        let createElement = screen.getByText("I am:Java Developer");
        expect(createElement).toBeInTheDocument();
    })
}
)