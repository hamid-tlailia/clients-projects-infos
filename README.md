# Client Project Brief

A bilingual (English / Arabic) landing page you can send to clients. They describe their project
(contact details, project type, platforms, features, budget, timeline, package, description) and
press one button that opens WhatsApp with all the details pre-filled to **+974 7100 9494**.

- Default language: English. Toggle with the button in the header.
- Send `.../index.html?lang=ar` to open the page directly in Arabic.
- Pure static site (`index.html`, `styles.css`, `script.js`) — no server or build step.

## Customise
Edit the top of `script.js`:
- `CONFIG.whatsappNumber` — receiving number (digits only, with country code).
- `PROJECT_TYPES`, `FEATURES`, `BUDGET`, `PACKAGES`, … — options and package texts/prices (EN + AR).

## Publish (GitHub Pages)
Repository **Settings → Pages → Build and deployment → Deploy from a branch**, choose the branch
and `/ (root)`, then save. The link will be `https://<user>.github.io/clients-projects-infos/`.
Netlify / Vercel / Cloudflare Pages also work by uploading the folder as-is.
