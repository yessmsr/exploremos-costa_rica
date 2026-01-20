import type { ReactNode } from "react";

type ProvinceCardProps = {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
};

export default function ProvinceCard({ title, icon, onClick }: ProvinceCardProps) {
  return (
    <button className="provinceCard" onClick={onClick} type="button">
      <div className="provinceIcon">{icon}</div>
      <div className="provinceTitle">{title}</div>
    </button>
  );
}
