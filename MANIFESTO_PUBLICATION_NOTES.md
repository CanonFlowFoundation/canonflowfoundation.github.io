# MANIFESTO_PUBLICATION_NOTES.md — Launch Packet for /manifesto/

> Internal companion to `manifesto.md`. The page ships clean; this file
> carries the remediation work, site structure, and doc-set bindings.
> Integration pass 2026-07-18. Subordinate to `CANONFLOW_BASE.md`;
> executes under `CFF_PIPELINE.md`.

---

## 1 · The claims correction is drift remediation, not copyediting

The current sites carry claims the Base classifies as violations, and they
must be corrected **before or with** the manifesto's publication — a
manifesto that says "evidence must precede confidence" published beside
"Zero Penalties" is self-refuting on day one.

Formal framing: `capability manifest ↔ README ↔ website ↔ UI` is a declared
drift surface (Base §34.2). The current site is a **LooseTarget at high
risk** — the public surface admits claims the evidence rejects — and
high-risk loose drift blocks release. This is therefore one R0/R1
documentation packet (`SITE-0001`) under the Pipeline, with a truthful-docs
CI diff as its acceptance evidence, not ad-hoc edits.

| Current claim | Violation | Replacement |
|---|---|---|
| "Bulletproof GST Compliance" | §1 mission law: never a compliance promise | "GST preflight before you file" |
| "Zero Penalties" | unbounded guarantee | "Detect preventable risks earlier" |
| "Guaranteed Accuracy" | §3: nothing proves legal correctness | "Deterministic checks with explicit limits" |
| "Ready to File" | §25: forbidden UI copy verbatim | "No issues found by rule pack X" |
| "100% compliant" | §31 status law | "Produces replayable evidence for bounded claims" |
| "mathematically prove compliance" | proof ≠ legal truth (Seal §1, LIQUID §0) | "reproducible evidence for bounded, stated checks" |
| "zero drift" | drift is measured and classified, never zero by assertion | "classified fidelity and drift reporting" |
| capabilities marked "Complete" | §31: status requires gate evidence | honest per-capability status table |
| "every repository is MIT-licensed" | factually false (GSTFlow is Apache-2.0) | actual license stated separately per project |

Acceptance for `SITE-0001`: no page contains a forbidden claim pattern
(grep-able list above as fixtures) ∧ every project page states its own
license ∧ every capability shown carries a §31 status ∧ the manifesto and
both homepages link each other.

---

## 2 · Terminology — the reservation table is now three entries

The manifesto's vocabulary rule joins the Pipeline §0.1 terminology law:

```text
CFF                          = CanonFlow Format. Only. Ever.
Forge                        = the AI candidate-generation line (dormant)
Constitution-First Software  = the movement (never "CFF")
```

Sweep both sites, the doc set, and repository prose for violations in the
same `SITE-0001` packet. The public vocabulary table in the manifesto is
the outward face of this law.

---

## 3 · Manifesto ↔ Base commitment mapping (keep current, never publish claims beyond it)

The manifesto is a **reviewed projection** of the constitutions (LAT-005
discipline; the page's own footer says so). The mapping that keeps it
honest:

| Manifesto commitment | Governing law |
|---|---|
| 1 Every claim has a boundary | Base §1, §25, §31 |
| 2 Reproducible evaluation | Base §4, §10, §14.2 |
| 3 Unknown is honest | Base §6 |
| 4 Evidence travels with the verdict | Base §18 CFF law |
| 5 Change is governed | Base §10, §43 |
| 6 AI assists, never authority | Base §15, §22; Pipeline cage |
| 7 Tests necessary, insufficient | Base §3 trust hierarchy |
| 8 Reveal what it cannot know | Base §6, §34 fidelity |

A future Base amendment that touches any of these triggers a manifesto
review; a manifesto edit never amends the Base (authority flows one way).

---

## 4 · Site structure

Top navigation: **Manifesto · Method · Constitutions · Projects · Writing ·
Foundation**

| Page | Purpose |
|---|---|
| `/` | Introduce the movement in plain language |
| `/manifesto/` | The short public declaration |
| `/method/` | Law → Type → Function → Proof → Implementation |
| `/principles/` | Expanded engineering and governance principles |
| `/constitutions/` | Index of normative constitutions and amendments |
| `/profiles/` | Architecture Profiles and Domain Profiles |
| `/evidence/` | Evidence, provenance, replay, CanonFlow Format |
| `/conformance/` | What adopting or conforming means |
| `/projects/` | CanonFlow, GSTFlow, EDIFlow, future projects |
| `/writing/` | Blog, explainers, decisions, field reports, releases |
| `/governance/` | Foundation status, RFCs, amendments, decisions |
| `/roadmap/` | Evidence-based roadmap with honest statuses |
| `/contribute/` | Routes for developers and domain experts |

**Constitution library** — `/constitutions/{base,amendments,status-model}` ·
each shows: version, status, custodian, scope, normative laws, falsifiers,
evidence, amendment history.

**Architecture profiles** — `/profiles/architecture/{verification-engine,
system-of-record,dataflow-etl}`. The distinction that must stay sharp:
a Verification Engine evaluates evidence and produces verdicts; a System of
Record owns drafts, mutations, and authoritative state; Dataflow/ETL moves
and transforms governed information. CRUD and ETL live here — never under
domains.

**Domain profiles** — `/profiles/domain/{gst,edi,ondc,epcis}` — governed
domain knowledge, not application architecture.

**Evidence** — `/evidence/{canonflow-format,provenance,deterministic-replay,
conformance-kits,examples}`. The CFF page states:

> CanonFlow Format is a portable, versioned evidence container for inputs,
> rule identities, evaluation context, findings, provenance, limitations,
> hashes, signatures, and deterministic replay. A CFF artifact is evidence
> of an evaluation. It is not automatically a commercial fact, legal
> approval, filing confirmation, or guarantee.

**Projects** — `/projects/{canonflow,gstflow,ediflow,capability-ledger}`,
each page: what it is · who it helps · what it currently checks · what it
does **not** check · capability status · evidence and demonstrations ·
repository and license · current limitations · roadmap. GSTFlow boilerplate:

> GSTFlow is an offline-first, deterministic and advisory GST preflight
> engine. It detects supported structural, arithmetic, statutory and
> cross-document risks before filing and produces reproducible evidence.
> It is not an ERP, filing authority, legal opinion, or guarantee of
> compliance.

**Homepage** — hero:

> Software should not ask for trust it has not earned.
>
> CanonFlow Foundation advances Constitution-First Software: an open
> discipline for turning declared laws into explicit models, deterministic
> functions, reproducible evidence, and inspectable implementations.

Buttons: Read the Manifesto · Understand the Method · Explore the Projects.
Then exactly four sections: Why Constitution-First? · The method · Projects
and their honest status · Latest writing. RFCs, architecture detail,
benchmarks, and contribution instructions move to their own pages.

---

## 5 · Blog structure and tagging

Structured metadata over loose tags:

```yaml
title:
date:
type: explainer | field-note | case-study | rfc | release | governance
status: draft | proposed | accepted | implemented | superseded
projects: [foundation, canonflow, gstflow]
topics: [determinism, provenance, evidence]
profiles: [verification-engine, gst]
related: [/manifesto/, /evidence/canonflow-format/]
```

Topic vocabulary: constitution-first · law-type-function-proof ·
determinism · provenance · visible-uncertainty · system-of-proof ·
architecture-profile · domain-profile · canonflow-format · conformance ·
ai-and-authority · offline-first · governance · gst · edi · ondc · epcis.
Three to five meaningful tags per article.

First ten articles:

1. Why Constitution-First Software?
2. Agile Governs Change; Constitutions Govern What Must Survive Change
3. Law → Type → Function → Proof → Implementation
4. What "Proof" Means — and Does Not Mean — in CanonFlow
5. Verification Engine vs System of Record
6. Unknown Is a Valid and Necessary Verdict
7. Why GSTFlow Is Advisory, Not a Filing Authority
8. CanonFlow Format: Evidence That Can Travel
9. Where AI Helps — and Where It Must Not Become Authority
10. From GSTFlow Evidence Back to the CanonFlow Constitution

Articles 4, 6, and 9 have their normative spines already written (LIQUID §0,
Base §6, Base §15 + Pipeline cage) — write them as projections, link back,
never restate law wholesale (LAT §0.1 discipline applies to the site too).

---

## 6 · Publication order

```text
1. Open SITE-0001 (claims remediation + terminology sweep + license audit).
2. Land manifesto.md as Draft 0.1 at /manifesto/ in the same change.
3. Replace both heroes; link the manifesto prominently from both sites.
4. Add the per-project status tables (source: capability manifests, §31).
5. Wire the truthful-docs diff into site CI (forbidden-claim fixtures).
6. Publish articles 1–3; the rest follow evidence, not calendar.
```

Optional, custodian's choice: a single epigraph on the Foundation homepage —
Kural 423, *"Whichever mouth speaks, wisdom discerns the truth of the
matter"* — which is the trust hierarchy in seven ancient words, and states
the Foundation's Tamil intellectual lineage without a line of jargon. It
belongs on the homepage or /method/, not inside the manifesto, which should
remain culturally unmarked for global adoption.

---

## 7 · Doc-set deltas

- Pipeline §0.1 terminology law → three-entry reservation table (§2 above).
- Base §38 landmine "README becomes fiction" → falsifier now executable:
  the forbidden-claim fixture list in site CI.
- LAT `authority.md` node → links the manifesto as a public projection with
  one-way authority flow (§3 mapping table lands there, not on the site).
- Capability ledger project page ↔ Base §31: the site's status tables are
  generated projections of capability manifests, never hand-edited — a
  hand-edited status is the "generator silently drops meaning" landmine in
  reverse.
