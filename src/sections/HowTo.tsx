import { useMessages } from "../i18n";

// 怎么用 / How it works — three numbered steps in a centered row, taking a
// visitor from a sentence to a published, data-collecting form. All copy comes
// from the i18n catalog.
export function HowTo() {
  const { how } = useMessages();
  return (
    <section className="aw-sec" id="how">
      <div className="aw-head aw-head--center">
        <span className="ax-label">{how.label}</span>
        <h2 className="aw-head__h">{how.title}</h2>
      </div>
      <ol className="aw-steps">
        {how.steps.map((s) => (
          <li key={s.n} className="aw-step">
            <span className="aw-step__n">{s.n}</span>
            <h3 className="aw-step__name">{s.name}</h3>
            <p className="aw-step__desc">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
