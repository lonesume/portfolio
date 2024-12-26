interface BodyContainerProps {
  children: React.ReactNode;
}

export default function BodyContainer({ children }: BodyContainerProps) {
  return <div className="mx-10 my-40 text-4xl">{children}</div>;
}
