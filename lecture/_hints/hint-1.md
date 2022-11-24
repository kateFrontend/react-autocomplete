Your code should look something like this:

```jsx
const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            handleSelect(ev.target.value);
          }
        }}
      />

      <button onClick={() => setValue('')}>Clear</button>
    </>
  );
};
```

We're using the `value` / `onChange` combo we've seen to copy a form value into React state. We're also using the same `setValue` function to reset the state when the user clicks on the "clear" button.

When the user presses a key on their keyboard, we check and see if it's the "Enter" key; if so, we call the `handleSelect` function. You should get an Alert with whatever the user has typed.
