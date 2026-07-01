"use client";
type Props = {
    children: React.ReactNode;
    secondary?: boolean;
    onClick?: () => void;
};

export default function Button({
    children,
    secondary,
    onClick,
}: Props) {
  return (
   <button
    onClick={onClick}
    style={{
        padding: "16px 34px",
        borderRadius: "999px",
        border: secondary ? "2px solid white" : "none",
        background: secondary ? "transparent" : "#c32222",
        color: secondary ? "white" : "white",
        fontWeight: 600,
        cursor: "pointer",
        transition: ".3s",
      }}
    >
      {children}
    </button>
  );
}