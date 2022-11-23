import { useState } from "react";
import styled from "styled-components";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Suggestion from "./Suggestion";

const Typeahead = ({ suggestions, handleSelect, categories }) => {
  const [value, setValue] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const matches = suggestions.filter((suggestion) => {
    const lowerCasedTitle = suggestion.title.toLowerCase();
    const lowerCaseValue = value.toLowerCase();
    const atLeastTwo = value.length >= 2;
    const isIncluded = lowerCasedTitle.includes(lowerCaseValue);

    return isIncluded && atLeastTwo;
  });

  return (
    <>
      <div>
        <Input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.target.value);
            }
          }}
        />

        <Button onClick={() => setValue("")}>Clear</Button>
        {value.length >= 2 && (
          <Suggestions>
            {matches.map((match, index) => {
              const category = categories[match.categoryId];
              const isSelected = index === selectedSuggestionIndex;

              return (
                <Suggestion
                  key={match.id}
                  onClick={() => {
                    handleSelect(match.title);
                  }}
                  suggestion={match.title}
                  searchValue={value}
                  category={category}
                  isSelected={isSelected}
                  setSelectedSuggestion={setSelectedSuggestionIndex}
                  index={index}
                />
              );
            })}
          </Suggestions>
        )}
      </div>
    </>
  );
};

const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  &:focus {
    outline: none !important;
    border: 2px solid blue;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-left: 10px;
  background-color: blue;
  border: 1px solid blue;
  color: white;
  border-radius: 5px;
`;

const Suggestions = styled.ul`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 400px;
  padding: 10px;
`;

export default Typeahead;
