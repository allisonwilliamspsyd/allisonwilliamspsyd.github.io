# Allison Hartsock Williams

**Healthcare operations, integrated behavioral health, and applied AI**

I am a clinical psychologist and healthcare leader who builds programs, teams, and practical systems to improve access, clinical quality, and operational performance.

- Raleigh, North Carolina
- [LinkedIn](https://www.linkedin.com/in/allison-williams-a2352a1b/)
- [Portfolio website](https://allisonwilliamspsyd.github.io/) — available after GitHub Pages is enabled

## What is in this portfolio

### Care management capacity explorer

A working browser-based demonstration connects assigned members, contact frequency, staff capacity, and staffing requirements. It illustrates my approach to operational design and makes its assumptions visible. The example counts, acuity mix, and productivity figures are synthetic. This is not an actual agency dashboard, a validated workforce forecast, or clinical guidance.

### Selected experience

- Built care-management workflows supporting approximately 3,000 assigned members, five supervisors, and 25 care managers and extenders.
- Reduced weekly report preparation from six staff-hours to 30 minutes using AI-assisted Excel VBA.
- Launched integrated primary care in 2016; helped lead FQHC Look-Alike transformation effective April 1, 2026, and supported NCQA CCBHC accreditation.
- Implemented measurement-based care and developed clinical documentation review tools.

These are professional accomplishments, not claims that this repository contains the original systems. Original employer code, data, and documents are not included.

## Development and limitations

This starter site and demonstration were created with AI assistance based on my description of prior operational work. The production reporting automation used Excel VBA; this newly created browser demonstration uses JavaScript. Source is provided so the arithmetic can be inspected.

The capacity model assumes comparable completed-contact effort across groups and uses an adjustable average productive-contact capacity per staff member. It does not model contact duration, failed attempts, leave, scheduling constraints, skill mix, or supervision separately. Account for these when choosing a capacity assumption. All results are planning illustrations; validate a real staffing model with actual workload and service requirements.

## Files

- `index.html`: portfolio landing page
- `capacity.html`: interactive demonstration
- `capacity.js`: calculations and input validation
- `style.css`: shared styles

Open `index.html` in a browser to preview locally. No installation or data upload is required. The demo runs in the browser and does not send inputs to a server.

## Publishing with GitHub Pages

1. Create a public repository named **allisonwilliamspsyd.github.io** under your account.
2. Upload the contents of this folder to the repository root. Upload the files themselves, not the ZIP archive or an enclosing folder.
3. Commit the files to `main`.
4. Open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Save.
5. Once deployment completes, visit https://allisonwilliamspsyd.github.io/ and test the calculator and LinkedIn link.

Official guidance: https://docs.github.com/en/pages/quickstart

Suggested repository description: Healthcare operations portfolio featuring integrated care, provider performance, and practical AI-assisted workflow improvement.

Suggested GitHub bio: Clinical psychologist and healthcare operations leader building practical tools for integrated care, provider performance, and workflow improvement.
