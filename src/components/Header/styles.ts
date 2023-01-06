import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 12px;

	border-bottom: 1px solid #C4C4C4;

	svg {
		font-size: 40px;
		fill: #363636;
		cursor: pointer;
	}

	.header--left {
		display: flex;
		align-items: center;

		.input-search__container {
			margin-left: 16px;
		}
	}

`;

export const Nav = styled.nav`
	width: 80vw;
	height: 46px;
	max-width: 180px;
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
		stroke: #363636;
		stroke-width: 40px;
		fill: transparent;
	}
`;
