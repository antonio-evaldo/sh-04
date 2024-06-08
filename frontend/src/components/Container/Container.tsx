import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <div className="mx-auto max-w-7xl px-2 py-4 md:px-5">{children}</div>;
}
