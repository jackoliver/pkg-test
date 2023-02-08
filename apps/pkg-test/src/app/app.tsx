import { ContextTest, useContextTest } from '@jvla/context-test';

export function App() {
  return (
    <ContextTest>
      <ConnectedComponent />
    </ContextTest>
  );
}

const ConnectedComponent = () => {
  const { active } = useContextTest();
  return (
    <div>
      {active.get() ? 'active' : 'inactive'}
      <br />
      <button onClick={() => active.set(!active.get())}>
        Toggle that stuff!
      </button>
    </div>
  );
};

export default App;
