import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import palette from '../lib/styles/palette';

const categories = {
  name: 'today',
  text: '오늘',
};

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
`;

const Category = styled.div`
  border: none;
  border-radius: 4px;
  width: 100px;
  text-align: center;
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
  color: black;
  background-color: white;

  &:hover {
    background-color: white;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      <Button />
      <Category key={categories.name}>{categories.text}</Category>
      <Button />
    </CategoriesBlock>
  );
};

export default Categories;
