import { Reveal } from "./reveal";

export function SectionHeading({ number, label, title, description }: {
  number: string; label: string; title: string; description?: string;
}) {
  return <Reveal className="section-heading">
    <div className="section-kicker"><span>{number}</span><p>{label}</p></div>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>;
}
