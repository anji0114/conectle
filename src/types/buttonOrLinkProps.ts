import { type LinkProps as NextLinkProps } from 'next/link';
import type { ComponentProps, LegacyRef } from 'react';

export type ButtonOrLinkPropsElement<T extends 'link' | 'button' | 'span'> =
  T extends 'link'
    ? LegacyRef<HTMLAnchorElement>
    : T extends 'button'
      ? LegacyRef<HTMLButtonElement>
      : LegacyRef<HTMLSpanElement>;

type LinkProps = {
  tag: 'link';
} & NextLinkProps;

type ButtonProps = {
  tag: 'button';
} & Omit<
  ComponentProps<'button'>,
  'className' | 'disable' | 'children' | 'disabled'
>;

type SpanProps = {
  tag: 'span';
} & Omit<ComponentProps<'span'>, 'className' | 'children'>;

export type ButtonOrLinkProps = LinkProps | ButtonProps | SpanProps;
