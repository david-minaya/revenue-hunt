import { Fragment } from 'react/jsx-runtime';
import { useBreakpoints, Text, Button, Box } from '@shopify/polaris';
import { EditIcon } from '@shopify/polaris-icons';
import { EditPane } from '../edit-pane/edit-pane.component';
import { useCssEditor } from '../css-editor-provider';

export function ControlPane() {

  const { lgDown } = useBreakpoints();
  const { cssEditor, setCssEditor } = useCssEditor();

  function handleClick() {
    setCssEditor(state => ({
      ...state,
      open: true
    }));
  }

  return (
    <div>
      {((lgDown && !cssEditor.open) || !lgDown) &&
          <Fragment>
            <Text 
              as='h2' 
              variant='headingMd'>
              Elements
            </Text>
            <Box paddingBlock='400'>
              <Button
                icon={EditIcon}
                fullWidth
                onClick={handleClick}>
                Open Edit CSS
              </Button>
            </Box>
          </Fragment>
      }
      {lgDown && cssEditor.open &&
        <EditPane/> 
      }
    </div>
  );
}
