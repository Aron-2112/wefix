# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:** Wefix Team
**Startup name:** wefix
**Live site link:** https://aron-2112.github.io/wefix/

---

## Work sessions

### 2026-11-22 — Project setup and first prototype

- **Goal for this session:** Create the initial weFix website and add the first project-log summary.
- **Key prompts we gave Copilot:** Build a complete interactive tool-sharing homepage; add signup, marketplace, saved-listings, calendar, booking, and revenue-model features; update the project name and appearance.
- **What worked:** Established the project structure and a dependency-free HTML, CSS, and JavaScript prototype. Added searchable and saveable tool listings, a fake signup flow, date-range selection, calculated booking totals, an 8% borrower service fee, and supporting business-case and project-log documents.
- **What broke, and how we fixed it:** No lasting code failure was recorded during this date's work. The existing JavaScript and prototype structure were reviewed and the site name and theme were updated.
- **Committed?** yes — `Initial commit`, `first version`, `added summary of changes to prject log`, and `changed site name and appearance`

everything worked well in this session. It took a while for everything to load due to everything being created by scratch but it went relatively smoothly. Note: I did start this assignment before this date but I mistakenly installed Github copilot onto my laptop and I was working there without the template and files you provided. That was my mistake for not reading the instructions well.

### 2026-11-23 — Branding and pricing adjustments

- **Goal for this session:** Correct and refine the product name, theme, and prototype pricing.
- **Key prompts we gave Copilot:** Fix a misspelling in the new site name, then apply the corrected title, theme, and pricing details.
- **What worked:** Updated the brand name and visual styling consistently across the main page, data, and stylesheets. Adjusted the displayed pricing information and associated prototype copy.
- **What broke, and how we fixed it:** A misspelling was introduced during the site-name change. It was followed by a correction pass that updated the title and appearance across the affected files.
- **Committed?** yes — `made a mistake typing in the new site name` and `changed the title, theme, and some pricing details of the site`

Same as last session. Everything went well with the edits.

### 2026-11-25 — Live link and visual theme updates

- **Goal for this session:** Publish the live-site reference, refresh the visual theme, and record a Git issue.
- **Key prompts we gave Copilot:** Add the live GitHub Pages link to the project log; change the theme and title; document divergent-branch behavior and a proposed fix.
- **What worked:** Added the live site URL, updated the main page and CSS theme, and recorded the project work and Git situation.
- **What broke, and how we fixed it:** `git pull --tags origin main` failed with `fatal: Need to specify how to reconcile divergent branches.` Git had detected divergent local and remote branches. This repository was configured with `pull.rebase=false` so future pulls use merge mode; the pull itself was not retried during the session.
- **Committed?** yes — `Add live site link to project log`, `Changed theme and title`, a merge commit, and `changed theme and tried to fix errors with divergent branches`

This sessions is where I started getting frustrated with the way copilot works. I am not expeienced enough to know what the issue was exactly and I hope it is fixed. This took some time because changes were not being saved.

### 2026-11-26 — Finalization and photo assets

- **Goal for this session:** Finalize the page layout and replace placeholder imagery with project photographs.
- **Key prompts we gave Copilot:** Continue refining the interface and finalize the current theme and page changes; add and integrate the tool, workshop, map, drill, and treasure-chest images.
- **What worked:** Revised the homepage and supporting sections, adjusted styles, and added five image assets. Updated the project log and CSS to improve the final presentation.
- **What broke, and how we fixed it:** No separate runtime failure was recorded in the commits. The finalization pass served as a visual refinement and asset-integration pass rather than a debugging session.
- **Committed?** yes — `trying to finalize changes` and `changed photos on website`

This is also where I grew frustrated with the changes copilot would make. It is difficult for me to get an optimal photo added to the website with the prompts I use. That is something that would likely get better with time but it was frustrating.

### 2026-11-27 — Business-case update and session-log summary

- **Goal for this session:** Improve the business-case documentation and summarize all dated project work in the project log.
- **Key prompts we gave Copilot:** Add and revise business-case text; review repository history and organize every work session under clear date headings.
- **What worked:** Expanded the business-case content and replaced the partial, template-based work-session section with a complete date-separated summary of the project activity.
- **What broke, and how we fixed it:** The original log did not include summaries for 2026-11-23, 2026-11-26, or 2026-11-27 and retained an unfinished template. The missing activity was reconstructed from the commit history and grouped by date.
- **Committed?** pending — commit after the project-log update is reviewed

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | `git pull --tags origin main` failed: `fatal: Need to specify how to reconcile divergent branches.` | Git's hint listed merge, rebase, or fast-forward-only strategies. | Configured `pull.rebase=false` in this repository to choose merge for future pulls. The pull has not yet been retried. |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

A real version would need all of those things. A real login, database, payment, security, and moderation system. On top of that the app could also use a review section where users can review each other (like Uber or Air BnB) which could help incentivize good behaviour.

I do not think it would be difficult to integrate all of those things. I think we are at a point in time where those are pretty well optimized for various apps. I do think it would be expensive though. If I had to guess I would say everything would cost around $20,000 just to start up. These systems are also probably billed monthly/yearly as well so those would have to be factored in.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| | | |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
I am surprised how easy it is to build a template with AI. Also, making changes with AI is relatively easy but I found it frustrating due to how specific you need to be for good prompts.
2. Which parts were easy, and which were hard? Why do you think that is?
I think trying to make small, specific adjustments is hard. Especially so when talking about the theme and/or pictures that are added to the site. Having the best of both worlds would be ideal (building a template with AI and then having the skill/programs to make small changes to design layout yourself).
3. If a competitor had the same AI tool, how long would it take them to copy your site?
I think it could be done in a day if the competitor knew what they wanted and what they were doing. Unfortunately for this idea, this could be considered a (relatively) early adoptor for this type of business. A competitor with the know how could create something after learning what did and did not work with weFix.
