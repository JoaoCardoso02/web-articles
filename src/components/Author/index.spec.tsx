import { render } from "@testing-library/react";
import Author from ".";

const props = {
  name: "Michael Scott",
  date: "03 sep 2022",
  image: "/photo.avif",
};

describe("Author Component", () => {
  test("should find author name in document", () => {
    const { getByText } = render(
      <Author {...props} />
    );

		const element = getByText(props.name)

    expect(element).toBeInTheDocument();
  });

	test("should not find author name in component if name is wrong", () => {
    const { queryByText } = render(
      <Author {...props} />
    );

		const element = queryByText("other name")

		expect(element).toBeNull();
  });

	test("should find author date in document", () => {
    const { getByText } = render(
      <Author {...props} />
    );

		const element = getByText(props.date)

    expect(element).toBeInTheDocument();
  });

	test("should not find author date in component if date is wrong", () => {
    const { queryByText } = render(
      <Author {...props} />
    );

		const element = queryByText("01 jan 2000")

		expect(element).toBeNull();
  });

	test("should find author image in document", () => {
    const { getByAltText } = render(
      <Author {...props} />
    );

		const element = getByAltText(`${props.name} image`)

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('src');
  });

	test("should not find author date in component if date is wrong", () => {
    const { queryByAltText } = render(
      <Author {...props} />
    );

		const element = queryByAltText("some alt fake")

		expect(element).toBeNull();
  });
});
