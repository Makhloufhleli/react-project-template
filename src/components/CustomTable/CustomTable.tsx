import { Paper, Table, TableContainer } from '@mui/material';
import { CustomTableProps } from './CustomTable.types';
import CustomTableBody from './CustomTableBody/CustomTableBody';
import CustomTableHead from './CustomTableHead/CustomTableHead';

export default function CustomTable<T>(props: CustomTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <CustomTableHead {...props} />
        <CustomTableBody {...props} />
      </Table>
    </TableContainer>
  );
}
