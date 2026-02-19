# Elementor Style Guide — jeffbuckner.com

One-page reference for matching the main site design in Elementor: hex values and where to set them (Global Colors, Global Fonts).

---

## Global Colors

Set these in **Elementor → Site Settings → Global Colors** (or Theme Builder → Theme Style). Use the names below as your global labels so widgets can reference them.

| Elementor global name | Hex | Use on site |
|----------------------|-----|-------------|
| **Primary** (or Navy) | `#16243E` | Primary background, CTAs, deep UI |
| **Secondary** (or Rust) | `#7C2D12` | Accents, warmth, underlines, links on hover |
| **Accent** (or Red) | `#991B1B` | Critical call-outs, active indicators |
| **Background** (or Paper) | `#FDFCFB` | Main page background |
| **Text Primary** (or Slate 900) | `#0F172A` | Headings, primary text |
| **Text Body** (or Slate 700) | `#334155` | Body copy, paragraphs |
| **Text Secondary** (or Slate 600) | `#475569` | Supporting text, links |
| **Text Muted** (or Slate 400) | `#94A3B8` | Labels, captions, nav, placeholders |
| **Text Faded** (or Slate 300) | `#CBD5E1` | Very muted labels, small UI text |
| **Border** (or Slate 200) | `#E2E8F0` | Buttons, cards, inputs |
| **Border Light** (or Slate 100) | `#F1F5F9` | Dividers, subtle borders |
| **Background Subtle** (or Slate 50) | `#F8FAFC` | Subtle panels, hover states |

### Quick copy — hex only

```
#16243E  #7C2D12  #991B1B  #FDFCFB
#0F172A  #334155  #475569  #94A3B8
#CBD5E1  #E2E8F0  #F1F5F9  #F8FAFC
```

---

## Global Fonts

Set in **Elementor → Site Settings → Global Fonts** (or Theme Style → Typography).

| Elementor global name | Font | Weight | Use on site |
|-----------------------|------|--------|-------------|
| **Primary** (Headings) | Inter | Bold (700) | Headlines, nav, buttons, UI labels |
| **Secondary** (Body) | Inter | Regular (400) / Light (300) | Body text, paragraphs |
| **Accent** (Quote) | Crimson Pro | Light (300) italic | Quotes, taglines, emphasis |

- **Inter**: structural, modern, authority. Use for all UI and most body text.
- **Crimson Pro**: serif, human tone. Use for pullquotes, taglines, and short emphasis blocks.

---

## Letter spacing (tracking)

Use these values in **Elementor → Typography → Letter Spacing** so Elementor matches the main site. Values are in **em** (relative to font size); Elementor may show px — use the em value when possible.

| Value | Use on site |
|-------|-------------|
| **-0.05em** (tighter) | Large headlines (H1, hero title, nav logo) |
| **-0.025em** (tight) | Section titles (H2), subheads |
| **0** (normal) | Body paragraphs (no extra tracking) |
| **0.05em** (wider) | Small headings, color/label names |
| **0.1em** (widest) | Nav links, buttons, small uppercase labels, footer links |
| **0.15em** | Primary/secondary buttons (CTA style) |
| **0.2em** | Section overlines, small caps, “CONSULTATION” style labels |
| **0.3em** | Overlines (“Offering”, “The Mission”), card labels (“Conviction 01”), footer column titles |
| **0.4em** | Hero badge, design-system label, footer tagline |

### Quick copy — em values only

```
-0.05em  -0.025em  0  0.05em  0.1em  0.15em  0.2em  0.3em  0.4em
```

---

## Where to set what in Elementor

- **Global Colors**  
  Site Settings → Global Colors: add each row from the table above; then in widgets choose “Global” and pick the right color (e.g. Primary, Text Primary, Border).

- **Global Fonts**  
  Site Settings → Global Fonts: define Primary (Inter), Secondary (Inter), Accent (Crimson Pro italic). In Typography for headings, use Primary; for body, use Secondary; for quotes/emphasis, use Accent.

- **Default page background**  
  Set to **Background** / `#FDFCFB` in Theme Style or page layout so it matches the main site.

- **Links**  
  Default link color **Text Secondary** or **Secondary** (Rust); hover **Secondary** (Rust) or **Primary** (Navy) as on the current site.

---

*Source: Design System v1.0 — `components/StyleGuide.tsx` and slate usage across the repo.*
