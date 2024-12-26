interface BodyContainerProps {
  children: React.ReactNode;
}

export default function BodyContainer({ children }: BodyContainerProps) {
  return <div className="mx-10 my-40">{children}</div>;
}
