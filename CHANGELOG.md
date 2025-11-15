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
  - Replaced placeholder comments with copy-paste ready examples
  - Improved developer experience with clear, functional code samples

### 📊 Summary

**New Components:** 
- PixelRating - Interactive star rating system
- PixelWarningTooltip - Warning and alert tooltips with severity levels
- PixelUndoChip - Undo chip/snackbar for action confirmation with undo option

**Fixed:** Menubar, Navigation Menu, Command, Drawer, Toast, and Sonner documentation previews  
**Documentation:** Added complete usage examples for 4 components (Navigation Menu, Command, Alert Dialog, Drawer)  
**Files Modified:** 6 files (pixel-warning-tooltip.tsx, pixel-undo-chip.tsx created, component-preview.tsx, component-registry.ts, CHANGELOG.md)  
**Impact:** Complete documentation coverage, two new feedback components for better user experience and low-friction interactions
