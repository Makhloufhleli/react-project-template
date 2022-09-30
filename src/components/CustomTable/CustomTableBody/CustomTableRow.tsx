import { Constants } from '@Src/config/Constants';
import { StyledActionsButton } from '../CustomActionsButton/CustomActionsButton.styles';
import { CustomTableActionsType } from '../CustomTable.types';
import { StyledTableCell } from '../CustomTableHead/CustomTableHead.styles';
import { StyledTableRow } from './CustomTableBody.styles';
const { types, values } = Constants;
const { STRING_TYPE } = types;
const { EMPTY_DATA } = values;

interface Props<T> {
  row: T;
  actions: CustomTableActionsType;
}
interface RowDescriptor {
  name: string;
  value: unknown;
}
export function CustomTableRow<T>({ row, actions }: Props<T>) {
  const renderRow = (row: T) => {
    const rowPropertiesNames = Object.getOwnPropertyNames(row);
    const rowPropertiesDescriptors = Object.getOwnPropertyDescriptors(row);
    const haveActions = actions && actions.length > EMPTY_DATA;
    const isMoreThanOneAction = actions && actions.length > 1;
    return (
      <StyledTableRow>
        {rowPropertiesNames.map((name: string, index: number) => (
          <StyledTableCell
            align={typeof rowPropertiesDescriptors[name].value !== STRING_TYPE ? 'right' : 'left'}
            key={index}
          >
            {rowPropertiesDescriptors[name].value}
          </StyledTableCell>
        ))}
        {haveActions && (
          <StyledTableCell>
            {
                actions.map((action, index) => (
                    <StyledActionsButton action={action} colorIfView={''} colorIfEdit={''} colorIfDelete={''} />
                ))
            }
          </StyledTableCell>
        )}
      </StyledTableRow>
    );
  };
  return renderRow(row);
}
