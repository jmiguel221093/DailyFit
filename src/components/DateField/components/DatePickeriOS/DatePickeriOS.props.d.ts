export type DatePickeriOSProps = {
    date?: Date;
    onSelect?: (date: string) => void;
    onCancel?: () => void;
    open?: boolean;
    primaryActionText?: string;
    secondaryActionText?: string;
};
