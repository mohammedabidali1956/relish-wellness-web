# Homepage doctor portrait and interactive pain guide

## Outcome
- Place the uploaded real portrait of Dr. Hamid in the existing doctor section, with a respectful portrait crop and responsive layout.
- Add one accessible “Where does it hurt?” section that lets visitors select nine body regions by mouse, keyboard, or touch and read concise educational guidance.
- Reorder the existing homepage into a clearer patient journey without changing routes, forms, contact links, SEO, or integrations.

## Homepage flow
1. Clinic introduction and key trust details
2. Interactive body pain guide
3. Conditions we treat
4. Treatments and services
5. About Dr. Hamid with the real portrait
6. Patient trust and reviews
7. Appointment and location

Existing repeated trust details will be consolidated rather than duplicated. All existing conditions, services, reviews, appointment form, map, and booking behavior will remain available.

## Interactive guide
- Use a clean, original anatomical-style front/back silhouette built directly in the interface, with large labeled hotspots for neck, shoulder, upper back, elbow, wrist/hand, lower back, hip, knee, and ankle/foot.
- Selecting a hotspot updates one stable information panel containing symptoms, possible contributors, how physiotherapy may help, and when assessment or medical evaluation is appropriate.
- Add an educational-not-diagnostic disclaimer and cautious language throughout.
- Support visible focus states, screen-reader labels, keyboard activation, touch targets, and reduced-motion preferences.

## Medical content
- Base the summaries on authoritative patient guidance from NHS, APTA/ChoosePT, and major hospital resources.
- Keep content concise and avoid diagnoses, guarantees, unsupported statistics, or claims that physiotherapy always heals a condition.
- Include clear medical escalation guidance for serious injury, marked weakness or numbness, chest/breathing symptoms, bowel/bladder changes, unexplained fever, or inability to bear weight where relevant.

## Technical details
- Add the doctor portrait through the project’s managed asset flow.
- Create a focused reusable pain-guide component and its typed content data, then insert it into the homepage.
- Reorder existing homepage sections without changing their underlying behavior.
- Use the existing semantic color, type, button, spacing, and animation system; no new dependency is required.

## Verification
- Check the full homepage at desktop, tablet, and narrow mobile widths for overflow, overlap, image crop, tap-target size, and visual continuity.
- Exercise every body hotspot with mouse/touch-compatible clicks and keyboard controls.
- Verify appointment scrolling, condition/service links, map, form, and mobile actions still work.
- Confirm the project builds without errors and review the final rendered homepage top to bottom.
