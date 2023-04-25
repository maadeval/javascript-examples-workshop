import './App.css';
import { MAX_LENGTH, MIN_LENGTH, useInputForm } from './useInputForm';

export function App() {
  const { value, isError, setValue } = useInputForm();

  return (
    <>
      <input
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      {isError && (
        <p>
          El largo no puede ser menor de {MIN_LENGTH} y mayor de {MAX_LENGTH}
        </p>
      )}
    </>
  );
}
