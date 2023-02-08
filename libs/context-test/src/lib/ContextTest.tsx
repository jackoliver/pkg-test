import React from 'react';
export interface ContextTestProps {
  children?: React.ReactNode;
}

interface IContextTestContext {
  variable: boolean;
  active: {
    get: () => boolean;
    set: (value: boolean) => void;
  };
}

// Create a context provider
export const ContextTestContext = React.createContext<IContextTestContext>({
  variable: false,
  active: {
    get: () => false,
    set: (value: boolean) => {
      // do nothing
    },
  },
});
// Create a consumer hook
export const useContextTest = () => React.useContext(ContextTestContext);

function useContextProviderTest() {
  const [active, setActive] = React.useState<boolean>(false);
  return {
    variable: true,
    active: {
      get: () => active,
      set: (value: boolean) => setActive(value),
    },
  };
}

export const ContextTest = (props: ContextTestProps) => {
  const value = useContextProviderTest();
  return (
    <ContextTestContext.Provider value={value}>
      <div>{props.children}</div>
    </ContextTestContext.Provider>
  );
};
