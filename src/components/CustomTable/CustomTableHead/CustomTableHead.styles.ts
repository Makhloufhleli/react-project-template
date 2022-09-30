import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      cursor: 'pointer',
      fontSize: 25,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 25,
    },
  }));