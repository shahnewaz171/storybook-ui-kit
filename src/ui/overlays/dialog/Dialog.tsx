import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { type ReactNode, useState } from 'react';

import Button from '@/ui/components/button/Button';
import cn from '@/utils/cn';

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
    <BaseDialog.Root open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop
          className={cn(
            'fixed inset-0 z-50 bg-black/50 transition-opacity',
            'data-starting-style:opacity-0 data-ending-style:opacity-0'
          )}
        />
        <BaseDialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <BaseDialog.Popup
            className={cn(
              'w-full max-w-lg space-y-4 rounded-(--radius) border border-border bg-popover p-6 text-popover-foreground shadow-lg outline-none',
              'transition-[transform,opacity] data-starting-style:scale-95 data-starting-style:opacity-0',
              'data-ending-style:scale-95 data-ending-style:opacity-0'
            )}
          >
            <BaseDialog.Title className="text-lg font-semibold text-foreground">
              {title}
            </BaseDialog.Title>
            {description && (
              <BaseDialog.Description className="text-sm text-muted-foreground">
                {description}
              </BaseDialog.Description>
            )}
            {children}
            <div className="flex justify-end gap-2 pt-2">
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
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

export default Dialog;
