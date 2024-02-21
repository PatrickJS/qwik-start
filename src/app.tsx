import { component$, useSignal } from "@builder.io/qwik";

export const App = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div>
        <h1>Qwik Start</h1>
        <p>Count: {count.value}</p>
        <button onClick$={() => (count.value += 1)}>Increment</button>
      </div>
    </>
  );
});
