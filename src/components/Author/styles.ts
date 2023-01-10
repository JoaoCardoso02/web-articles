import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	height: 48px;
`

export const ImageAuthorWrap = styled.div`
	width: 48px;
	height: 48px;

	& span {
		border: 1px solid #DDDDDD !important;
		border-radius: 100%;
		width: 100% !important;
		height: 100% !important;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 6px;
	margin-left: 12px;
	color: #DDDDDD;
`

export const Name = styled.h3`
	font-family: 'Inter';
	font-size: 16px;
	font-weight: 500;
	margin: 0;
`

export const Date = styled.span`
	font-family: 'Inter';
	font-size: 12px;
	font-weight: 300;
	margin: 0;
`

