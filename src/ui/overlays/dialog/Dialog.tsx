import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogContentText from '@mui/material/DialogContentText';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { type ReactNode, useState } from 'react';

import Button from '@/ui/components/button/Button';

interface DialogProps {
  title: string;
  description?: string;
  triggerLabel?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children?: ReactNode;
  onConfirm?: () => void;
}

const Dialog = ({
  title,
  description,
  triggerLabel = 'Open dialog',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  children,
  onConfirm
}: DialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
      <MuiDialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <MuiDialogTitle>{title}</MuiDialogTitle>
        <MuiDialogContent>
          {description && <MuiDialogContentText>{description}</MuiDialogContentText>}
          {children}
        </MuiDialogContent>
        <MuiDialogActions>
          <Button variant="outline" onClick={() => setOpen(false)}>
            {cancelLabel}
          </Button>
          <Button
            onClick={() => {
              onConfirm?.();
              setOpen(false);
            }}
          >
            {confirmLabel}
          </Button>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
};

export default Dialog;
