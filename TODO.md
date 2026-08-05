# Skills Section Overflow Fix

## Steps

- [x] Analyze root cause (flexbox `min-width: auto` overflow)
- [x] Read relevant files (skills.tsx, skills.ts, globals.css, glass-card, motion)
- [x] Remove `overflow-hidden` hack from skills grid wrapper
- [x] Add `min-w-0 flex-1 break-words` to skill text span
- [x] Verify with `npm run build`
