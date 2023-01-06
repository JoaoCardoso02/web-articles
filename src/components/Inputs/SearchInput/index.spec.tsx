import { fireEvent, render } from '@testing-library/react'
import SearchInput from '.'

interface ISearchInputProps {
	onClick?: React.ReactEventHandler<HTMLInputElement>
	onBlur?: React.ReactEventHandler<HTMLInputElement>
	onFocus?: React.ReactEventHandler<HTMLInputElement>
	onEnter?: React.ReactEventHandler<HTMLInputElement>
}

const renderComponent = (props: ISearchInputProps) => {
	return render(
		<SearchInput {...props} />
	);
}

describe('SearchInput', () => {
	it('should render SearchInput component successfully', () => {
		const { baseElement, getByTestId } = renderComponent({});

		const containerComponent = getByTestId('input-search__container');

		expect(baseElement).toBeTruthy();
		expect(containerComponent).toBeTruthy();
	});

	it('should click on input successfully', () => {
		let wasClicked = false;

		const onClick = () => {
			wasClicked = true;
		};

		const onClickSpy = jest.fn(onClick);

		const { getByTestId } = renderComponent({ onClick: onClickSpy });

		const inputComponent = getByTestId('input-search__input');
		
		inputComponent.click();

		expect(wasClicked).toBeTruthy();
		expect(onClickSpy).toBeCalled();
	});

	it('should blur on input successfully', () => {
		let wasBlurred = false;

		const onBlur = () => {
			wasBlurred = true;
		};

		const onBlurSpy = jest.fn(onBlur);

		const { getByTestId } = renderComponent({ onBlur: onBlurSpy });

		const inputComponent = getByTestId('input-search__input');
		
		inputComponent.focus();
		inputComponent.blur();

		expect(wasBlurred).toBeTruthy();
		expect(onBlurSpy).toBeCalled();
	});

	it('should focus on input successfully', () => {
		let wasFocused = false;

		const onFocus = () => {
			wasFocused = true;
		};

		const onFocusSpy = jest.fn(onFocus);

		const { getByTestId } = renderComponent({ onFocus: onFocusSpy });

		const inputComponent = getByTestId('input-search__input');
		
		inputComponent.focus();

		expect(wasFocused).toBeTruthy();
		expect(onFocusSpy).toBeCalled();
	});

	it('should keydown enter on input successfully', () => {
		let wasEntered = false;

		const onEnter = () => {
			wasEntered = true;
		};

		const onEnterSpy = jest.fn(onEnter);

		const { getByTestId } = renderComponent({ onEnter: onEnterSpy });

		const inputComponent = getByTestId('input-search__input');
		
		fireEvent.keyDown(inputComponent, { key: 'Enter' })

		expect(wasEntered).toBeTruthy();
		expect(onEnterSpy).toBeCalled();
	});
});
