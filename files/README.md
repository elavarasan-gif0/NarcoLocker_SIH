# NarcoLocker prototype — code package

## Files

- **NarcoLocker.html** — the runnable prototype. Open it directly in a browser (needs internet access once, to load React/Babel/icons from a CDN).
- **NarcoLocker-source.jsx** — the full, human-readable React source (~3500 lines). This is the file to edit.

## Why two files

`NarcoLocker.html` is a single self-contained file: it loads React, Babel and the icon library from a CDN, then compiles and runs the app's JSX **in the browser** at load time. To keep that one file manageable, the JSX itself is stored inside it as base64 text rather than pasted in raw. `NarcoLocker-source.jsx` is that same code decoded — a normal, readable, editable JSX file.

## How to make changes

1. Edit `NarcoLocker-source.jsx` in any editor (VS Code, etc.).
2. Re-embed it into the HTML with the snippet below (Python 3, no extra libraries needed):

```python
import re, base64

with open("NarcoLocker.html", encoding="utf-8") as f:
    html = f.read()

with open("NarcoLocker-source.jsx", "rb") as f:
    source = f.read()

b64 = base64.b64encode(source).decode("ascii")
html = re.sub(r'const encodedSource = "[^"]+";',
              f'const encodedSource = "{b64}";', html)

with open("NarcoLocker.html", "w", encoding="utf-8") as f:
    f.write(html)
```

3. Open the updated `NarcoLocker.html` in a browser to check it.

**If you add a new lucide icon** (e.g. `<Star />`), also add `Star` to the
`runtimePrefix` destructuring list near the bottom of `NarcoLocker.html`
(`const { Home, FolderClosed, ... } = Icons;`) — icons aren't auto-imported.

## Structure of the source file

- **Design tokens** (`C`, fonts, `NL_CSS`) — colors, typography, shared animations
- **Demo data** — `OFFICER`, `SEED_CASES`, `NOTIFICATIONS`, `AUDIT`, and the new
  `ADMIN`, `ADMIN_PASSWORD`, `OFFICERS_SEED`, `ADMIN_AUDIT`
- **Primitives** — `Card`, `Btn`, `Pill`, `Input`, `Field`, `Banner`, etc. (reused everywhere)
- **Officer flow** — `Splash → Login → Shell (Home/Cases/NewCase/Capture/.../Profile)`
- **Admin flow (new)** — `RoleSelect → AdminLogin → AdminShell (Dashboard/Cases/Officers/Security/Reports)`
- **`App()`** at the very bottom — top-level screen state and routing between all of the above

## Admin demo credentials

- Admin ID: `NCB-ADMIN-014`
- Password: `Admin@2026`
