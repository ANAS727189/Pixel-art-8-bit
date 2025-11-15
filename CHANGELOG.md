# Changelog

## [Unreleased] - 2025-11-15

### ✨ Added

- **PixelRating Component** 
  - Created interactive 5-star rating component with pixel-art styling
  - Features hover effects, multiple color variants (default/gold/red), and three size options
  - Supports both interactive and read-only modes
  - State managed with React hooks, no Redux required
  - Fully documented in component registry with usage examples
  - Live preview added to documentation page

- **PixelWarningTooltip Component**
  - Created warning tooltip component for feedback category
  - Shows warnings and alerts when hovering over elements
  - Four severity levels: info, warning, error, and critical
  - Three size options: small, medium, and large
  - Animated pulsing warning icon on trigger
  - Optional icons in both trigger and content
  - Built with Radix UI tooltip primitives
  - Pixel-art styling with custom borders and shadows
  - Fully documented with multiple usage examples
  - Live interactive preview with all severity levels

- **PixelUndoChip Component**
  - Created undo chip/snackbar component for feedback category
  - Small chip showing "Done — Undo?" style feedback
  - Very user-friendly, low-friction feedback mechanism
  - Four visual variants: default, info, warning, error
  - Three size options: small, medium, and large
  - Auto-dismiss with configurable duration
  - Optional undo action with callback
  - Check icon and undo icon support
  - Context provider for easy usage throughout app
  - Six positioning options (top/bottom, left/center/right)
  - Built with class-variance-authority for variants
  - Pixel-art styling with borders and shadows
  - Fully documented with usage examples
  - Live interactive preview showing delete, send, and save actions

- **PixelAIBubble Component**
  - Created AI assistant feedback bubble component for feedback category
  - Shows AI assistant status indicators like ChatGPT/Claude thinking bubbles
  - Five status variants: thinking, ready, processing, error, and typing
  - Thinking state with spinning loader icon
  - Ready state with checkmark icon
  - Processing state with pulsing sparkles icon
  - Error state with alert triangle icon
  - Typing state with animated bouncing dots
  - All icons animated with appropriate timing for realistic feel
  - Built with class-variance-authority for type-safe variants
  - Pixel-art styling with custom borders and shadows
  - Fully documented with usage examples for all variants
  - Live interactive preview showing all 5 status types

- **Redux Product Filters & Search System**
  - Created comprehensive filtering system for Pixel Shop
  - Real-time product search by name (case-insensitive)
  - Multi-select category filter with checkboxes
  - Price range filter with min/max inputs
  - Five sort options (default, price asc/desc, name asc/desc)
  - Active filters counter badge
  - Reset all filters functionality
  - Empty state with helpful messaging
  - Results counter showing filtered vs total products
  - New Redux slice: `filterSlice` with 9 actions
  - Memoized selectors using Reselect for optimized performance
  - Three selectors: filtered products, available categories, price stats
  - Filters sidebar with collapsible UI
  - Clear buttons for search and individual filters
  - Dynamic category list with product counts
  - Files created: `filterSlice.ts`, `productSelectors.ts`
  - Updated Redux store configuration
  - Full documentation in `REDUX-FILTERS-GUIDE.md`

### 🐛 Fixed

- **Menubar Preview** 
  - Fixed missing interactive preview for menubar component on documentation page
  - Added proper imports for all menubar-related components
  - Created realistic demo with File, Edit, and View menus including separators
  - Preview now fully functional with dropdown interactions

- **Navigation Menu Preview**
  - Fixed missing interactive preview for navigation menu component
  - Added imports for PixelNavigationMenu and related sub-components
  - Created dropdown demo with products menu and direct link
  - Preview now displays correctly with working interactions

- **Command Preview**
  - Fixed missing interactive preview for command palette component
  - Added imports for PixelCommand and related sub-components
  - Created search interface demo with command items and empty state
  - Preview now functional with keyboard navigation support

- **Drawer Preview**
  - Fixed missing interactive preview for drawer component
  - Added imports for PixelDrawer and all sub-components
  - Created bottom drawer demo with header, title, and description
  - Preview now displays correctly with slide-up animation

- **Toast Preview**
  - Fixed missing interactive preview for toast notifications
  - Added ToastDemo helper component with multiple toast examples
  - Created demos for simple toast and toast with action button
  - Preview now functional with proper toast provider setup

- **Sonner Preview**
  - Fixed missing interactive preview for Sonner toast notifications
  - Added SonnerDemo helper component with different toast types
  - Created demos for success, error, default, and loading toasts
  - Preview now displays correctly with all toast variants

### 📝 Documentation

- **Component Registry Updates**
  - Added complete usage code for PixelNavigationMenu component
  - Added complete usage code for PixelCommand component
  - Added complete usage code for PixelAlertDialog component
  - Added complete usage code for PixelDrawer component
  - Added complete usage code for PixelUndoChip component

- **Redux Filters Documentation**
  - Created comprehensive guide: `REDUX-FILTERS-GUIDE.md`
  - Documented filter slice state structure
  - Listed all 9 filter actions with examples
  - Explained memoized selectors and Reselect usage
  - Provided usage examples and testing guide
  - Outlined future enhancement ideas

### 📊 Summary

**New Components:** 
- PixelRating - Interactive star rating system
- PixelWarningTooltip - Warning and alert tooltips with severity levels
- PixelUndoChip - Undo chip/snackbar for action confirmation with undo option
- PixelAIBubble - AI assistant status indicators with thinking, typing, and ready states

**New Redux Features:**
- Product Filters & Search System - Complete filtering with search, categories, price range, and sorting

**Fixed:** Menubar, Navigation Menu, Command, Drawer, Toast, Sonner documentation previews + Pixel Shop accessibility and theme consistency  
**Documentation:** Added complete usage examples for 5 components + comprehensive Redux filters guide  
**Files Modified:** 12 files (3 feedback components, filterSlice.ts, productSelectors.ts, store.ts, shop page, REDUX-FILTERS-GUIDE.md, CHANGELOG.md)  
**Impact:** Complete documentation coverage, three new feedback components, advanced Redux filtering system showcasing memoized selectors and state management best practices
