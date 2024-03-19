import clsx from 'clsx';
import style from './bottom-pane.module.css';
import { useState } from 'react';
import { useBreakpoints } from '@shopify/polaris';
import { ControlPane } from '../control-pane/control-pane.component';

export function BottomPane() {

  const [open, setOpen] = useState(false);
  const { smDown } = useBreakpoints();

  if (!smDown) return null;

  return (
    <div className={clsx(style.container, open && style.open)}>
      <div 
        className={style.top}
        onClick={() => setOpen(open => !open)}>
        <div className={style.mark}/>
      </div>
      <ControlPane/>
    </div>
  );
}
