# Portfolio

Personal portfolio website built with Astro and TailwindCSS.

## Project Structure

- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/data/projects.json` - Project data
- `public/projects/` - Project assets (images, videos)

## Modifying Content

### Projects

Edit `src/data/projects.json` to add, remove, or modify projects. Each project needs:

- `slug` - URL-friendly identifier (used in folder names)
- `title`, `subtitle`, `shortDescription`, `description` - Text content
- `thumbnail` - Path to cover image (e.g., `/projects/cuphead-vertical-slice/cuphead-vertical-slice-cover.jpg`)
- `tech`, `tags` - Technology tags
- `github` - Repository URL
- `features`, `contribution` - Arrays of strings
- `codeSnippets` - Code examples to display

### Thumbnails

Place project cover images in `public/projects/[slug]/[slug]-cover.jpg` and reference them in `projects.json` as `/projects/[slug]/[slug]-cover.jpg`.

### Styles

Main styles are in `src/styles/global.css`. Component-specific styles use TailwindCSS classes. The design system uses a dark theme with slate/sky color palette.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Project thumbnails are static images (no hover animations)
- Project detail pages show showreel videos, art/code GIFs, and project information
- Keep the codebase minimal and avoid over-engineering

