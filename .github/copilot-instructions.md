# Copilot instructions: JS-SEZ website

## Goal
Build a one-page static website introducing the Johor-Singapore
Special Economic Zone to Singapore manufacturers. Put an AI advisor
chat button at the bottom right.

## Content
- Use ONLY facts from the attached SMF JS-SEZ Playbook. Do not invent
  rates, dates, names or statistics.
- Include: hero, nine zones, SETUP framework, incentives and tax
  watch-outs, passes for staff, Ask the advisor, and footer.
- Footer: "C334 class exercise. Not affiliated with SMF,
  Enterprise Singapore or MIDA."
- Use plain English, UK spelling and short sentences.

## Chat widget
- Use @n8n/chat version 1.46.5 from jsDelivr for both style.css
  and chat.bundle.es.js.
- Call createChat with mode: 'window'.
- webhookUrl: https://agenticflows.tokencraze.org/webhook/61474ca9-d111-488c-aa45-07f5880fda3c/chat
- Title: "JS-SEZ advisor"; include two short initial messages.
- loadPreviousSession: false.

## Technical rules
- Use only index.html, styles.css and chat.js. No framework,
  build step or npm.
- Work at 360 px wide without sideways scrolling.
- Make keyboard focus visible and colours easy to read.
- Publish with GitHub Pages from main, root folder.

## Done when
- The chat button opens and a JS-SEZ question receives an answer
  citing a playbook page.
- Every factual claim on the page is supported by the playbook.
