# VelvetVault – Adult Content Site (Multi-Language)

A clean, modern adult photo & video site with private Admin panel and full multi-language support.

## Features
- Beautiful public homepage with photo gallery + video section
- Category filters (Blonde, Brunette, Latina, Asian, Ebony)
- Lightbox viewer for photos and videos
- Password-protected Admin panel
- Admin can upload photos and videos (they appear instantly for all visitors)
- Admin can delete any content
- **Multi-language support** – choose your language from a dropdown (labels always in English)
- Supported languages: English, Spanish, Portuguese, French, German, Arabic (RTL), Hindi, Italian, Russian, Chinese, Japanese, Korean, Turkish, Dutch, Polish
- Pre-loaded sample content of popular performers (placeholders you can replace)
- Fully client-side (works offline, no server required for demo)
- Data saved in browser localStorage
- Language preference remembered

## How to use

1. Open `index.html` in any modern browser → public site
2. Use the language dropdown in the top-right (names shown in English: Spanish, Portuguese, etc.)
3. Click **Admin** (or open `admin.html`)
4. Login password: **velvet2026**
5. Upload any real photos or videos → they become visible to everyone
6. Delete items from the Admin grid when needed

## Language selector
The dropdown always shows language names in **English** so anyone can find their preferred language easily:
- English
- Spanish
- Portuguese
- French
- German
- Arabic
- Hindi
- Italian
- Russian
- Chinese
- Japanese
- Korean
- Turkish
- Dutch
- Polish

Arabic automatically switches the site to right-to-left (RTL) layout.

## Important notes
- This is a **frontend-only demo**. Files are stored as data URLs in the browser’s localStorage.
- Large videos may hit browser storage limits. For production use a real backend + cloud storage.
- Change the admin password in `js/app.js` (search for `ADMIN_PASSWORD`).
- 18+ only. You are responsible for the content you upload and for complying with all local laws.

## Files
```
VelvetVault/
├── index.html      → Public site
├── admin.html      → Admin panel
├── css/style.css
├── js/app.js       → Logic + all translations
└── README.md
```

Enjoy!
