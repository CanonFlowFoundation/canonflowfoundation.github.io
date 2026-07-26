---
title: Constitution-First Software Manifesto
permalink: /manifesto/
version: "Draft 0.1"
status: draft
date: 2026-07-16
steward: CanonFlow Foundation
---

# Constitution-First Software Manifesto

**Draft 0.1 · 16 July 2026**

> This is a living draft. The central direction is established, but its
> wording, profiles, conformance rules, and governance will evolve through
> public discussion, implementation, evidence, and real-world contact.
>
> Publication is not proof that every CanonFlow project already conforms.

---

Software increasingly interprets rules that affect money, rights,
obligations, safety, access, and trust.

Yet important rules are often discovered only after implementation — in
scattered code, undocumented assumptions, mutable configuration, database
behaviour, prompts, and accidental edge cases.

When the law exists only inside the implementation, people cannot review it
before the software acts.

When a verdict carries no reproducible evidence, it asks for trust it has
not earned.

We believe software should begin with an explicit, governed constitution.

## We have come to value

- **Explicit laws** over hidden assumptions
- **Valid models** over late corrective validation
- **Reproducible evidence** over confident claims
- **Deterministic verdicts** over probabilistic guesses
- **Visible uncertainty** over silent approximation
- **Accountable human stewardship** over automated authority

The things on the right can remain useful. When they conflict, the things
on the left govern the system.

## Our method

> **Law → Type → Function → Proof → Implementation**

**Law** states what must be true, what may vary, who has authority, and
where the boundary lies.

**Type** represents valid states, invalid states, uncertainty, provenance,
and lifecycle explicitly.

**Function** transforms one declared state into another without hiding
meaning or effects.

**Proof** provides evidence appropriate to the claim: sources, examples,
tests, properties, review, reproducible execution, and — where appropriate —
formal proof.

**Implementation** supplies interfaces, storage, networks, frameworks, and
deployment only after the governing meaning is clear.

Implementation is necessary. It is simply not the first authority.

## Our commitments

**1 · Every claim has a boundary.**
No system is "correct," "compliant," or "complete" without stating what was
checked, which rules were used, which facts were available, and what remains
unknown.

**2 · The same governed evaluation is reproducible.**
Given the same canonical input, rule pack, evaluation context, and engine
version, the system must produce the same canonical verdict.

**3 · Unknown is an honest result.**
Missing evidence, unsupported interpretation, ambiguity, approximation, and
conflict must remain visible. They must never be silently converted into
success.

**4 · Evidence travels with the verdict.**
A verdict should identify its inputs, rules, sources, versions, provenance,
findings, limitations, and reproducible evidence.

**5 · Change is governed, not hidden.**
A changed rule creates a new version. A corrected input creates a new
evaluation. Previous evidence is preserved rather than rewritten to make
history appear successful.

**6 · AI may assist, but it does not silently become authority.**
AI may help discover, explain, author, test, or review candidate rules. A
probabilistic response is not automatically a law, verdict, or proof.

**7 · Tests are necessary but insufficient.**
Production trust also requires governed sources, accountable review,
real-world contact, and evidence from actual use.

**8 · Software must reveal what it cannot know.**
A trustworthy system explains not only its answer, but also the limits of
that answer.

## What Constitution-First does not mean

Constitution-First Software is:

- **Not** tied to F#, functional programming, or any particular technology.
- **Not** a demand for enormous specifications before learning begins.
- **Not** opposition to Agile development.
- **Not** a claim that every test is a mathematical proof.
- **Not** an attempt to automate human judgment out of governance.
- **Not** a promise that software can determine every legal or real-world
  truth.
- **Not** permission to describe unfinished systems as proven.

A constitution can begin small. It must be explicit, falsifiable,
versioned, and honest about its status.

## Relationship to Agile

Agile helped software respond to change.

Constitution-First Software asks a complementary question:

> While we change, what must remain true — and how will we prove that it
> remained true?

Agility governs adaptation. A constitution governs the invariants,
authority, evidence, and boundaries within that adaptation.

## One vocabulary

| Concept | Canonical name |
|---|---|
| Movement | Constitution-First Software |
| Manifesto | Constitution-First Software Manifesto |
| Discipline | Constitution-First Engineering |
| Method | Law → Type → Function → Proof → Implementation |
| Governed specification | Constitution |
| Specialization | Architecture Profile ⊕ Domain Profile |
| Portable evidence | CanonFlow Format |
| Public steward | CanonFlow Foundation |

Avoid calling the movement "CFF." Reserve **CFF** for **CanonFlow Format**
so the public terminology remains unambiguous.

## Stewardship

The CanonFlow Foundation is presently the public project identity and
steward of this work.

It is being developed as an open, non-commercial, public-interest
initiative. No monetization is planned. Formal nonprofit status and mature
community governance are future work and will not be claimed before they
exist.

Future stewardship should remain mission-compatible, transparent, and
resistant to capture by any individual, vendor, or commercial interest.

---

*An initiative of the CanonFlow Foundation.*

*The manifesto is a public projection of the project's governing
constitutions. Where they differ, the [constitutions](/constitutions/)
govern.*
