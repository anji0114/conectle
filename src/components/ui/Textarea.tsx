import { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { tv, type VariantProps } from 'tailwind-variants';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';

const textareaStyle = tv({
  base: 'w-full resize-none rounded p-3 text-sm leading-relaxed outline-offset-4 outline-slate-300',
  variants: {
    variant: {
      outline: 'border border-slate-200',
      fill: 'border border-slate-200 bg-slate-100',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

type Props = TextareaAutosizeProps & VariantProps<typeof textareaStyle>;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ variant, minRows = 3, className, ...props }, ref) => {
    return (
      <TextareaAutosize
        className={textareaStyle({ variant, className })}
        minRows={minRows}
        {...props}
        ref={ref}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
