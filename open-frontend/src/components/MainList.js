import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainItem from './MainItem';
import axios from 'axios';
import palette from '../lib/styles/palette';

const MainListBlock = styled.div`
  margin-top: 3rem;
  text-align: center;
  .h1 {
    color: black;
    font-size: 50px;
  }
`;

const MainItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[7]};
  }
`;

const MainList = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=MCOPjJc8P6GG3tLEXY0HTl%2FOzFqj%2BiStMV8aQ4FnL25TCt20be%2BpYIH%2FPQNlfUQyUOtMSxOgSoSA%2BS245I9n%2Fg%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20201004&endCreateDt=20201010&_type=json',
        );
        setItems(response.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기중일때
  if (loading) {
    return <MainListBlock>대기중 ...</MainListBlock>;
  }

  //아직 items 값이 설정되지 않았을때
  if (!items) {
    console.log('nn');
    return null;
  }
  // <MainItem key={item.stateDt} item={item} />
  //items값이 유효할때
  return (
    <MainListBlock>
      {items.map((item) => (
        <MainItem key={item.stateDt} item={item}/>
      ))}
    </MainListBlock>
  );
};

export default MainList;
