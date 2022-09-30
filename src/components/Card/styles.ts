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

export const TitleContent = styled.div`
	line-height: 29px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

export const Title = styled.h3`
	line-height: 29px;
	height: 2.5rem;
	margin: 0;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 12px;
	font-family: 'Inter';
	color: #363636;
`

export const ImageCardWrap = styled.span`
	width: 37%;
  box-sizing: content-box;
	height: 100%;
	flex: 1 1 auto;
	display: flex;

  & span {
		width: 100% !important;
		height: 100% !important;
  }
`;

export const CardContent = styled.div`
	margin-left: 12px;
	width: 63%;
`;
