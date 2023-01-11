import styled from 'styled-components'

export const Container = styled.div`
	height: 280px;
	width: 850px;
	padding: 12px;
	border: 1px solid #5a5a5a;
	border-radius: 8px;
	background-color: #393939;
	display: flex;
`

export const TitleContent = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

export const Title = styled.h3`
	line-height: 36px;
	height: 4.5rem;
	margin: 0;
	font-size: 32px;
	font-weight: 600;
	font-family: 'Inter';
	color: #DDDDDD;
`

export const DescriptionContent = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
	margin-top: 12px;
`;

export const Description = styled.h3`
	line-height: 18px;
	height: 4.5rem;
	margin: 0;
	font-size: 12px;
	font-weight: 400;
	font-family: 'Inter';
	color: #DDDDDD;
`
export const ImageCardWrap = styled.span`
	max-width: 28%;
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
	margin-left: 72px;
	width: 61.5%;
`;
