# 🎨 COLOR PALETTE & DESIGN SYSTEM

## Color Variables

```css
:root {
  /* Primary Colors */
  --bg-primary: #F3F9FE;        /* Background utama - Abu-abu biru sangat muda */
  --color-primary: #008bff;     /* Biru utama - Untuk CTA dan aksen */
  --color-secondary: #c72023;   /* Merah - Untuk aksen tambahan */
  
  /* Text Colors */
  --color-text: #1a1a1a;        /* Hitam untuk teks utama */
  --color-text-light: #666;     /* Abu-abu untuk teks sekunder */
  --color-white: #ffffff;       /* Putih */
  
  /* UI Colors */
  --color-border: #e0e0e0;      /* Abu-abu untuk border */
  --color-hover: #0073d9;       /* Biru lebih gelap untuk hover */
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
}
```

---

## Color Usage Guide

### Background Primary (#F3F9FE)
**Usage:**
- Background utama landing page
- Background login page
- Background untuk section alternatif
- Padding area untuk cards

**Characteristics:**
- Sangat terang dan lembut
- Memberikan kesan clean dan fresh
- Tidak mencolok, nyaman untuk mata
- Professional dan modern

**Don't Use For:**
- Text (kontras terlalu rendah)
- Buttons (terlalu terang)

---

### Color Primary (#008bff)
**Usage:**
- Primary buttons (CTA)
- Links dan hover states
- Icons aktif
- Badges dan tags
- Loading indicators
- Active menu items

**Hover State:** #0073d9 (lebih gelap)

**With Opacity:**
```css
/* Light background untuk badges */
rgba(0, 139, 255, 0.1)  /* 10% opacity */

/* Hover effects untuk cards */
rgba(0, 139, 255, 0.3)  /* 30% opacity */
```

**Best Paired With:**
- White text
- White background
- #F3F9FE background

**Don't Use For:**
- Body text (use --color-text)
- Large background areas (too bright)

---

### Color Secondary (#c72023)
**Usage:**
- Important notifications
- Error messages
- Alert badges
- Accent elements
- Warning buttons
- Delete actions

**With Opacity:**
```css
/* Light background untuk alerts */
rgba(199, 32, 35, 0.1)  /* 10% opacity */
```

**Best Paired With:**
- White text
- White background
- Used sparingly for emphasis

**Don't Use For:**
- Primary CTAs (use primary blue)
- Regular links
- Success messages (use green)

---

### Text Colors

#### Primary Text (#1a1a1a)
**Usage:**
- Headings
- Body text
- Important labels
- Form labels

**Characteristics:**
- Hampir hitam tapi tidak pure black
- Lebih lembut untuk mata
- Kontras tinggi dengan background

#### Light Text (#666)
**Usage:**
- Descriptions
- Helper text
- Placeholder text
- Secondary information
- Footer text
- Timestamps

**Characteristics:**
- Abu-abu medium
- Kontras cukup untuk readability
- Hierarchy visual yang jelas

---

### UI Colors

#### Border (#e0e0e0)
**Usage:**
- Input borders
- Card borders
- Dividers
- Separator lines
- Table borders

**Characteristics:**
- Subtle tapi visible
- Tidak mengganggu
- Professional look

#### White (#ffffff)
**Usage:**
- Card backgrounds
- Form backgrounds
- Modal backgrounds
- Button text
- Navbar background
- Footer sections

---

## Color Combinations

### ✅ Good Combinations

#### Primary Button
```css
background: #008bff
color: #ffffff
```

#### Secondary Button
```css
background: #ffffff
color: #1a1a1a
border: 2px solid #e0e0e0
```

#### Card with Hover
```css
background: #ffffff
border: 2px solid transparent
hover:border-color: #008bff
```

#### Badge - Info
```css
background: rgba(0, 139, 255, 0.1)
color: #008bff
```

#### Badge - Error
```css
background: rgba(199, 32, 35, 0.1)
color: #c72023
```

#### Badge - Success
```css
background: rgba(34, 197, 94, 0.1)
color: #22c55e
```

---

### ❌ Avoid These Combinations

```css
/* ❌ Low contrast - hard to read */
background: #F3F9FE
color: #666

/* ❌ Too aggressive */
background: #c72023
color: #008bff

/* ❌ Primary and secondary together as backgrounds */
background: linear-gradient(#008bff, #c72023)
```

---

## Additional Color Palette (For Status & Alerts)

```css
/* Success */
--color-success: #22c55e;
--color-success-light: rgba(34, 197, 94, 0.1);

/* Warning */
--color-warning: #fbbf24;
--color-warning-light: rgba(251, 191, 36, 0.1);

/* Danger/Error */
--color-danger: #ef4444;
--color-danger-light: rgba(239, 68, 68, 0.1);

/* Info (same as primary) */
--color-info: #008bff;
--color-info-light: rgba(0, 139, 255, 0.1);
```

---

## Typography Scale

```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 2rem;      /* 32px */
--text-4xl: 2.5rem;    /* 40px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.5rem;    /* 56px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

---

## Spacing Scale

```css
/* Spacing */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

---

## Border Radius Scale

```css
/* Border Radius */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Full rounded */
```

---

## Shadow Scale

```css
/* Shadows */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.18);

/* Colored shadows for buttons */
--shadow-primary: 0 8px 20px rgba(0, 139, 255, 0.3);
--shadow-secondary: 0 8px 20px rgba(199, 32, 35, 0.3);
```

---

## Animation Timing

```css
/* Transitions */
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
--transition-slower: 0.5s ease;

/* Easing functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Design Principles

### 1. **No Gradients**
- Use solid colors only
- Clean and professional
- Better performance
- Easier to maintain

### 2. **Subtle Hover Effects**
- Small transforms (2-4px)
- Smooth transitions (0.2s)
- Don't distract users
- Provide clear feedback

### 3. **Consistent Spacing**
- Use spacing scale
- Maintain rhythm
- Visual hierarchy
- Breathing room

### 4. **High Contrast**
- Readable text
- Accessible to all
- WCAG AA compliant
- Clear UI elements

### 5. **Visual Hierarchy**
- Size differences clear
- Weight variations
- Color for emphasis
- Spacing for groups

---

## Accessibility Notes

### Color Contrast Ratios

**Text on Background:**
```
#1a1a1a on #ffffff = 19.1:1 ✅ AAA
#1a1a1a on #F3F9FE = 18.4:1 ✅ AAA
#666 on #ffffff = 5.7:1 ✅ AA
#666 on #F3F9FE = 5.5:1 ✅ AA
```

**Primary Blue:**
```
#008bff on #ffffff = 3.5:1 ✅ AA (large text)
#ffffff on #008bff = 3.5:1 ✅ AA (buttons)
```

**Secondary Red:**
```
#c72023 on #ffffff = 5.8:1 ✅ AA
#ffffff on #c72023 = 5.8:1 ✅ AA
```

---

## Usage Examples

### Button Variants
```css
/* Primary */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
}

/* Secondary */
.btn-secondary {
  background: var(--color-white);
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

/* Danger */
.btn-danger {
  background: var(--color-secondary);
  color: var(--color-white);
}
```

### Badge Variants
```css
/* Info */
.badge-info {
  background: rgba(0, 139, 255, 0.1);
  color: var(--color-primary);
}

/* Success */
.badge-success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

/* Warning */
.badge-warning {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
}

/* Danger */
.badge-danger {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
```

---

## 🎨 Quick Reference

| Element | Background | Text | Border |
|---------|-----------|------|--------|
| Page | #F3F9FE | #1a1a1a | - |
| Card | #ffffff | #1a1a1a | #e0e0e0 |
| Primary Button | #008bff | #ffffff | - |
| Secondary Button | #ffffff | #1a1a1a | #e0e0e0 |
| Input | #F3F9FE | #1a1a1a | #e0e0e0 |
| Input (Focus) | #ffffff | #1a1a1a | #008bff |
| Badge | rgba(0,139,255,0.1) | #008bff | - |
| Navbar | #ffffff | #1a1a1a | #e0e0e0 |
| Footer | #1a1a1a | #ffffff | - |

---

*Reference this guide when adding new components or making design decisions*
