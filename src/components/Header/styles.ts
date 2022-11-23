import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: center;
	padding: 12px 0;
`;

export const Nav = styled.nav`
	width: 80vw;
	height: 64px;
	max-width: 360px;
	display: flex;
	justify-content: center;
`;

export const Ul = styled.ul`
	margin: 0;
	padding: 0;

	list-style: none;
	display: flex;
	justify-content: space-evenly;

	width: 100%;
	height: 100%;
`;

export const Li = styled.li`
	max-width: 32px;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		font-size: 32px;
		fill: #363636;
		cursor: pointer;
	}

`;
