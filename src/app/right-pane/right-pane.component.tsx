import { useBreakpoints, Text } from '@shopify/polaris';
import { useCssEditor } from '../css-editor-provider';
import { EditPane } from '../edit-pane/edit-pane.component';
import style from './right-pane.module.css';

export function RightPane() {

  const { cssEditor } = useCssEditor();
  const { lgUp } = useBreakpoints();

  if (!lgUp) return null;

  return (
    <div className={style.container}>
      {cssEditor.open
        ? <EditPane/>
        : <Text as='p'>Click Open Edit CSS</Text>
      }
    </div>
  );
}
