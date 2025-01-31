import { Link } from "react-router-dom";
import styled from "styled-components";

const DefaultLink = styled(Link)`
  margin: 8px;
  color: #678388;
  &:hover {
    text-decoration: none;
  }
`;

export default DefaultLink;
