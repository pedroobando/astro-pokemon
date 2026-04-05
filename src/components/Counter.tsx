import { createSignal, type Component, type JSX } from 'solid-js';

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (Props) => {
  const [counter, setCounter] = createSignal(Props.initValue);

  return (
    <>
      {Props.children}

      <h3 class="text-xl">Value: {counter()}</h3>

      <div class="flex flex-row gap-4">
        <button onClick={() => setCounter((prev) => --prev)} class="bg-slate-700 p-2 rounded hover:bg-slate-500">
          -1
        </button>
        <button onClick={() => setCounter((prev) => ++prev)} class="bg-slate-700 p-2 rounded hover:bg-slate-500">
          +1
        </button>
      </div>
    </>
  );
};
