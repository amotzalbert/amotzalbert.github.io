# Amotz Albert, Portfolio Site

Single-page portfolio. Static HTML/CSS/JS. No build step.
Palette pulled from the 2026 dark CV.

```
site/
├── index.html      Page markup
├── styles.css      Palette + layout
├── app.js          Lightbox + year stamp
├── assets/
│   └── posters/    Auto-extracted 1280w JPGs (one per video)
└── README.md       This file
```

---

## 1. Preview locally

Just open `index.html` in a browser, no server required. For a slightly nicer dev loop:

```bash
cd site
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 2. Upload the 5 pending videos to YouTube

The first reel (Casino1) and WTOS promo are already wired to your existing public YouTube links.
The other 5 still need YouTube IDs. Recommended workflow:

1. Go to <https://studio.youtube.com> → **Create** → **Upload videos**
2. For each file below, set **Visibility = Unlisted** (private link, not in your channel)
3. Copy the 11-char video ID from the URL (e.g. `dQw4w9WgXcQ` from `youtu.be/dQw4w9WgXcQ`)
4. Open `index.html`, find the matching `__UPLOAD_PENDING_*__` placeholder, swap it for the real ID

### Suggested titles & descriptions

Use these as starting points, tighten as you like. Keep tags minimal so the videos don't surface in YouTube search (Unlisted helps too).

| File | Suggested title | Description (short) |
|------|-----------------|---------------------|
| `WTOS_REEL1.mp4` | WTOS Reel, World Tournament of Slots | Long-form creative cut of WTOS animation, motion design, and promo work. Playstudios, 2024. |
| `Bye_Pipa01.mp4` | Bye Pipa, 30s gameplay spot | Short-form gameplay-driven spot for Playstudios casino portfolio. 2025. |
| `POP_2022_Final.mp4` | POP! Slots, 2022 Live Ops creative | Live-ops animation and creative for POP! Slots mobile app. Playstudios, 2022. |
| `MGM_2022_Short_ver2_1.mp4` | MGM Slots, 2022 short | Short cut featuring MGM Slots Live game art and slot mechanics. Playstudios, 2022. |
| `Live2021_001.mp4` | POP! Slots, 2021 Live Ops cut | Early POP! Slots live-ops animation. Playstudios, 2021. |

### Placeholders to replace in `index.html`

```
__UPLOAD_PENDING_WTOS_REEL__   →  WTOS_REEL1 video ID
__UPLOAD_PENDING_BYE_PIPA__    →  Bye_Pipa01 video ID
__UPLOAD_PENDING_POP_2022__    →  POP_2022_Final video ID
__UPLOAD_PENDING_MGM_2022__    →  MGM_2022_Short_ver2_1 video ID
__UPLOAD_PENDING_LIVE_2021__   →  Live2021_001 video ID
```

Until you swap them, clicking those tiles opens a "pending upload" message in the lightbox, the rest of the page works fine.

---

## 3. Deploy to GitHub Pages

You picked the default GitHub Pages URL for now (`amotzalbert.github.io`).
The cleanest setup is a dedicated repo at exactly that name, it becomes your "user site" and serves from the root URL.

### Option A, User site (recommended)

```bash
# from the site/ folder
cd "/Users/amotz/Projects/Claude Projects/projects/portfolio/site"

git init -b main
git add .
git commit -m "Initial portfolio"

# Create the repo on GitHub UI named exactly: amotzalbert.github.io
# Then:
git remote add origin git@github.com:amotzalbert/amotzalbert.github.io.git
git push -u origin main
```

In the repo settings → **Pages** → set **Source = Deploy from a branch**, **Branch = main / root**. Live URL within a minute or two: <https://amotzalbert.github.io>

### Option B, Project site

If you'd rather keep this inside an existing repo, GitHub Pages serves it at `https://<user>.github.io/<repo>/`. Same setup but you'd push to any repo and turn on Pages in settings.

### Custom domain later

When you're ready for `amotzalbert.com`:
1. Add an `A` record at your DNS pointing to GitHub's IPs (185.199.108.153, .109.153, .110.153, .111.153)
2. In repo Settings → Pages, set the custom domain
3. Tick "Enforce HTTPS" once the cert provisions

---

## 4. Updating the site

Pure git workflow:

```bash
# edit index.html, swap a placeholder, etc.
git add index.html
git commit -m "Wire WTOS_REEL1 YouTube ID"
git push
```

Pages redeploys automatically.

---

## 5. Poster thumbnails

Auto-extracted from the middle frame of each video. If any of them landed on a bad frame, replace the file in `assets/posters/`, keep the same filename and dimensions (1280px wide JPG). Or re-run:

```bash
# from the portfolio root, single video example
ffmpeg -ss 12.5 -i _chosen/Bye_Pipa01.mp4 -frames:v 1 \
  -vf "scale='min(1280, iw)':-2" -q:v 4 \
  site/assets/posters/Bye_Pipa01.jpg
```

---

## Notes

- The page does not ship the raw video files, they're far too big for GitHub Pages (POP_2022_Final.mov alone is 1.8 GB). Everything plays via embedded YouTube.
- All embeds use `youtube-nocookie.com` + `rel=0&modestbranding=1` to keep the player clean and avoid related-videos chrome.
- No analytics or tracking. Add Plausible or Fathom later if you want stats.
