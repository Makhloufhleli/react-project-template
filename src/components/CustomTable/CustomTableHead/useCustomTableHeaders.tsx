import { Constants } from "@Config/Constants";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomTableProps, TableHeaderCell } from "../CustomTable.types";

const {types, values} = Constants
const {STRING_TYPE} = types
const {EMPTY_STRING, EMPTY_DATA} = values


export default function useCustomTableHeaders<T>({dataTypeObject, actions}: CustomTableProps<T>) {
    const { t } = useTranslation()
    const [tableHeaderCells, setTableHeaderCells] = useState<Array<TableHeaderCell>>(new Array());
    const haveActions = actions && actions.length > EMPTY_DATA;
    const isMoreThanOneAction = actions && actions.length > 1;

    const generateHeaderLabels = (dataTypeObject: T) => {

        const tableHeaderCells: Array<TableHeaderCell> = new Array();

        const objectName = dataTypeObject && (dataTypeObject.constructor.name).toLowerCase()
        
        const ojectPropertiesNames = Object.getOwnPropertyNames(dataTypeObject);
        const ojectPropertiesDescriptors = Object.getOwnPropertyDescriptors(dataTypeObject);
        
        if(ojectPropertiesNames.length > 0 && objectName !== EMPTY_STRING){
            ojectPropertiesNames.forEach((name: string)=>{
                const descriptor = ojectPropertiesDescriptors[name];
                const cell: TableHeaderCell = {
                    id: name,
                    label: t(`${objectName}.${name}_label`),
                    alignRight: typeof descriptor.value !== STRING_TYPE
                }
                tableHeaderCells.push(cell);
            })
            haveActions && tableHeaderCells.push({
                id: "actions",
                label: t(`${isMoreThanOneAction ? "common.table.actions" : "common.table.action"}`),
                alignRight: true
            })
        }
        return tableHeaderCells;
    }
    useEffect(() => {
        const tableHeaderCells = generateHeaderLabels(dataTypeObject);
        setTableHeaderCells(tableHeaderCells);
    }, [dataTypeObject])

  return {tableHeaderCells}
}
