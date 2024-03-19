import { BottomPane } from './bottom-pane/bottom-pane.component';
import { CentralPane } from './central-pane/central-pane.component';
import { CssEditorProvider } from './css-editor-provider';
import { Header } from './header/header.component';
import { LeftPane } from './left-pane/left-pane.component';
import { RightPane } from './right-pane/right-pane.component';
import style from './app.module.css';

export function App() {

  return (
    <div className={style.container}>
      <Header/>
      <div className={style.content}>
        <CssEditorProvider>
          <LeftPane/>
          <CentralPane/>
          <RightPane/>
          <BottomPane/>
        </CssEditorProvider>
      </div>
    </div>
  );
}
