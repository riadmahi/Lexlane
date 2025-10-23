# Assets Directory

Ce dossier contient les assets qui seront importés et traités par le bundler (Webpack/Turbopack).

## 📁 Structure

```
assets/
├── images/          # Images importées dans le code
│   └── .gitkeep
└── icons/           # Icônes SVG converties en composants
    └── .gitkeep
```

## 📖 Usage

### Images
```tsx
import logo from '@/assets/images/logo.png';

export function Logo() {
  return <img src={logo} alt="Logo" />;
}
```

### Icônes SVG (avec SVGR)
```tsx
import CheckIcon from '@/assets/icons/check.svg';

export function Success() {
  return <CheckIcon className="w-6 h-6" />;
}
```

## 💡 Quand utiliser assets/ vs public/ ?

### Utilisez `assets/` pour :
- Images utilisées dans les composants React
- Assets qui bénéficient de la gestion du bundler
- Fichiers qui nécessitent un hash pour le cache-busting
- SVG convertis en composants React

### Utilisez `public/` pour :
- Images statiques référencées directement (favicon, og-image)
- Fichiers servis tels quels sans transformation
- Assets utilisés avec next/image
- Fichiers robots.txt, sitemap.xml, etc.
