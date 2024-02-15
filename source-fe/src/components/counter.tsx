import { $, component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const counter = useSignal(0);

  const addCount = $(() => counter.value++);

  return (
    <>
      <button onClick$={addCount} class="btn btn-primary">
        {counter.value}
      </button>
    </>
  );
});
