# Rebuild pain map and fix doctor photo

## Outcome
- Replace the current pale-blue, two-figure pain map with the supplied dark human silhouettes and preserve its educational information panel.
- Make the real doctor portrait part of the compiled website so its production URL cannot depend on an unshipped public path.
- Leave all other homepage sections, routes, content, forms, links, SEO, and styling unchanged.

## Pain-map changes
- Prepare transparent, optimized front and back silhouette assets from the two attached reference images.
- Show one large body at a time with a clear Front/Back switch; automatically select the appropriate view when a region is chosen.
- Add Head while retaining Neck, Shoulder, Upper Back, Elbow, Wrist/Hand, Lower Back, Hip, Knee, and Ankle/Foot.
- Replace visible plus buttons with subtle anatomical highlight areas placed directly over the silhouette.
- Keep the existing cautious educational content, safety disclaimer, source links, and information categories; add matching patient-friendly Head guidance.
- Keep an accessible region list synchronized with the body, keyboard controls, visible focus, touch-sized targets, and reduced-motion behavior.

## Production photo fix
- Move the optimized real doctor portrait into the compiled asset graph and import it from the homepage.
- Preserve the existing portrait card, crop, dimensions, text, and alt text.
- Confirm the emitted hashed image loads through the production-style build rather than `/doctor-hamid-ali.jpg`, which currently returns 404 on Vercel.

## Verification
- Check the complete homepage at mobile, tablet, and desktop widths for body visibility, image crop, overlap, and horizontal scrolling.
- Exercise Front/Back, body hotspots, and the accessible region list with click/tap and keyboard input.
- Confirm the doctor photo and both silhouette assets return successfully, and check the latest automated build diagnostics.
