import GlobalStyles from "./GlobalStyles";
import data from "../data";
import Typeahead from "./Typeahead";
import styled from "styled-components";

const App = (props) => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
