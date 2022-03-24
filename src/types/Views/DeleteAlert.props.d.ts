import type ViewProp from './View';

export interface DeleteAlertProps extends ViewProp {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
}
