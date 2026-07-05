// Shared UI state for the mobile "scroll dock": when a page's back-link scrolls out of
// view, the page sets `dock.active = true`. That both reveals the bottom glass dock and
// hides the layout's fixed top-right theme toggle (so the two never show at once).
export const dock = $state({ active: false });
