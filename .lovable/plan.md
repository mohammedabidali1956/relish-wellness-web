# Mobile-first knee pain blog

## Build
- Add the supplied knee-pain article as a new blog post with one clear H1, concise summary, scannable H2/H3 sections, lists, FAQ content, urgent-care guidance, disclaimer, and local appointment links.
- Use the uploaded knee illustrations selectively: a clear knee-pain visual as the article image and supporting anatomy images beside the relevant explanations, with descriptive alt text and captions.
- Improve the blog listing and article reading experience on phones with compact metadata, stable image proportions, comfortable type, responsive tables/media, and a simple article contents navigation.
- Add route-specific search metadata and structured Article/FAQ data for this post while retaining the existing site routes and fallback metadata.

## Technical details
- Store uploaded images through the project asset service and reference their generated asset pointers.
- Extend the existing blog data model for optional inline media and SEO fields without changing existing posts.
- Keep medical language educational and cautious; preserve urgent medical evaluation advice and the supplied disclaimer.
- Validate the listing and article at mobile and desktop widths, including image loading, links, overflow, and the appointment action.
