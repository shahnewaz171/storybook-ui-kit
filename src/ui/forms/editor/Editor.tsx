import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered } from 'lucide-react';
import { type ReactNode, useEffect, useEffectEvent } from 'react';

import cn from '@/utils/cn';

interface EditorProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

interface ToolbarButtonProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const ToolbarButton = ({ label, active, disabled, onClick, children }: ToolbarButtonProps) => (
  <button
    type="button"
    aria-label={label}
    aria-pressed={active}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      'inline-flex size-8 items-center justify-center rounded-[calc(var(--radius)-2px)] text-foreground transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-50',
      active && 'bg-accent text-accent-foreground'
    )}
  >
    {children}
  </button>
);

const Editor = ({
  name,
  value,
  onChange,
  readOnly = false,
  disabled = false,
  error,
  placeholder = 'Start writing...',
  className
}: EditorProps) => {
  const isEditable = !readOnly && !disabled;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder
      })
    ],
    content: value,
    editable: isEditable,
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
    editorProps: {
      attributes: {
        id: name,
        'aria-invalid': error ? 'true' : 'false',
        ...(error ? { 'aria-describedby': `${name}-error` } : {})
      }
    }
  });

  const onEditable = useEffectEvent((editable: boolean) => {
    if (!editor) {
      return;
    }

    editor.setEditable(editable);
  });

  useEffect(() => {
    onEditable(isEditable);
  }, [isEditable]);

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'overflow-hidden rounded-(--radius) border border-input bg-background',
          error && 'border-destructive',
          disabled && 'opacity-50'
        )}
      >
        {editor && (
          <div
            className={cn(
              'flex items-center gap-1 border-b border-border px-2 py-1.5',
              !isEditable && 'pointer-events-none'
            )}
          >
            <ToolbarButton
              label="Bold"
              active={editor.isActive('bold')}
              disabled={!isEditable}
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold className="size-4" aria-hidden />
            </ToolbarButton>
            <ToolbarButton
              label="Italic"
              active={editor.isActive('italic')}
              disabled={!isEditable}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <Italic className="size-4" aria-hidden />
            </ToolbarButton>
            <ToolbarButton
              label="Bullet list"
              active={editor.isActive('bulletList')}
              disabled={!isEditable}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <List className="size-4" aria-hidden />
            </ToolbarButton>
            <ToolbarButton
              label="Numbered list"
              active={editor.isActive('orderedList')}
              disabled={!isEditable}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <ListOrdered className="size-4" aria-hidden />
            </ToolbarButton>
          </div>
        )}
        <EditorContent
          editor={editor}
          className={cn(
            'text-sm text-foreground',
            '[&_.ProseMirror]:min-h-60 [&_.ProseMirror]:px-3 [&_.ProseMirror]:py-2 [&_.ProseMirror]:outline-none',
            '[&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none',
            '[&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left',
            '[&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0',
            '[&_.ProseMirror_p.is-editor-empty:first-child::before]:text-muted-foreground',
            '[&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]',
            '[&_.ProseMirror_ul]:my-2 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5',
            '[&_.ProseMirror_ol]:my-2 [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5',
            '[&_.ProseMirror_p]:my-1',
            !isEditable && 'pointer-events-none'
          )}
        />
      </div>
    </div>
  );
};

export default Editor;
