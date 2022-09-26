import styled from 'styled-components'

export const Container = styled.div`
	height: 520px;
	width: 416px;
	padding: 12px;
	padding-top: 24px;
	border: 1px solid #363636;
	border-radius: 8px;
	background-color: #FDFDFD;
	display: flex;
  flex-flow: column;
`

export const Title = styled.h2`
	margin: 0;
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 24px;
	color: #363636;
	font-family: 'Inter';
`

export const ImagePrincipalCardWrap = styled.span`
  box-sizing: content-box;
	height: 100%;
	flex: 1 1 auto;
	display: flex;
	margin-top: 24px;

  & span {
		border: 1px solid #363636 !important;
		border-radius: 8px;
		width: 100% !important;
		height: 100% !important;
  }
`;
