export interface CustomActionsButtonProps {
    action: "view" | "edit" | "delete";
    colorIfView: string;
    colorIfEdit: string;
    colorIfDelete: string;
    colorWhenHover?: string;
}