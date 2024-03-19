import { useBreakpoints } from '@shopify/polaris';
import { ControlPane } from '../control-pane/control-pane.component';
import style from './left-pane.module.css';

export function LeftPane() {

  const { smUp } = useBreakpoints();

  if (!smUp) return null;

  return (
    <div className={style.container}>
      <ControlPane/>
    </div>
  );
}
