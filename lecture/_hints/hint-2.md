```jsx
const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState('');

  return (
    <Wrapper>
      <input
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          /* unchanged */
        }}
      />
      <ul>
        {matchedSuggestions.map((suggestion) => {
          return (
            <li
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              {suggestion.title}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
```
