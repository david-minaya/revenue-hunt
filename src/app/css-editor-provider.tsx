import { Context, Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface ICssEditor {
  open: boolean;
  css: string;
}

interface IContext {
  cssEditor: ICssEditor;
  setCssEditor: Dispatch<SetStateAction<ICssEditor>>;
}

interface Props {
  children: ReactNode;
}

const Context = createContext({} as IContext);

const css = `
.section {
  height: 300px;
  background-image: url(bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  color: black;
}

.description {
  color: black;
}

.button {
  font-weight: 500;
}
`;

export function CssEditorProvider(props: Props) {

  const [cssEditor, setCssEditor] = useState({
    open: false,
    css
  });

  return (
    <Context.Provider value={{ cssEditor, setCssEditor }}>
      {props.children}
    </Context.Provider>
  );
}

export function useCssEditor() {
  return useContext(Context);
}
