import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const MainItemBlock = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid ${palette.gray[2]};
  .h1 {
    font-size: 100px;
    color: black;
  }
`;

const MainItem = ({ item }) => {
  const {
    stateDt,
    decideCnt,
    deathCnt,
    examCnt,
    clearCnt,
    resutlNegCnt,
    careCnt,
    accExamCnt,
  } = item;

  return (
    <MainItemBlock>
      <p>날짜 : {stateDt + ' '}, </p>
      <p>확진자 수 : {decideCnt}, </p> <p>사망자 수 : {deathCnt},</p>
      <p>검사자 수: {examCnt}, </p> <p>격리해재 수 : {clearCnt}</p>
      <p>결과 음성 수 : {resutlNegCnt},</p>
      <p>치료 주 환자 수 : {careCnt}, </p>
      <p>누적검사 완료 수 : {accExamCnt}</p>
    </MainItemBlock>
  );
};

export default MainItem;
