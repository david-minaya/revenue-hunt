import { Button, Text, TextField } from '@shopify/polaris';
import { ChevronLeftIcon } from '@shopify/polaris-icons';
import { useCssEditor } from '../css-editor-provider';
import style from './edit-pane.module.css';

export function EditPane() {

  const { cssEditor, setCssEditor } = useCssEditor();

  function handleClick() {
    setCssEditor(state => ({
      ...state,
      open: false
    }));
  }

  function handleChange(value: string) {
    setCssEditor(state => ({
      ...state,
      css: value
    }));
  }

  return (
    <div>
      <div className={style.header}>
        <Button
          icon={ChevronLeftIcon}
          onClick={handleClick}>
        </Button>
        <Text 
          as='h3'
          variant='headingMd'>
          Edit CSS
        </Text>
      </div>
      <TextField
        label='CSS'
        value={cssEditor.css}
        onChange={handleChange}
        multiline={20}
        monospaced={true}
        autoComplete='off'
        maxHeight={380}/>
    </div>
  );
}
