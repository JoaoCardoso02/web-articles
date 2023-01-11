import styled from "styled-components";

export const InputSearchContainer = styled.div`
	display: flex;
	align-items: center;
	background: #D9D9D9;
	border-radius: 8px;
	width: 220px;
	height: 42px;

	svg {
		margin-left: 12px;
		font-size: 24px;
		width: 24px;
		height: 24px;
		fill: #1F1F1F;
	}
`;

export const SearchInput = styled.input`
	background: transparent;
	width: 100%;
	height: 24px;
	outline: none;
	border: none;
	line-height: 12px;
	font-size: 14px;
	letter-spacing: 0.04em;
	margin-left: 12px;
`;
