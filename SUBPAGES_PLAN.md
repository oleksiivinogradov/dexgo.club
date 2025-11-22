# Subpages Implementation Plan

## ✅ Scraping Complete

All subpages have been successfully scraped from dexgo.club:

1. **spacepioneers** - Type 1 NFT Sneakers
2. **trailblazer** - Type 2 NFT Sneakers
3. **toptokers** - Type 3 NFT Sneakers
4. **сyberwarriors** - Type 4 NFT Sneakers (note: Cyrillic 'с')
5. **robots** - Type 5 NFT Sneakers
6. **gameplay** - Gameplay information
7. **cities** - Cities/locations
8. **routes** - Routes/paths
9. **nft-marketplace** - NFT Marketplace

All data saved to: `scraped_subpages/`

---

## Implementation Strategy

### **1. Create Page Components**

Create React components in `src/pages/` for each subpage:

- `SpacePioneers.jsx`
- `Trailblazer.jsx`
- `Toptokers.jsx`
- `Cyberwarriors.jsx`
- `Robots.jsx`
- `Gameplay.jsx`
- `Cities.jsx`
- `Routes.jsx`
- `Marketplace.jsx`

### **2. Update Routing**

Update `src/App.jsx` to include routes for all new pages:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpacePioneers from './pages/SpacePioneers';
import Trailblazer from './pages/Trailblazer';
// ... etc

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/spacepioneers" element={<SpacePioneers />} />
  <Route path="/trailblazer" element={<Trailblazer />} />
  // ... etc
</Routes>
```

### **3. Update All Links**

Replace external URLs with local routing:

**Current (External):**
- `https://www.dexgo.club/en/spacepioneers` → `/spacepioneers`
- `https://www.dexgo.club/en/gameplay` → `/gameplay`
- etc.

**Components to Update:**
- `src/pages/Home.jsx` - Sneaker detail links
- `src/components/Navbar.jsx` - Navigation links

**Keep External (Non-page links):**
- App Store/Google Play downloads
- Social media links
- WhitePaper/PitchDeck PDFs
- Payment/Buy links (Fondy)
- Telegram community

---

## Page Structure Template

Each page component should follow this structure:

```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PageName = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      {/* Back button */}
      <Link to="/" className="back-button">
        <ArrowLeft /> Back to Home
      </Link>
      
      {/* Page content based on scraped data */}
      <section className="container">
        <h1>{/* Page title */}</h1>
        {/* Page content */}
      </section>
    </div>
  );
};

export default PageName;
```

---

## Priority Order

1. **NFT Sneaker Pages** (High Priority)
   - These are directly linked from the homepage sneakers section
   - SpacePioneers, Trailblazer, Toptokers, Cyberwarriors, Robots

2. **Marketplace** (High Priority)
   - Multiple buttons link to this throughout the site

3. **Info Pages** (Medium Priority)
   - Gameplay, Cities, Routes
   - Linked from navigation

---

## Translation Strategy

Since pages are content-heavy:
- Extract key content from scraped JSON files
- Add to `i18n.js` under appropriate sections
- Use translation keys in components
- Maintain English/Ukrainian support

---

## Next Steps

1. ✅ Scrape all subpages (DONE)
2. ⏳ Create NFT sneaker page components (5 pages)
3. ⏳ Create marketplace component
4. ⏳ Create info page components (gameplay, cities, routes)
5. ⏳ Update routing in App.jsx
6. ⏳ Update all internal links to use React Router Link
7. ⏳ Test all navigation flows
8. ⏳ Ensure consistent styling across all pages

---

## Files Modified (Upcoming)

- `src/App.jsx` - Add routes
- `src/pages/*.jsx` - Create new page components
- `src/pages/Home.jsx` - Update links to use React Router
- `src/components/Navbar.jsx` - Update links to use React Router
- `src/i18n.js` - Add translations for new pages (optional, can use direct text first)
