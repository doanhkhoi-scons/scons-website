type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}