import React from "react";
import { render } from "@testing-library/react";
import PrincipalCard from ".";

jest.mock('../../components/Author', () => {
	return function AuthorComponent() {
		return <div>Author Component Mock</div>
	}
})

const props = {
	title: "Principal Card Title",
	image: '/cardphoto.avif',
	author: {
		name: "Michael Scott",
		date: "03 sep 2022",
		image: "/photo.avif",
	}
};

const renderComponent = () => {
	return render(
		<PrincipalCard {...props} />
	);
} 

describe("PrincipalCard Component", () => {
  test("should find title and image in document", () => {
    const { getByText, getByAltText } = renderComponent()

		const elementTitle = getByText(props.title)
		const elementImage = getByAltText(`${props.title} image`)

    expect(elementTitle).toBeInTheDocument();
    expect(elementImage).toBeInTheDocument();
  });

	test("should find objectFit params equals cover for Image component", async () => {
    const { getByAltText } = renderComponent()

		const elementImage = getByAltText(`${props.title} image`)


		expect(elementImage).toHaveStyle({ 'object-fit': 'cover' })
  });

	test("should have src property in Image component", async () => {
    const { getByAltText } = renderComponent()

		const elementImage = getByAltText(`${props.title} image`)


		expect(elementImage).toHaveProperty('src')
  });
});
