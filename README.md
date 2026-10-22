# Jigsaw (web app)

## Put it online with GitHub Pages
1. Create a new public repository on GitHub, for example `jigsaw`.
2. Upload every file and folder from this zip to the repository, keeping the folders as they are.
3. Go to Settings → Pages. Under "Branch", choose `main` and `/ (root)`, then Save.
4. After a minute or two, the app is at `https://YOUR-NAME.github.io/jigsaw/`.

## Install it on an Android phone or tablet
1. Open the link in Chrome.
2. Tap the ⋮ menu, then "Install app" (or "Add to home screen").
3. Open it once while online. After that it also works offline.

## Publishing an update
1. Upload the changed files.
2. In `sw.js`, change `jigsaw-v1` to `jigsaw-v2` (and so on).
3. The app picks up the new version the next time it is opened online,
   and shows it the time after that.

## Renaming the app
Change `name` and `short_name` in `manifest.webmanifest`, and the
`<title>` in `index.html`.
