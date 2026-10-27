# Púsla (web app)

## Adding puzzles
1. Put the picture in a folder inside `puzzles/`. The folder name becomes the
   category, for example `puzzles/Paintings/Winter skaters.jpg`.
2. Add the file name to `puzzles.json`, under its category:

```json
{
  "Landscapes": ["01 Lakeside village.jpg", "02 Harbour at dusk.jpg"],
  "Paintings":  ["Winter skaters.jpg"]
}
```

- The puzzle's name is the file name, without the ending (`.jpg`).
- A number at the start, like `01 `, only sets the order and is hidden.
- Underscores and hyphens become spaces.
- Categories appear in the same order as in the file.
- If a picture is missing or misspelled, only that card shows an error;
  the rest keep working.
- Good puzzle pictures are at least about 2000 px on the long side.

Tip: if you replace a picture but keep the same file name, the old
thumbnail stays on devices that have already seen it. Use a new file name.

## Put it online with GitHub Pages
1. Create a public repository on GitHub, for example `jigsaw`.
2. Upload every file and folder from this zip, keeping the folders as they are.
3. Settings → Pages → "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. After a minute or two, the app is at `https://YOUR-NAME.github.io/jigsaw/`.

## Install it on an Android phone or tablet
Open the link in Chrome → ⋮ menu → "Install app". Open it once while online.

## Publishing an update to the app itself
Upload the changed files, and in `sw.js` change `pusla-v9` to the next number.
New puzzles don't need this step: the puzzle list is always checked first.

## Offline
Each puzzle picture is saved on the device the first time the list shows it,
so after one visit online, all puzzles work offline.
