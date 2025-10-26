# DATAMART - Data Reselling Platform Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern fintech dashboards (Stripe, PayPal) combined with e-commerce platforms (Shopify admin) to create a professional reseller interface that balances utility with visual appeal.

## Core Design Principles
1. **Trust & Professionalism**: Clean, organized layouts that convey reliability for business transactions
2. **Efficiency First**: Quick access to key actions (purchase, deposit, view history)
3. **Visual Hierarchy**: Clear separation between wallet info, services, and transactions
4. **Status Clarity**: Instant visibility of balance, transaction states, and system notices

---

## Typography

**Font Families**:
- Primary: Inter (headers, UI elements, numbers) - via Google Fonts
- Secondary: System stack for body text

**Hierarchy**:
- Hero Numbers (Balance): 3xl to 4xl, font-weight-700
- Section Headers: xl to 2xl, font-weight-600
- Service Cards: lg, font-weight-600 for titles
- Body Text: base, font-weight-400
- Small Labels: sm, font-weight-500, uppercase tracking-wide

---

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
**Container**: max-w-7xl centered with px-4 to px-8
**Grid System**: 
- Dashboard stats: 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Service buttons: 3-column grid for providers
- Data bundles: 2-3 column grid based on viewport

---

## Color Strategy & Visual Treatment

**Background Layers**:
- Primary background: Deep charcoal (#0f1419 or similar)
- Card backgrounds: Slightly lighter dark (#1a1f2e range)
- Elevated surfaces: Subtle gradient overlays

**Accent System**:
- Primary action: Golden yellow (#fbbf24 to #f59e0b range)
- Success states: Emerald green
- Warning/notices: Amber/orange
- Error states: Red
- Purple accent: For special notices/badges

**Provider Colors**:
- MTN: Yellow brand identity
- AirtelTigo: Red brand identity  
- Telecel: Blue/teal brand identity

---

## Component Library

### Navigation Header
- Fixed top navigation with logo left, balance indicator center-right, action buttons right
- Include WhatsApp contact button with icon (use Heroicons)
- Sticky behavior on scroll

### Dashboard Wallet Card
- Large prominent card at top of dashboard
- 4-metric layout: Current Balance | Total Orders | GB Sold | Revenue
- Each metric: Large number display with small label underneath
- Primary "Deposit" button with yellow background
- Subtle gradient background on card for depth

### Service Quick Actions
- 3 large button cards for MTN, AirtelTigo, Telecel
- Each card: Provider logo placeholder, provider name, "View Bundles" text
- Hover effect: subtle scale and shadow increase
- Additional card for "Result Checkers" service

### Data Bundle Cards
- Grid layout of bundle options
- Each card: Data amount (large), Price (prominent yellow), Validity period, "Purchase" button
- Yellow border or accent highlight for featured bundles
- Provider logo watermark or corner badge

### Purchase Modal
- Overlay with dark backdrop (80% opacity)
- Centered modal with phone number input field
- Service notice section with warning styling (amber background)
- Balance check indicator
- Confirm purchase button (full-width, yellow)

### Deposit Flow
- Network status indicators (MTN/AirtelTigo/Telecel with availability badges)
- Large amount input field with currency symbol
- Fee calculation display (amount + 3% fee = total)
- Total amount prominently displayed
- "Continue to Payment" button triggering Paystack

### Transaction Table
- Full-width table with alternating row background
- Columns: Phone Number | Method | Time | Network | Data Amount | Status badge
- Status badges: Colored pills (green for success, amber for pending)
- "View All Transactions" link button at bottom
- Responsive: Card layout on mobile, table on desktop

### Alert Banners
- Top-of-section notice bars
- Purple background for informational notices
- Red background for critical warnings
- Icon (Heroicons) + text + dismiss button

---

## Iconography
**Library**: Heroicons (outline and solid variants)
**Usage**:
- Currency/wallet icons for balance sections
- Phone icons for contact
- Check/X icons for status indicators
- Bell icon for notifications
- External link icon for "View All" actions

---

## Images

**Service Provider Logos**:
- MTN logo: Yellow and black branding
- AirtelTigo logo: Red branding
- Telecel logo: Blue/teal branding
- Placement: Top-left of service cards and bundle cards
- Size: 40x40px to 60x60px

**Dashboard Graphics** (Optional Enhancement):
- Subtle geometric pattern overlay on wallet card background
- Data visualization icons for metrics

**No Large Hero Image**: This is a dashboard application focused on utility and transactions. Hero images would distract from core functionality.

---

## Animations
**Minimal & Purposeful**:
- Button hover: Slight brightness increase, 150ms transition
- Modal entry: Fade in backdrop + slide up modal, 200ms ease-out
- Card hover: Subtle shadow and 2px translate-y lift
- NO scroll-triggered animations
- NO page transitions beyond basic fades

---

## Responsive Breakpoints
- Mobile (base): Single column, stacked cards
- Tablet (md: 768px): 2-column grids
- Desktop (lg: 1024px): Full multi-column layouts
- Large (xl: 1280px): Maximum container width, optimal spacing

---

## Key UX Patterns
1. **Progressive Disclosure**: Show balance summary → click deposit for full flow
2. **Confirmation Gates**: Modals for purchase confirmations with balance validation
3. **Status Feedback**: Real-time balance updates after transactions (simulated for now)
4. **Error Prevention**: Input validation before API calls, clear fee transparency
5. **Quick Navigation**: Dashboard → Service → Bundle → Purchase in 3 clicks maximum

---

**Design Completeness**: All sections (dashboard, service pages, bundle selection, purchase modal, deposit flow, transaction history) must be fully designed with rich detail, multiple interactive elements, and polished visual hierarchy. Create a premium reseller experience worthy of professional data entrepreneurs.