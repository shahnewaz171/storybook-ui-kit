import { Select as BaseSelect } from '@base-ui/react/select';
import { ChevronDown } from 'lucide-react';

import cn from '@/utils/cn';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}

const triggerClasses = cn(
  'flex w-full min-h-[38px] items-center justify-between gap-2 border border-input bg-background px-3 py-2',
  'rounded-(--radius) text-sm text-foreground outline-none transition-colors',
  'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'data-[popup-open]:ring-2 data-[popup-open]:ring-ring data-[popup-open]:ring-offset-2 data-[popup-open]:ring-offset-background'
);

const Select = ({
  label,
  name,
  value,
  options,
  onChange,
  disabled = false,
  error,
  placeholder = 'Select an option'
}: SelectProps) => (
  <div className="w-full">
    <BaseSelect.Root
      name={name}
      value={value || null}
      onValueChange={(next) => onChange(next == null ? '' : String(next))}
      disabled={disabled}
    >
      <BaseSelect.Label className="mb-1 block text-sm font-semibold text-foreground">
        {label}
      </BaseSelect.Label>
      <BaseSelect.Trigger
        id={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(triggerClasses, error && 'border-destructive focus-visible:ring-destructive')}
      >
        <BaseSelect.Value
          placeholder={placeholder}
          className="truncate data-placeholder:text-muted-foreground"
        />
        <BaseSelect.Icon className="text-muted-foreground">
          <ChevronDown className="size-4" aria-hidden />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          sideOffset={4}
          alignItemWithTrigger={false}
          className="z-50 outline-none"
        >
          <BaseSelect.Popup
            className={cn(
              'max-h-60 min-w-(--anchor-width) overflow-hidden rounded-(--radius) border border-border',
              'bg-popover text-popover-foreground shadow-md outline-none',
              'transition-[transform,opacity] data-starting-style:scale-95 data-starting-style:opacity-0',
              'data-ending-style:scale-95 data-ending-style:opacity-0'
            )}
          >
            <BaseSelect.List className="overflow-y-auto p-1 outline-none">
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className={({ highlighted, selected }) =>
                    cn(
                      'cursor-default rounded-[calc(var(--radius)-2px)] px-3 py-2 text-sm outline-none',
                      highlighted && 'bg-accent text-accent-foreground',
                      selected && 'bg-primary/10 text-foreground'
                    )
                  }
                >
                  <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
    {error && (
      <p id={`${name}-error`} className="mt-1 text-sm text-destructive">
        {error}
      </p>
    )}
  </div>
);

export default Select;
