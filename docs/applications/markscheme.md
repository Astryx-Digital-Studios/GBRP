# The Great British Railway Project – Recruitment Marking Scheme
> For application reviewers
> Version 1.1, April 9th, 2025
> Purpose: To fairly and consistently evaluate applicants for GBRP roles.
> This document provides the **standard marking scheme** for reviewing **GBRP applications**. It includes the **expected answers**, **point allocations**, and **criteria for evaluation.**
> Submit reviewed scores here: https://forms.office.com/r/LZkVKgiRhX
---
## **Application Markscheme Overview**

- Questions 1-6, are just for reference, move data from application to scoring sheet.
- Questions 7-31, award bonus points, with **Soft Skills and Workflow** being most valuable, other catergories being valuable to their own roles.
- Questions 32-40 are marked according to depth of detail, each question being worth up to 5 points.
---
## **Section 1: Basic Information** *(No points – for reference only)*

This section is used for identity, timezone coordination, and role allocation.

---
## **Section 2: Technical Knowledge (Scripting Applicants)** *(Max: 35 points)*

| Question | Expected Answer | Points |
|---------|------------------|--------|
| **Primary programming language in Roblox Studio** | Lua | 2 |
| **Difference between LocalScript, Script, ModuleScript** | Script = server-side, LocalScript = client-side, ModuleScript = reusable logic for both | 4 |
| **Client-server communication** | RemoteEvents (no return), RemoteFunctions (return value); used for secure communication between client/server | 5 |
| **Optimization methods** | Use of unions/meshes, reducing part count, disabling unnecessary scripts, streaming enabled, spatial partitioning | 5 |
| **CFrame vs Vector3** | CFrame = position + rotation, Vector3 = position only; use CFrame for orientation | 3 |
| **TweenService use** | Used for smooth animations like GUI transitions or moving parts; define TweenInfo + goals + call :Create and :Play | 4 |
| **Saving player data** | Use DataStoreService, save on player leave, load on join, handle errors with pcall, possibly ProfileService | 4 |
| **Preventing exploiters** | Validate all actions server-side, minimize client-side authority, obfuscation, anti-exploit systems | 3 |
| **GUI shop system implementation** | Use ScreenGuis and Frames with buttons for purchasing; connect buttons to LocalScripts to trigger RemoteEvents, which call server Scripts to handle item granting and currency checks securely. Store items in ReplicatedStorage or ServerStorage. | 3 |
| **Leaderboard system creation** | Use the `Player.leaderstats` folder pattern: create a Folder named `"leaderstats"` inside the player on join, then add IntValues (e.g., `"Coins"`, `"Wins"`). Update them through server Scripts as the game progresses. | 2 |

**Total: 35 points**

---

## **Section 3: Game Design & Creative Thinking** *(Max: 20 points)*

| Question | Criteria | Points |
|---------|----------|--------|
| **Designing a new mechanic** | Structured approach, prototyping, player testing, iterations | 4 |
| **What makes a game fun/replayable** | Progression, social features, randomness, customization | 4 |
| **Balancing free & premium** | Avoid pay-to-win, cosmetic vs functional, player fairness | 4 |
| **UI/UX principles** | Simplicity, consistency, readability, feedback, responsiveness | 4 |
| **Inspirational games** | Named successful titles + clear reason why | 4 |

**Total: 20 points**

---

## **Section 4: Platform & Community Awareness** *(Max: 15 points)*

| Question | Expected Answer | Points |
|---------|------------------|--------|
| **Monetization methods** | GamePasses, DevProducts, Ads, Premium Payouts | 3 |
| **DevProducts vs GamePasses** | DevProducts = repeatable; GamePasses = one-time purchase | 3 |
| **Front page/DevHub requirements** | High engagement, quality thumbnails, compliance, performance, featured events | 3 |
| **Talent Hub usage** | Recruitment, collaboration, portfolio building, job listings | 3 |
| **Creator Marketplace** | Place to find/publish assets like models, plugins, tools | 3 |

**Total: 15 points**

---

## **Section 5: Soft Skills & Workflow** *(Max: 15 points)*

| Question | Criteria | Points |
|---------|----------|--------|
| **Teamwork** | Communication skills, collaboration, respect for roles | 3 |
| **Task management** | Use of Trello, GitHub, version control, prioritization | 3 |
| **Handling unsolved bugs** | Research, debugging, asking for help, documentation | 3 |
| **Talking to younger users** | Simplicity, tone, patience, visual explanation | 3 |
| **Staying updated** | DevForum, YouTube tutorials, changelogs, Discord groups | 3 |

**Total: 15 points**

---

## **Section 6: Role-Specific Technical Questions** *(Max: 10 points)*

Award up to 5 points per question answered within the applicant's selected role(s). Look for:

- **Technical accuracy**
- **Tools/software used**
- **Depth of understanding**

### Scripting / Programming

**a) What programming languages/tools do you know?**
> Expect mention of: Lua, Roblox Studio, VS Code, OOP, client/server split, modules, Git

**b) Describe a problem you solved using scripting**
> Look for examples like fixing lag, data storage systems, pathfinding, UI logic, AI, tools

**Total: 10 points**

---
### 3D Modelling / Artist

**a) What 3D software do you use?**
> Blender, Maya, SketchUp, Roblox Studio meshes, Substance, etc.

**b) How do you ensure scale & realism?**
> Look for real-world measurements, blueprint references, modular workflows, LODs

**Total: 10 points**

---
### Terrain / Map Design / GIS

**a) Used BlenderGIS or DEM data before?**
> Expect use of: QGIS, BlenderGIS, USGS, LIDAR, terrain plugins

**b) How to import real UK terrain?**
> Should mention: heightmaps, coordinate systems, conversion to Roblox parts/terrain

**Total: 10 Points**

--- 
### UI / UX Designers

**a) What makes a game interface intuitive?**
> Mention usability, readability, contrast, feedback, mobile scaling, minimalism

**Total: 10 Points**

---
### Sound / Composer Roles

**a) How would you source authentic UK train sounds?**
> Ideas: field recordings, YouTube CC, personal mics, editing samples, layering

**Total: 10 Points**

---
### Researchers / Historians

**a) Where to find UK station blueprints or historical data?**
> Examples: Network Rail, National Railway Museum, British Library, Google Books, OpenTrainTimes, rail forums

**Total: 10 Points**

---
## **Section 7: Motivation, Experience & Availability** *(Max: 10 points)*

| Criteria | Points |
|---------|--------|
| **Relevant experience/tools/projects** | Up to 4 points |
| **Motivation to join GBRP** | Up to 4 points |
| **Availability matches project needs** | Up to 2 points |

> Look for:
> - Consistency (e.g. 2–3 days/week, project-based but regular)
> - Realistic expectations (not overpromising)
> - Fits project needs (devs need more time than beta testers)

Scoring Tips:
- 5 pts: Daily or several days a week
- 3 pts: Project-based but highly skilled
- 1 pt: Only "occasionally" or vague

---

## **BONUS: Portfolio or Work Samples (Optional) +5 points**

- +1–5 points for strong evidence of past work aligned with their role.
- Quality over quantity.
> Look for:
> - Unique skills or passions (e.g. train photography, voice acting, rigging)
> - References to community work, past game groups, or events
> - Anything showing initiative, professionalism, or creative edge

**Total: 10 points**

---
## Example Scorecard for Final Questions

| Category                 | Points | Notes                                                                 |
|--------------------------|--------|-----------------------------------------------------------------------|
| Passion & Motivation     | 4 / 5  | Interested in signalling systems; big train enthusiast                |
| Relevant Experience      | 5 / 5  | Blender, has accurate class 377 model; scripts train doors            |
| Knowledge Section        | 8 / 10 | Great logic for client/server events, minor weakness on OOP           |
| Communication & Clarity  | 5 / 5  | Clear and structured responses                                        |
| Availability & Commitment| 4 / 5  | Can contribute 2–3 times weekly                                       |
| **Total Score**          | 26 / 30| Recommend: Scripting + Modelling Team Trial                           |

---
##  **Final Notes**:

- **Score Range Guidance**:
  - **80–100**: Strong candidate, ready for key roles.
  - **60–79**: Good potential, maybe needs mentoring.
  - **40–59**: Acceptable if niche or supportive role.
  - **Below 40**: Consider reapplication after experience/training.

- **Reviewer Tip**: Add comments to highlight strengths or red flags for the team lead.

---

## **Conclusion**:

The **markscheme** provides a detailed scoring system for evaluating applications. Please ensure that each section is filled out thoroughly to assist in making an informed decision. Contributions will be credited accordingly in this volunteer-based project.

*Let’s build Britain’s most immersive rail simulator – together.*

**– GBRP Recruitment Team**
