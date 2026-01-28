import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'font-semibold rounded-lg px-4 py-2 w-full items-center justify-center mt-5',
  variants: {
    type: {
      primary: 'bg-blue-800',
      secondary: 'bg-gray-500',
      danger: 'bg-red-500',
      outline: 'bg-transparent',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      size: 'lg',
      class: 'bg-blue-600',
    },
  ],
  defaultVariants: {
    type: 'primary',
    size: 'md',
  },
});
