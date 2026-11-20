# Kabir Media Downloader

Database-free static Next.js site. Visitors resolve links in the browser against `index.json` and download public files from the static `out/` export. No application server, credentials, database, or serverless function is required.

## Windows PowerShell

```powershell
npm install
npm run demo
npm run build
npx serve out -l 3000
```

Open http://localhost:3000 and paste:

- `https://youtu.be/kabir-sample`
- `https://www.facebook.com/reel/kabir-sample`
- `https://www.instagram.com/reel/KabirSample/`

`npm run demo` creates a 360×640 portrait MP4 with sound using the pinned FFmpeg binary, converts it to MP4, WebM, and MP3, and writes `public/index.json` plus `public/media/*`. The browser only requests the selected media file after a visitor clicks a download link.

## Publish your own media

Edit [media/sources.json](./media/sources.json) with local originals you have rights to distribute. Set each source path and its YouTube, Facebook, Instagram, or Facebook share aliases, then run:

```powershell
npm run media:prepare
npm run build
```

Deploy the generated `out/` directory to any static host. Original files stay outside the public export. The source list is the catalog; rebuilding removes the old generated catalog/media before writing the new release.

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. Enable Pages in the repository settings with **Source: GitHub Actions**, then every push to `main` will prepare the demo media, run typecheck/tests, build with the repository base path, and deploy `out/` automatically. The project site URL will be `https://KDS100-debug.github.io/kabir-media-downloader/`.

## Checks

```powershell
npm run typecheck
npm test
npm run build
```

The generated static site uses the shared URL normalizer in [lib/catalog.ts](./lib/catalog.ts), preserves Instagram shortcode case, distinguishes invalid links from missing catalog entries, and gives unresolved Facebook shares a specific message. FFmpeg and ffprobe are supplied by `ffmpeg-static` and `ffprobe-static`; set `FFMPEG_PATH` or `FFPROBE_PATH` to use system binaries.
