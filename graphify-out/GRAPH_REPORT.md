# Graph Report - /Users/vivek/Developer/Angular/portfolio  (2026-04-21)

## Corpus Check
- 26 files · ~13,369 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 79 nodes · 56 edges · 25 communities detected
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]

## God Nodes (most connected - your core abstractions)
1. `LeadGateService` - 5 edges
2. `Graph Report` - 5 edges
3. `PortfolioDataService` - 4 edges
4. `HeroComponent` - 4 edges
5. `LeadCaptureFormComponent` - 4 edges
6. `ShellComponent` - 3 edges
7. `ContactComponent` - 3 edges
8. `ResumeComponent` - 3 edges
9. `ProjectsPreviewComponent` - 3 edges
10. `Main Bootstrap Application` - 2 edges

## Surprising Connections (you probably didn't know these)
- `README Overview` --references--> `Graph Report`  [EXTRACTED]
  README.md → graphify-out/GRAPH_REPORT.md
- `Personalisation Checklist` --references--> `Graph Report`  [EXTRACTED]
  README.md → graphify-out/GRAPH_REPORT.md
- `Security Note` --references--> `Graph Report`  [EXTRACTED]
  README.md → graphify-out/GRAPH_REPORT.md
- `Scalability Note` --references--> `Graph Report`  [EXTRACTED]
  README.md → graphify-out/GRAPH_REPORT.md
- `Main Bootstrap Application` --calls--> `App Root Router Outlet`  [EXTRACTED]
  src/main.ts → src/app/app.component.ts

## Hyperedges (group relationships)
- **Portfolio Content Flow** — portfolio_data_service_central_data_store, hero_component_hero_section, projects_component_project_gallery, projects_preview_component_featured_projects, skills_component_tech_stack, resume_component_resume_page [INFERRED 0.88]
- **App Shell Layout** — shell_component_layout_shell, header_component_sticky_navigation, footer_component_site_footer [INFERRED 0.92]
- **Home Page Section Stack** — hero_component_hero_section, skills_component_tech_stack, projects_preview_component_featured_projects [INFERRED 0.98]
- **Home Page Section Stack** — hero_component_hero_section, skills_component_tech_stack, projects_preview_component_featured_projects [INFERRED 0.98]
- **App Shell Layout** — shell_component_layout_shell, header_component_sticky_navigation, footer_component_site_footer [INFERRED 0.92]
- **Portfolio Content Flow** — portfolio_data_service_central_data_store, hero_component_hero_section, projects_component_project_gallery, projects_preview_component_featured_projects, skills_component_tech_stack, resume_component_resume_page [INFERRED 0.88]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (2): LeadCaptureFormComponent, LeadGateService

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (2): PortfolioDataService, StatsComponent

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (6): Graph Report, Graphify Extraction Instructions, README Overview, Personalisation Checklist, Scalability Note, Security Note

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (1): HeroComponent

### Community 4 - "Community 4"
Cohesion: 0.5
Nodes (1): ShellComponent

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (1): ContactComponent

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (1): ResumeComponent

### Community 7 - "Community 7"
Cohesion: 0.5
Nodes (1): ProjectsPreviewComponent

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (3): App Root Router Outlet, App Providers Config, Main Bootstrap Application

### Community 9 - "Community 9"
Cohesion: 0.67
Nodes (1): HeaderComponent

### Community 10 - "Community 10"
Cohesion: 0.67
Nodes (1): ProjectsComponent

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (1): MarqueeComponent

### Community 12 - "Community 12"
Cohesion: 0.67
Nodes (1): SkillsComponent

### Community 13 - "Community 13"
Cohesion: 0.67
Nodes (1): TimelineComponent

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (1): FooterComponent

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (1): HomeComponent

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (1): NotFoundComponent

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): Theme Service

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (1): Reveal Directive

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (1): Production Environment Config

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (1): Resume Placeholder PDF

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (1): Project Placeholder SVG

## Knowledge Gaps
- **15 isolated node(s):** `App Root Router Outlet`, `App Providers Config`, `Theme Service`, `FooterComponent`, `HomeComponent` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 14`** (2 nodes): `FooterComponent`, `footer.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `HomeComponent`, `home.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `NotFoundComponent`, `not-found.component.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `app.routes.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `portfolio.models.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `Theme Service`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `Reveal Directive`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `Production Environment Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `environment.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `Resume Placeholder PDF`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `Project Placeholder SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `App Root Router Outlet`, `App Providers Config`, `Theme Service` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._