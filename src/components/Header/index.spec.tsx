import { render } from '@testing-library/react'
import React from 'react';
import Header from '.';

const renderComponent = () => {
	return render(
		<Header />
	);
} 

describe('Header', () => {
	it('should render Header component successfully', () => {
		const { baseElement, getByTestId } = renderComponent();

		const headerComponent = getByTestId('header');

		expect(baseElement).toBeTruthy();
		expect(headerComponent).toBeTruthy();
	});

	it('should render three items in Header listing', () => {
		const { getByTestId } = renderComponent();

		const headerListing = getByTestId('header__listing');
		
		expect(headerListing).toBeTruthy();
		expect(headerListing.children.length).toBe(3);
	});

	it('should render three li tag elements in Header listing', () => {
		const { getByTestId } = renderComponent();

		const headerListing = getByTestId('header__listing');

		expect(headerListing.children.length).toBe(3);
		expect(headerListing.children.item(0)?.tagName.toLowerCase()).toBe('li');
		expect(headerListing.children.item(1)?.tagName.toLowerCase()).toBe('li');
		expect(headerListing.children.item(2)?.tagName.toLowerCase()).toBe('li');
	});
})