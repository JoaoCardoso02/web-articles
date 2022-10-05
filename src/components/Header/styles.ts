import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: center;
	padding: 12px 0;
`;

export const Nav = styled.nav`
	width: 80vw;
	height: 64px;
	max-width: 420px;
	background-color: #FDFDFD;
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
	text-align: center;
	align-items: center;

	max-width: 120px;
	width: 100%;

	cursor: pointer;
`;

export const Span = styled.span`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 16px;
	font-family: Inter;
	font-weight: 600;
`;
