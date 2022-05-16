import { render, fireEvent } from '@testing-library/react';
import QuestionBox from "./QuestionBox";

it("call submit", () => {
    const onSubmit = jest.fn(e => e.preventDefault());
    const { getByLabelText, getByText } = render(<QuestionBox onSubmit={onSubmit} isMobile={false} />);
    fireEvent.change(getByLabelText(/Message/i), { target: { value: "Hello World" } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: "aaa@bbb.ccc" } });
    fireEvent.click(getByText(/SEND/i));
    expect(onSubmit).toBeCalled();
});
it("validate Email", () => {
    const onSubmit = jest.fn(e => e.preventDefault());
    const { getByLabelText, getByText } = render(<QuestionBox onSubmit={onSubmit} isMobile={false} />);
        fireEvent.change(getByLabelText(/Email/i), { target: { value: "aaabbbccc" } });
        expect(getByText(/Please enter a valid email/i)).toBeInTheDocument();
    }
)