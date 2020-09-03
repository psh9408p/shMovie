import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;
const Item = styled.li``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const SLink = styled(Link)``;
export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
