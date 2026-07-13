# 📚 Bookshelf — Product Requirements Document
**Version:** 1.0 (MVP)
**Status:** Pre-build
**Last Updated:** May 2026

---
<a target="_blank" href="https://icons8.com/icon/ZtLgUqs1Z5TR/open-book">Open Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

## 1. Product Overview

### 1.1 Vision
Bookshelf is a social book catalog web app that lets readers discover, track, and share the books they love — built for the modern reader who wants a clean, fast, community-forward experience without the noise.

Think: Goodreads' core utility, Exercism's aesthetic discipline, and zero algorithmic bloat.

### 1.2 Problem Statement
Goodreads is the dominant player but is notorious for its outdated UI, slow performance, and Amazon-owned data incentives. Readers want a place that respects their taste, shows their friends' reading life, and just works beautifully.

### 1.3 Goals (MVP)
- Let users catalog books into personal shelves
- Enable ratings and short reviews
- Surface what friends are reading
- Provide clean book discovery by genre/mood
- Be fast, beautiful, and free to use

### 1.4 Non-Goals (MVP — save for v2+)
- Native mobile apps
- Deep recommendation algorithms (ML-based)
- Book clubs / group reading features
- Author profiles and AMAs
- Audiobook / ebook tracking
- Reading challenges with badges

---

## 2. Design System

The visual language is directly inspired by [exercism.org](https://exercism.org). All design decisions should reference this before diverging.

### 2.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#604FCD` | Buttons, links, active states, CTAs |
| `--color-primary-dark` | `#42349B` | Button hover, accents |
| `--color-primary-deep` | `#4737B1` | Auth page side panel background |
| `--color-primary-soft` | `#AFA7E6` | Disabled button background |
| `--color-primary-shadow` | `rgba(96, 79, 205, 0.142)` | Soft drop shadow under buttons |
| `--color-navy` | `#130B43` | Top banner, footer, hero heading text |
| `--color-highlight` | `#FED28F` | Accent highlights (e.g. warm link in dark banner) |
| `--color-bg-light` | `#F5F5FD` | Button hover backgrounds, section fills |
| `--color-bg-white` | `#FFFFFF` | Cards, forms, nav |
| `--color-border` | `rgba(0, 0, 0, 0.10)` | Nav divider, subtle borders |
| `--color-text-primary` | `#26282D` | Body copy |
| `--color-text-muted` | `#3F3A5A` | Secondary labels, info strip copy |
| `--color-text-nav` | `#5D5588` | Nav link text |
| `--color-input-border` | `#A9A6BD` | Form input borders |
| `--color-input-placeholder` | `#77719F` | Form input placeholders |
| `--color-link` | `#2E57E8` | Form links, input focus state |
| `--color-success` | `#10B981` | Currently Reading indicator |
| `--color-star` | `#F59E0B` | Star ratings |

### 2.2 Typography

Match Exercism's typographic personality: bold, intentional, no fluff.

| Role | Spec |
|---|---|
| Display / H1 | `700` weight, `2.5–3rem`, dark navy, tight letter-spacing |
| Headline emphasis | Wrap key words in `<mark>` with yellow highlight background |
| H2 / Section titles | `700`, `1.75rem`, with underline accent on key phrase |
| Body | `400`, `1rem`, `1.6` line-height, `--color-text-primary` |
| Labels / Meta | `500`, `0.875rem`, `--color-text-muted` |
| Font family | System sans-serif stack or Inter; avoid serif for UI |

### 2.3 Geometric Motifs
Exercism uses hexagons as a signature shape. Bookshelf should use **open books** and **stacked pages** as the equivalent recurring motif in backgrounds and section dividers. Subtle, not literal.

### 2.4 Component Patterns (inspired by Exercism)
- **Top announcement banner:** Dark navy background, centered text, dismissible — used for key messaging
- **Primary CTA:** Solid `--color-primary` button, white text, `8px` radius
- **Secondary CTA:** Outlined, `--color-primary` border and text
- **Info strip:** Branded card beneath hero (e.g. "Bookshelf is open-source and free")
- **Dropdown nav:** Clean mega-menu on hover with icon + description per link
- **Cards:** White background, subtle border, `12px` radius, hover lift shadow

---

## 3. Information Architecture

### 3.1 Navigation (Top Bar)
```
[Logo]   Discover   My Shelves   Community   More        [Sign Up]  [Log In]
```

**Discover** dropdown:
- Browse by Genre
- New & Trending
- Staff Picks
- Search Books

**My Shelves** dropdown (authenticated):
- Want to Read
- Currently Reading
- Read
- My Reviews
- My Stats

**Community** dropdown:
- Friend Activity Feed
- Reading Lists (public)
- Book Reviews

**More** dropdown:
- About Bookshelf
- Open Source
- Donate / Support

### 3.2 Core Pages

| Page | Route | Description |
|---|---|---|
| Landing | `/` | Marketing homepage (unauthenticated) |
| Dashboard | `/home` | Authenticated home feed |
| Book Detail | `/books/:id` | Full book page |
| Author Page | `/authors/:id` | Author info + their books |
| Search | `/search` | Search results |
| Genre Browse | `/genres/:slug` | Books by genre |
| Shelf | `/users/:id/shelves` | User's public shelves |
| Profile | `/profile` | Own profile |
| Settings | `/settings` | Account preferences |
| Sign Up / Log In | `/signup`, `/login` | Auth pages |

---

## 4. Feature Specifications

### 4.1 Book Catalog

**Source:** Use the [Open Library API](https://openlibrary.org/developers/api) or [Google Books API](https://developers.google.com/books/docs/v1/using) for book data. Cache frequently accessed records in your own DB.

**Book record includes:**
- Title, Author(s)
- Cover image (from API or user-submitted)
- ISBN / Open Library ID
- Description / Synopsis
- Genre tags (editable by community)
- Publication date, Publisher
- Page count

**Search behavior:**
- Real-time search suggestions (debounced, 300ms)
- Search across title, author, ISBN
- Filter by genre, rating, year

---

### 4.2 Personal Shelves

Every authenticated user has three default shelves:

| Shelf | Slug | Notes |
|---|---|---|
| Want to Read | `want-to-read` | Default new shelf |
| Currently Reading | `reading` | Max 5 books (soft limit, not enforced) |
| Read | `read` | Completed books |

**Add to shelf:** Clicking "Add to Shelf" on any book opens a dropdown to choose which shelf. A book can only be on one shelf at a time — moving it removes it from the previous one.

**Custom shelves (v1.1):** Let users create named shelves (e.g. "Summer Reads", "Favorites").

---

### 4.3 Ratings & Reviews

- **Star rating:** 1–5 stars, half-star allowed
- **Review text:** Optional, max 2000 characters, Markdown-lite (bold, italic, links)
- **Review visibility:** Public (default), Friends only, Private
- One review per book per user; editable at any time
- Reviews display with: user avatar, name, date, shelf status, star rating, text

**Review feed on book page:**
- Sort by: Most Recent, Most Helpful (upvotes), Friends First
- Users can "like" a review (no dislike)

---

### 4.4 Friend / Social System

**Connections:** Follow-model (asymmetric, like Twitter — not mutual like Facebook)

- Follow a user → see their shelf activity in your feed
- No approval required (default public profiles)
- Option to set profile to private (followers must be approved)

**Activity Feed (authenticated `/home`):**
- Shows: friend added a book to shelf, friend finished a book, friend posted a review, friend gave a rating
- Grouped by user when multiple actions happen close together
- Paginated (20 items per page, load more)

---

### 4.5 User Profile

**Public profile includes:**
- Display name, avatar, bio (280 chars)
- Reading stats: books read, pages read (estimated), avg rating given
- Currently Reading (if public)
- Recently Read shelf
- Recent reviews
- Followers / Following counts

**Stats (simple, no ML):**
- Total books read (lifetime)
- Books read this year
- Favorite genres (derived from shelf — top 3 by count)
- Average rating given
- Reading streak (days in a row with activity — optional v1.1)

---

### 4.6 Book Discovery

**Genre Browse page:**
- Grid of genre cards with cover mosaic background
- Genres: Fiction, Non-fiction, Mystery, Sci-Fi, Fantasy, Romance, Biography, Self-Help, History, Classics, Horror, Young Adult, Graphic Novels, Poetry

**Trending section (homepage):**
- Books with the most "Want to Read" additions in the last 7 days
- No ML needed — pure activity count, cached hourly

**Staff Picks:**
- Manually curated list by admin
- Simple CMS: admin can add/remove books from a featured list

---

### 4.7 Authentication

- Email + password (with email verification)
- OAuth: Google, GitHub (nice-to-have v1.1)
- JWT-based sessions
- Password reset via email
- Account deletion (GDPR-friendly, soft delete → hard delete after 30 days)

---

## 5. User Flows

### 5.1 Core Onboarding Flow (New User)
```
Land on Homepage
  → Click "Sign up for free"
  → Enter name, email, password
  → Email verification sent
  → Verify → Redirected to Onboarding wizard:
      Step 1: Pick 5+ genres you love
      Step 2: Add 3+ books to your shelves (seeded suggestions based on genres)
      Step 3: Find people to follow (suggest popular readers in your genres)
  → Land on personalized dashboard
```

### 5.2 Adding a Book to Shelf
```
Search for book (nav search bar or /search)
  → Click book card → Book Detail page
  → Click "Add to Shelf" button
  → Dropdown: Want to Read / Currently Reading / Read
  → Select shelf → Toast confirmation → Button updates to shelf name
```

### 5.3 Writing a Review
```
Book Detail page → "Write a Review" section (only if book is on a shelf)
  → Tap stars to rate
  → Type review text (optional)
  → Set visibility
  → Submit → Review appears on page immediately (optimistic update)
```

---

## 6. Data Models (Simplified)

### User
```
id, email, password_hash, display_name, avatar_url, bio,
is_private, created_at, updated_at
```

### Book
```
id, title, author_ids[], cover_url, isbn, description,
genre_ids[], publication_date, page_count, open_library_id,
avg_rating, ratings_count, created_at
```

### ShelfEntry
```
id, user_id, book_id, shelf (enum: want|reading|read),
added_at, finished_at (nullable)
```

### Review
```
id, user_id, book_id, rating (1-10 internally, displayed as 0.5-5),
body, visibility (enum: public|friends|private),
created_at, updated_at, likes_count
```

### Follow
```
follower_id, followee_id, created_at
```

### Activity
```
id, actor_id, type (enum: shelved|reviewed|rated|finished),
book_id, review_id (nullable), shelf (nullable), created_at
```

---

## 7. Tech Stack Recommendations

Since you're building this yourself in React, here's a suggested stack that fits the product:

| Layer | Choice | Notes |
|---|---|---|
| Frontend | React + Vite | Fast DX |
| Styling | Pure CSS + Custom Properties | Define all design tokens in `:root {}` — same discipline as Tailwind, no new syntax to learn |
| State (client) | Redux Toolkit | Use for auth, shelves, feed, search results |
| State (server/API) | RTK Query | Ships with RTK — handles caching, loading, refetching. No need for React Query |
| Router | React Router v6 | |
| Backend | Node.js + Express | Clean REST API |
| Database | MongoDB | Document model works well for books, reviews, shelves |
| ODM | Mongoose | Schema + model management, use `populate()` for relational refs (follows, activity) |
| Auth | JWT (manual) or Passport.js | Store token in Redux auth slice |
| Book Data | Open Library API | Free, no key needed — `https://openlibrary.org/search.json?q=...` |
| File Storage | Cloudinary | For user avatars — free tier is sufficient for MVP |
| Deployment | Vercel (frontend) + Render (backend) | |

**Redux store shape (suggested slices):**
```
store/
  authSlice.js        → current user, token, isAuthenticated
  shelfSlice.js       → user's shelf entries
  feedSlice.js        → activity feed items
  searchSlice.js      → search results, query, filters
  api.js              → RTK Query API definition (book fetching, reviews, follows)
```

**Keep in local state (`useState`):**
- Form inputs (signup, review form, search bar)
- Modal / dropdown open state
- Star rating hover effect
- Toast/notification visibility

---

## 8. MVP Scope (What ships in v1.0)

### ✅ In Scope
- Landing page (unauthenticated)
- Sign up / Log in / Email verification
- Onboarding wizard (genre selection + book seeding)
- Book search (via Open Library API)
- Book detail page
- Three core shelves (Want to Read, Reading, Read)
- Star ratings + written reviews
- Public user profiles with reading stats
- Follow system (asymmetric)
- Activity feed (friend activity)
- Genre browse page
- Trending books (activity-count based)
- Admin: Staff Picks CMS (basic)

### ❌ Out of Scope (v2+)
- Custom shelves
- Reading challenges / badges
- Book clubs
- Recommendation algorithm
- Mobile apps
- Author profiles
- Audiobook / ebook support
- Reading streak tracking
- OAuth (Google / GitHub)

---

## 9. Landing Page Content

> Full copy and structure for the `/` homepage (unauthenticated)

---

### 9.1 Announcement Banner (Dark Navy Strip)
```
📖 Bookshelf is free and open-source, forever. Read more →
```

---

### 9.2 Hero Section

**Headline:**
> Find your next **great read.**

*(Highlight "great read" in yellow, Exercism-style)*

**Subheadline:**
> Track what you've read, discover what's next, and see what your friends are loving — all in one beautiful place. Bookshelf is free, ad-free, and built for readers.

**CTA Buttons:**
- Primary: `Start your shelf — it's free`
- Secondary: `Browse books`

**Info Strip (below CTAs):**
> [Bookshelf logo] is a community-funded, open-source project. No ads. No algorithms. Just books. — `Learn more →`

**Hero Illustration:**
> An illustrated stack of books with small floating user avatars hovering above them, suggesting community. Warm purples and yellows.

---

### 9.3 Section 1 — Social Proof / Stats

**Headline:**
> Join readers already tracking their **reading life**

**Stats row:**
- `14,200+ books catalogued`
- `3,800+ readers`
- `9,100+ reviews written`

*(These can be real or seeded initially)*

---

### 9.4 Section 2 — Core Feature: Shelves

**Section icon:** Hexagonal icon with a bookshelf motif

**Headline:**
> Organize your reading into **three simple shelves**

**Body:**
> Want to Read. Currently Reading. Read. That's all you need to start. Add any book in seconds and your shelf is always there when you come back.

**Visual:** Illustrated UI of the shelf dropdown on a book card

---

### 9.5 Section 3 — Core Feature: Reviews & Ratings

**Headline:**
> Rate, review, and **remember what you thought**

**Body:**
> Write a short review, give it stars, and set who sees it. Look back years later and remember exactly how a book made you feel. Your reading life, in your own words.

**Visual:** Review card mockup (avatar, stars, review text snippet, book cover thumbnail)

---

### 9.6 Section 4 — Core Feature: Social Feed

**Headline:**
> See what your friends are **reading right now**

**Body:**
> Follow the readers you trust. When a friend picks up a new book, writes a review, or finishes something they loved — you'll know. Discover your next read through people, not algorithms.

**Visual:** Activity feed mockup (3–4 friend activity items)

---

### 9.7 Section 5 — Discovery

**Headline:**
> Explore and **find your next book** across 14 genres

**Body:**
> Browse curated collections, see what's trending this week, or dive into a genre you've never explored. Discovery without the noise.

**Visual:** Genre card grid (4 genres visible, suggesting more below)

---

### 9.8 Bottom CTA Section (Dark background)

**Headline:**
> Your reading life deserves a **beautiful home.**

**Subheadline:**
> Free forever. No ads. No tracking. Just books.

**CTA Button:**
> `Create your free shelf`

---

### 9.9 Footer

**Links:**
- About | Open Source | Privacy | Terms | Contact

**Tagline:**
> Made for readers, by readers. 📚

---

## 10. Success Metrics (MVP)

| Metric | Target at 3 months |
|---|---|
| Registered users | 500+ |
| Books catalogued | 5,000+ |
| Reviews written | 1,000+ |
| DAU/MAU ratio | > 20% |
| Avg books per user | > 8 |
| Users with 1+ follower | > 40% |

---

## 11. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Open Library API rate limits | Cache book records in DB after first fetch |
| Cold start problem (no content) | Seed with curated lists; show global trending before friend activity populates |
| Cover images missing | Fallback to generated cover (title + author initials on colored bg) |
| Spam reviews | Rate limit + minimum shelf requirement to review |
| Performance on feed | Paginate aggressively; pre-compute activity counts async |

---

*PRD v1.0 — Ready for build. Iterate after first internal test round.*