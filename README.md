# Crisp marketing site

Single-page site for **Features**, **Privacy Policy**, **Terms**, and an **App Store** download button.

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Before launch

1. Edit **`site-config.js`**:
   - `appStoreURL` — your App Store link when live (e.g. `https://apps.apple.com/app/idXXXXXXXXX`)
   - `contactEmail` — support / privacy contact
   - `siteOrigin` — optional, your deployed URL without trailing slash

2. Deploy the **`website/`** folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

3. Point the iOS app at your live URLs in **`Crisp/Info.plist`**:

   ```xml
   <key>PrivacyPolicyURL</key>
   <string>https://YOUR-DOMAIN/#privacy</string>
   <key>TermsOfUseURL</key>
   <string>https://YOUR-DOMAIN/#terms</string>
   ```

   Use the same privacy URL in **App Store Connect → App Privacy** and subscription metadata.

## Files

| File | Purpose |
|------|---------|
| `index.html` | One-page content |
| `styles.css` | Layout and typography |
| `site-config.js` | App Store URL and contact email |
| `assets/icon.png` | App icon (copy from Xcode assets) |
