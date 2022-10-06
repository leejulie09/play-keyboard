import styled from 'styled-components';
import { ReactComponent as IconDownload } from '../images/list/Icon_download.svg';
import { ReactComponent as IconDiamond } from '../images/list/Icon_diamond.svg';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

interface cardProps {
  card: string;
}

function Card({ card }: cardProps) {
  return (
    <Wrapper>
      <ImageWrapper src={card.imageUrl} alt="keyboard" />
      <TextWrapper>
        <Name>{card.name}</Name>
        <Tags>{card.hashtag.map((tag: string) => '#' + tag + ' ')}</Tags>
        <IconsWrapper>
          <Download>
            <IconDownload />
            {card.downloads}
          </Download>
          <Price>
            <IconDiamond />
            {card.price}
          </Price>
        </IconsWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
`;
const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

const TextWrapper = styled.div`
  width: 100%;
  border: 3px solid red;
  height: 90px;
  display: grid;
`;
const Name = styled.div`
  width: 100%;
  margin: 8px 0 2px 0;
  font-weight: 500;
  font-size: 14px;
  color: #42444c;
`;
const Tags = styled.div`
  /* border: 3px solid blue; */
  margin-bottom: 3px;
  font-weight: 400;
  font-size: 12px;
  color: #aaabb3;
`;
const IconsWrapper = styled.div`
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Download = styled.div`
  color: #aaabb3;
`;
const Price = styled.div`
  color: #7dc9fc;
`;
