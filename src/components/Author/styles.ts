import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	height: 48px;
`

export const ImageAuthorWrap = styled.div`
	width: 48px;
	height: 48px;

	& span {
		border: 1px solid #363636 !important;
		border-radius: 100%;
		width: 100% !important;
		height: 100% !important;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	margin-left: 12px;
`

export const Name = styled.h3`
	font-size: 12px;
	font-weight: 500;
	margin: 0;
`

export const Date = styled.span`
	font-size: 8px;
	font-weight: 300;
	margin: 0;
`

