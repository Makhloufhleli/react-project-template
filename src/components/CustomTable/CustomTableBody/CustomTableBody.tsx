import { TableBody } from '@mui/material';
import { Constants } from '@Src/config/Constants';
import { CustomTableProps } from '../CustomTable.types';
import { CustomTableRow } from './CustomTableRow';

const {types, values} = Constants
const {STRING_TYPE} = types
const {EMPTY_STRING, EMPTY_DATA} = values

function CustomTableBody<T>(props: CustomTableProps<T>) {
  const { data, dataTypeObject, actions } = props;
  return (
    <TableBody>
      <>
        {data.map((row: typeof dataTypeObject, index: number) => {
          return <CustomTableRow key={index} row={row} actions={actions}/>
        })}
      </>
    </TableBody>
  );
}

export default CustomTableBody;
