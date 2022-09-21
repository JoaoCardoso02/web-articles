import styled from 'styled-components'

export const Container = styled.div`
	height: 180px;
	width: 414px;
	padding: 12px;
	border: 1px solid #363636;
	border-radius: 8px;
	background-color: #FDFDFD;
	display: flex;
`

export const Title = styled.h2`
	margin: 0;
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 12px;
	color: #363636;
`

export const ImageCardWrap = styled.span`
  box-sizing: content-box;
	height: 100%;
	flex: 1 1 auto;
	display: flex;

  & span {
		border: 1px solid #363636 !important;
		border-radius: 8px;
		width: 100% !important;
		height: 100% !important;
  }
`;

export const CardContent = styled.div`
	margin-left: 12px;
`;
