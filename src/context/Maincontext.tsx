import { createContext, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type MainContextProps = {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
};

export const MainContext = createContext<MainContextProps>({
  theme: Theme.LIGHT,
  updateTheme: (): void => {},
});

export const MainProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const updateTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <MainContext.Provider value={{ theme, updateTheme }}>
      {children}
    </MainContext.Provider>
  );
};
