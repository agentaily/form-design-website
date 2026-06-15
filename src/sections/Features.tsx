import { Card, Icon } from "@agentaily/design-system";
import { useMessages } from "../i18n";

// 能力 / Features — a four-up grid of capability cards in a full-bleed panel
// band. Each card pairs a DS Icon glyph with a name + description; all copy
// comes from the i18n catalog.
export function Features() {
  const { features } = useMessages();
  return (
    <section className="aw-sec aw-band" id="features" style={{ maxWidth: "none" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="aw-head">
          <span className="ax-label">{features.label}</span>
          <h2 className="aw-head__h">{features.title}</h2>
          <p className="aw-head__p">{features.subtitle}</p>
        </div>
        <div className="aw-feats">
          {features.items.map((f) => (
            <Card key={f.name} padding="lg">
              <div className="aw-feat">
                <span className="aw-feat__ic">
                  <Icon name={f.icon} size={19} />
                </span>
                <h3 className="aw-feat__name">{f.name}</h3>
                <p className="aw-feat__desc">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
