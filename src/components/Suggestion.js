import React, { useState } from "react";
import styled from "styled-components";

const Suggestion = (props) => {
  const {
    suggestion,
    onClick,
    searchValue,
    category,
    isSelected,
    index,
    setSelectedSuggestion,
  } = props;

  const lowerCaseSug = suggestion.toLowerCase();
  const matchIndex = lowerCaseSug.indexOf(searchValue.toLowerCase());
  const matchEnd = matchIndex + searchValue.length;
  const firstHalf = suggestion.slice(0, matchEnd);
  const prediction = suggestion.slice(matchEnd);

  return (
    <Wrapper
      onMouseEnter={(event) => {
        setSelectedSuggestion(index);
      }}
      onClick={onClick}
      style={{
        background: isSelected ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
      }}
    >
      <span>
        {firstHalf}
        <Prediction>{prediction}</Prediction>
      </span>{" "}
      <Span>in {category.name}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const Prediction = styled.span`
  font-weight: bold;
`;
const Span = styled.span`
  color: purple;
  font-size: 12px;
  font-style: italic;
`;

export default Suggestion;
