# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:** Wefix Team
**Startup name:** wefix
**Live site link:** https://aron-2112.github.io/wefix/

---

## Work sessions

### Session — 2026-11-22 — driver: AI assistant

- **Goal for this session:** Build the complete interactive homepage and prototype flows for a tool-sharing startup.
- **Key prompts we gave Copilot:** Create the wefix signup, tool marketplace, date-calendar booking, and revenue-model prototype.
- **What worked:** A dependency-free HTML prototype with search, saved listings, fake signup, date-range selection, booking totals, and a 8% borrower service fee.
- **What broke, and how we fixed it:** We verified JavaScript syntax and the local preview server.
- **Committed?** no — awaiting review

Copy this block for each session.

### Session — 2026-11-22 — driver: AI assistant

- **Goal for this session:** Summarize the work completed and record it in the project log.
- **Key prompts we gave Copilot:** Review the session history and add a clear summary of the wefix prototype work to this log.
- **What worked:** Confirmed that the project includes a working fake signup flow, searchable and saveable tool listings, a date-range calendar with calculated totals, an 8% borrower service fee, and supporting business-case documentation.
- **What broke, and how we fixed it:** No project changes or failures occurred during this summary pass; the prototype was already assembled and JavaScript syntax had been verified.
- **Committed?** no — awaiting review

### Session — 2026-11-25 — driver: AI assistant

- **Goal for this session:** Refresh the site with a hand-drawn workshop theme and document a Git pull error.
- **Key prompts we gave Copilot:** Add sketches of tools and sheds to make the site more engaging; record the Git error and its cause in the project log.
- **What worked:** Added a warm paper-and-ink color theme and an original, responsive shed-and-tools illustration to the homepage.
- **What broke, and how we fixed it:** `git pull --tags origin main` failed with `fatal: Need to specify how to reconcile divergent branches.` Git detected that the local and remote branches had diverged, but no pull strategy was configured. Set this repository's `pull.rebase` to `false` so future pulls default to merge; the pull was not retried, so the merge itself is still pending.
- **Committed?** no — awaiting review

### Session — [date] — driver: [first name]

- **Goal for this session:**
- **Key prompts we gave Copilot** (paste the important ones):
  1.
  2.
- **What worked:**
- **What broke, and how we fixed it:**
- **Committed?** yes / no — commit message:

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | `git pull --tags origin main` failed: `fatal: Need to specify how to reconcile divergent branches.` | Git's hint listed merge, rebase, or fast-forward-only strategies. | Configured `pull.rebase=false` in this repository to choose merge for future pulls. The pull has not yet been retried. |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| | | |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
2. Which parts were easy, and which were hard? Why do you think that is?
3. If a competitor had the same AI tool, how long would it take them to copy your site?
