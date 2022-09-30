import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomActionsButtonProps } from './CustomActionsButton.types';

export const StyledActionsButton = styled(Button)(
  ({ action, colorIfDelete, colorIfEdit, colorIfView, colorWhenHover }: CustomActionsButtonProps) =>
    ({ theme }) => ({
      width: '100%',
      color: action === 'view' ? colorIfView : action === 'edit' ? colorIfEdit : colorIfDelete,
      justifyContent: 'flex-start',
      paddingLeft: '5%',
      fontWeight: 500,
      fontSize: '17px',
      lineHeight: '19.53px',
      border: 3,
      height: 38,
      '&:hover': {
        background: colorWhenHover,
      },
      
    }),
);