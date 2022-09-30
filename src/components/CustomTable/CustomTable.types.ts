export type CustomTableActionsType= Array<'view' | 'edit' | 'delete'>


export interface CustomTableProps<T> {
  dataTypeObject: T;
  data: Array<T>;
  actions: CustomTableActionsType;
}

export interface TableHeaderCell {
    id: string;
    label: string;
    alignRight: boolean;
}
