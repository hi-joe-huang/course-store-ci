import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'global-background': 'hsl(var(--color-global-background) / <alpha-value>)',
        'primary': 'hsl(var(--color-primary) / <alpha-value>)',
        'accent':  'hsl(var(--color-accent) / <alpha-value>)',
        'accent-light':  'hsl(var(--color-accent-light) / <alpha-value>)'
      }
    }
  }
}