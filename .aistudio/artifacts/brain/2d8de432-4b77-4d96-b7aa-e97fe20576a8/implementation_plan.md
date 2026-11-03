# Collapsible Sidebar Navigation for Syllora

Enable full desktop and mobile collapsibility for Syllora's main navigation sidebar with a three-line hamburger menu toggle icon, maximizing screen real estate for studying reading materials, notes, and PDF documents.

## User Review & Critical Decisions

> [!IMPORTANT]
> The sidebar will feature smooth drawer toggle mechanics across both desktop and mobile viewports.

- **Confirmed Decision (Toggle Icon)**: Three horizontal lines menu icon (`Menu` from `lucide-react`) placed in the top navigation header and within the sidebar header to toggle the navigation state.
- **Collapsible Behavior**:
  - When expanded (`w-[260px]`), the desktop main content pads left by `lg:pl-[260px]` and displays the full navigation menu, brand mark, and student identity footer.
  - When collapsed, the sidebar slides off-screen smoothly (`-translate-x-full`), the main content expands to full viewport width (`lg:pl-0`), and clicking the three-line menu button in the top bar instantly re-opens it.
  - State persists in memory during the browsing session so students reading wide PDF documents or comparison tables can keep the sidebar closed.

---

## 1. Overview & Core Concept

- **What It Does**: Allows university students to collapse or reveal the left navigation drawer with a single click on a standard three-line menu button.
- **Target Audience**: Students studying lecture notes, reviewing multi-column question papers, or watching split-view video lectures who need distraction-free, full-width canvas space.
- **Key Value**: Provides maximum reading width for syllabus PDFs and exam papers while retaining instant access to navigation routes (Home, Explore, Courses, Profile, Settings, Help).

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Collapsing on Desktop**:
   - The user clicks the 3-line menu icon in the top header or the close icon in the sidebar.
   - The sidebar glides off to the left with smooth CSS transition (`duration-300 ease-in-out`).
   - The main content area animates to take 100% of the available width, providing generous room for course notes and tables.
2. **Expanding on Desktop**:
   - The user clicks the visible 3-line menu button in the top bar.
   - The sidebar slides in smoothly to its `260px` standard position.
3. **Mobile Behavior**:
   - The same 3-line button opens the slide-out drawer with backdrop blur, closing automatically when an option is selected.

### Visual Styling & Interactive Polish
- **Toggle Icon**: Minimal three-line hamburger button (`<Menu className="w-5 h-5" />`) styled with subtle hover surface (`hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl p-2`).
- **Smooth Transition**: CSS hardware-accelerated transforms (`transition-transform duration-300 ease-in-out` on the aside and `transition-all duration-300` on the main container).
- **Tooltips & Accessibility**: Proper `aria-label="Toggle navigation"` and `aria-expanded` state attributes.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full Slide Drawer vs. Mini Icon Rail**:
  - *Chosen Approach*: Full collapse off-screen with header toggle button.
  - *Why*: The user explicitly noted that reading space is prioritized, and a clean full-width mode gives students unobstructed viewing for wide PDF viewers, schemas, and tables.
  - *Alternative Considered*: A 72px mini icon bar was considered, but it still consumes desktop horizontal space and clutters the reading margins.

- **Decision 2: Layout State Sharing**:
  - *Chosen Approach*: Lift `isSidebarOpen` state into `Layout.tsx` and pass `isOpen`, `onToggle`, and `onClose` to `TopHeader` and `Sidebar`.
  - *Why*: Keeps the application reactive and synchronized without introducing unnecessary external state libraries.

---

## 4. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────┐
│                      Layout.tsx                        │
│             State: [sidebarOpen, setSidebarOpen]        │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌───────────────────────┐        ┌───────────────────────┐
│     TopHeader.tsx     │        │      Sidebar.tsx      │
│  [Menu] toggle button │        │  Collapsible aside    │
│  Theme switch         │        │  Desktop & Mobile     │
│  Student profile link │        │  Active NavLinks      │
└───────────────────────┘        └───────────────────────┘
            │                                │
            └────────────────┬───────────────┘
                             ▼
                 ┌───────────────────────┐
                 │    <main> Container   │
                 │ Dynamic padding:      │
                 │ open:   lg:pl-[260px] │
                 │ closed: lg:pl-0       │
                 └───────────────────────┘
```

### Components to Update:
1. `src/components/layout/Layout.tsx`:
   - Initialize `sidebarOpen` to `true` on desktop, manage toggle handler, and dynamically set `sidebarOpen ? 'lg:pl-[260px]' : 'lg:pl-0'` on the main container.
2. `src/components/layout/TopHeader.tsx`:
   - Render the three-line `Menu` button always (removing `lg:hidden`) so users can toggle the sidebar on both desktop and mobile screens.
3. `src/components/layout/Sidebar.tsx`:
   - Accept `isOpen` and `onClose` / `onToggle`.
   - Update CSS classes so desktop respects `isOpen` (e.g. `isOpen ? 'translate-x-0' : '-translate-x-full'`).
