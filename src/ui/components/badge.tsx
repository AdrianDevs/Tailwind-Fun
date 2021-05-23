import React, { ReactNode } from 'react';
// import { classNames } from '../util/classNames';
enum Variant {
  RED,
  YELLOW,
  GREEN,
  BLUE,
  GRAY,
}
enum Size {
  LARGE,
  SMALL,
}
type Props = {
  variant: Variant;
  children?: ReactNode;
  size: Size;
};
// const SIZE_MAPS: Record<Size, string> = {
//   [Size.SMALL]: 'px-2.5 text-xs',
//   [Size.LARGE]: 'px-3 text-sm',
// };
// const VARIANT_MAPS: Record<Variant, string> = {
//   [Variant.RED]: 'bg-red-100 text-red-800',
//   [Variant.YELLOW]: 'bg-yellow-100 text-yellow-800',
//   [Variant.GREEN]: 'bg-green-100 text-green-800',
//   [Variant.BLUE]: 'bg-blue-100 text-blue-800',
// };
export function Badge(props: Props) {
  // const { children, variant, size } = props;
  // return (
  //   <span
  //     className={classNames(
  //       'inline-flex items-center py-0.5 rounded-full font-medium leading-4 whitespace-no-wrap',
  //       VARIANT_MAPS[variant],
  //       SIZE_MAPS[size]
  //     )}
  //   >
  //     {children}
  //   </span>
  // );
  return <div>Hello</div>;
}
// Badge.defaultProps = {
//   variant: Variant.GRAY,
//   size: Size.SMALL,
// };
// Badge.variant = Variant;
// Badge.size = Size;
