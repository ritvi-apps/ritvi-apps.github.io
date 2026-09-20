/* Ritvi Apps site — Tailwind Play CDN config
   =========================================
   Loaded AFTER https://cdn.tailwindcss.com on every screen.

   EVERY value here is `var(--token)`, never a literal. shared.css defines the
   tokens once in `:root` and remaps them under `prefers-color-scheme: dark`,
   so a utility written against a var follows whichever scheme it lands in.
   A literal hex compiled into `bg-surface` would paint the dark scheme the
   light values, and nothing in the markup would say why.

   The existing site already carries the violet and already answers the dark
   media query. Both are kept — what changes is that this becomes a product
   site instead of a text document.
*/
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg:        'var(--bg)',
        'bg-2':    'var(--bg-2)',
        surface:   'var(--surface)',
        'surface-2':'var(--surface-2)',

        fg:        'var(--fg)',
        'fg-2':    'var(--fg-2)',
        'fg-3':    'var(--fg-3)',
        'fg-inv':  'var(--fg-inv)',

        line:      'var(--line)',
        'line-2':  'var(--line-2)',

        /* Violet — the one brand colour, carried over from the live site. */
        brand:      'var(--brand)',
        'brand-2':  'var(--brand-2)',
        'brand-wash':'var(--brand-wash)',
        'brand-ink':'var(--brand-ink)',

        /* Store — Play green and Apple graphite. Buttons that go to a store
           must not look like buttons that go anywhere else. */
        play:      'var(--play)',
        apple:     'var(--apple)',
        'on-play': 'var(--on-play)',
        'on-apple':'var(--on-apple)',

        /* Availability — the whole information architecture of this site.
           An app is Live, in open Beta, in closed testing, or Coming. The old
           page collapsed the middle two into a dead "Coming soon" div and
           threw away two working beta links in the process. */
        live:       'var(--live)',
        'live-wash':'var(--live-wash)',
        beta:       'var(--beta)',
        'beta-wash':'var(--beta-wash)',
        soon:       'var(--soon)',
        'soon-wash':'var(--soon-wash)',
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },

      fontSize: {
        'd1':    ['var(--fs-d1)',    { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'd2':    ['var(--fs-d2)',    { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h2':    ['var(--fs-h2)',    { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        'h3':    ['var(--fs-h3)',    { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
        'lead':  ['var(--fs-lead)',  { lineHeight: '1.6' }],
        'body':  ['var(--fs-body)',  { lineHeight: '1.65' }],
        'small': ['var(--fs-small)', { lineHeight: '1.55' }],
        'xs2':   ['var(--fs-xs2)',   { lineHeight: '1.5' }],
        'label': ['var(--fs-label)', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },

      letterSpacing: { label: '0.12em' },

      maxWidth: {
        page:    'var(--w-page)',
        prose:   'var(--w-prose)',
        measure: 'var(--w-measure)',
      },

      borderRadius: {
        card: 'var(--r-card)',
        icon: 'var(--r-icon)',   /* 22.37% — the iOS squircle approximation */
        pill: 'var(--r-pill)',
      },

      boxShadow: {
        lift:  'var(--shadow-lift)',
        frame: 'var(--shadow-frame)',
      },

      spacing: {
        section: 'var(--sp-section)',
        gutter:  'var(--sp-gutter)',
      },
    },
  },
}
