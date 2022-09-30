import { TableHead, TableRow } from '@mui/material';
import { CustomTableProps } from '../CustomTable.types';
import { StyledTableCell } from './CustomTableHead.styles';
import useCustomTableHeaders from './useCustomTableHeaders';

function CustomTableHead<T>(props: CustomTableProps<T>) {
  const { tableHeaderCells } = useCustomTableHeaders(props);

  return (
    <TableHead>
      <TableRow>
        {tableHeaderCells.map((headerCell) => (
          <StyledTableCell
            key={headerCell.id}
            align={headerCell.alignRight ? 'right' : 'left'}
            onClick={() => {
              console.log(headerCell.id);
            }}
          >
            {headerCell.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {};

export default CustomTableHead;
