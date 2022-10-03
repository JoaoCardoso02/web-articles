import 'jest-styled-components'
import React, { CSSProperties } from "react";
import { render } from "@testing-library/react";
import Chip from ".";

const props = {
	style: "color: red" as CSSProperties
};

const FakeChildren = () => <h1>my fake children</h1>

const renderComponent = (children?: React.ReactNode) => {
	return render(
		<Chip {...props}>
			{children}
		</Chip>
	);
} 

describe('Chip', () => {
	it('should find its children successfully', () => {
		const { getByText } = renderComponent(FakeChildren())

		const elementChildrenText = getByText('my fake children')

    expect(elementChildrenText).toBeInTheDocument();
	});

	it('should have color style for button element', () => {
		const { container } = renderComponent(FakeChildren())

		const elementButton = container.querySelector('button')

    expect(elementButton).toHaveStyleRule('color: red')
	});
})