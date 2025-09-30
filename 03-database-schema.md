# 03. Database Schema Design (PostgreSQL)

Conventions
- Naming: snake_case table & column names; singular table names optional but using plural (services, blog_posts) for clarity.
- Primary Keys: surrogate bigserial id (or UUID v7 for distributed scalability). Choose UUID for media & users; bigserial acceptable for most content.
- Timestamps: created_at, updated_at (trigger to auto-update updated_at). Soft delete via deleted_at nullable.
- Text Search: Use tsvector columns with GIN indexes for searchable entities (posts, news, case studies, jobs, pages).
- JSONB: For flexible section blocks & form payloads.

Entity List
- navigation_items
- pages
- services
- verticals
- partners
- case_studies
- blog_posts
- news_items
- testimonials
- awards
- client_logos
- jobs
- form_submissions
- users
- roles
- user_roles (join)
- media_assets
- tags
- tag_mappings (polymorphic join)
- case_study_metrics
- redirects
- audit_log
- revalidation_queue (internal)

## Table Specifications

navigation_items
- id (pk)
- label (varchar 100)
- path (varchar 255)
- parent_id (fk -> navigation_items.id null)
- position (int)
- menu (enum: 'primary','footer','secondary')
- group_label (varchar 100 null) (for footer groups)
- active (boolean default true)
Indexes: (menu, position), (parent_id)

pages
- id (pk)
- slug (varchar 150 unique)
- title (varchar 180)
- hero jsonb (structured hero data)
- sections jsonb[] (ordered content blocks)
- seo jsonb (title, description, og, schema)
- status (enum: 'draft','published','archived')
- published_at (timestamp)
- deleted_at (timestamp null)
- search_vector tsvector (generated from title + sections text)
Indexes: unique(slug), GIN(search_vector), (status)

services
- id
- slug (unique)
- name (varchar 150)
- excerpt (text)
- hero jsonb
- body_sections jsonb[]
- tags text[]
- order_rank int
- status enum('draft','published')
- published_at timestamp
- search_vector tsvector
Indexes: unique(slug), GIN(search_vector), (status)

verticals
- id
- slug unique
- name varchar 150
- summary text
- body_sections jsonb[]
- industries text[]
- status enum
- published_at timestamp
- search_vector tsvector
Indexes: unique(slug), GIN(search_vector)

partners
- id
- slug unique
- name varchar 120
- description text
- tier varchar 60 null
- capabilities text[]
- logos jsonb[] (media refs)
- status enum
- published_at timestamp
Indexes: unique(slug)

case_studies
- id
- slug unique
- title varchar 180
- client_name varchar 180
- industry varchar 120
- services text[]
- verticals text[]
- challenge text
- solution text
- results_summary text
- hero_image uuid (fk media_assets.id)
- tech_stack text[]
- published_at timestamp
- status enum
- search_vector tsvector
Indexes: unique(slug), GIN(search_vector), GIN(services), GIN(verticals), (published_at DESC)

case_study_metrics
- id
- case_study_id fk -> case_studies.id ON DELETE CASCADE
- label varchar 120
- value numeric(18,4) or varchar (if non-numeric e.g. "3x") choose text for flexibility
- unit varchar 30 null
- accent boolean default false
Indexes: (case_study_id)

blog_posts
- id
- slug unique
- title varchar 180
- excerpt text
- body html/text
- author_id fk users.id
- tags text[]
- reading_minutes int
- published_at timestamp
- status enum('draft','scheduled','published','archived')
- search_vector tsvector
Indexes: unique(slug), GIN(search_vector), GIN(tags), (published_at DESC)

news_items (similar to blog_posts but separate for editorial workflow)
- id
- slug unique
- title
- excerpt
- body
- author_id fk users.id
- tags text[]
- published_at
- status enum
- search_vector tsvector
Indexes: unique(slug), GIN(search_vector), (published_at DESC)

testimonials
- id
- client_name varchar 120
- role_title varchar 160
- company varchar 160
- quote text
- logo_media_id uuid fk media_assets
- order_rank int
- active boolean
Indexes: (active, order_rank)

awards
- id
- name varchar 160
- issuer varchar 160
- year int
- logo_media_id uuid fk media_assets
- order_rank int
Indexes: (year DESC), (order_rank)

client_logos
- id
- company_name varchar 160
- category enum('client','partner')
- media_id uuid fk media_assets
- order_rank int
- active boolean
Indexes: (category, order_rank)

jobs
- id
- slug unique
- title varchar 160
- department varchar 120
- location varchar 120
- remote boolean
- description text (html/markdown)
- requirements text[]
- benefits text[]
- status enum('draft','open','closed')
- posted_at timestamp
- search_vector tsvector
Indexes: unique(slug), (status), GIN(search_vector), (department)

form_submissions
- id uuid (default gen_random_uuid())
- form_type enum('contact','application','newsletter','consent')
- payload jsonb
- status enum('new','reviewed','archived')
- meta jsonb (ip_hash, user_agent, file_refs[])
- created_at timestamp default now()
Indexes: (form_type, created_at DESC), GIN(payload)

users
- id uuid
- email citext unique
- name varchar 150
- password_hash text
- roles_cached text[] (denormalized for quick check)
- last_login_at timestamp
- active boolean default true
- created_at, updated_at
Indexes: unique(email), (active)

roles
- id
- name varchar unique ('admin','editor','reviewer','viewer')
- description text

user_roles
- user_id uuid fk users ON DELETE CASCADE
- role_id fk roles id ON DELETE CASCADE
- primary key(user_id, role_id)

media_assets
- id uuid
- file_name varchar 255
- storage_path text
- mime_type varchar 120
- width int null
- height int null
- size_bytes int
- alt_text varchar 255
- title varchar 255 null
- tags text[]
- status enum('pending_scan','active','quarantined','archived')
- created_at timestamp
Indexes: (status), GIN(tags)

tags
- id
- name varchar 80 unique
- slug varchar 100 unique

tag_mappings
- tag_id fk tags
- entity_type enum('blog_post','news_item','case_study','service','page')
- entity_id int (or uuid if referencing uuid table) – align type per table; consider big int + separate mapping tables option.
- primary key (tag_id, entity_type, entity_id)
Indexes: (entity_type, entity_id)

redirects
- id
- source_path varchar 255 unique
- target_path varchar 255
- status_code int default 301
- created_at timestamp
Indexes: (source_path)

audit_log
- id bigserial
- user_id uuid null
- action varchar 80
- entity_type varchar 60
- entity_id varchar 60
- before jsonb
- after jsonb
- ip_hash varchar 128
- created_at timestamp default now()
Indexes: (entity_type, entity_id), (user_id, created_at DESC)

revalidation_queue
- id bigserial
- path varchar 255
- status enum('queued','processing','done','failed')
- attempts int
- last_error text
- created_at timestamp
- updated_at timestamp
Indexes: (status), (created_at)

## Relationships Summary
- users ↔ roles (many-to-many via user_roles)
- pages, services, verticals, partners, blog_posts, news_items, case_studies reference media_assets via structured json or foreign keys (hero images, logos)
- case_studies ↔ case_study_metrics (1:M)
- blog_posts/news_items/case_studies ↔ tags (M:M via tag_mappings or native text[] as hybrid approach; choose one canonical: use tags table for controlled taxonomy)
- testimonials → media_assets (logo)
- awards → media_assets
- client_logos → media_assets
- jobs have applications (applications stored in form_submissions with form_type='application' referencing job slug/id inside payload)

## Full Text Search Implementation
Example for blog_posts:
ALTER TABLE blog_posts ADD COLUMN search_vector tsvector GENERATED ALWAYS AS (
  setweight(to_tsvector('english', coalesce(title,'')), 'A') ||
  setweight(to_tsvector('english', coalesce(excerpt,'')), 'B') ||
  setweight(to_tsvector('english', coalesce(body,'')), 'C')
) STORED;
CREATE INDEX blog_posts_search_idx ON blog_posts USING GIN (search_vector);

## Sample Entity JSON Structures
Section Block Examples (stored in pages.sections or services.body_sections):
{
  "type": "richText",
  "html": "<p>We thrive on taking your challenges head-on...</p>"
}
{
  "type": "testimonial",
  "testimonialId": 42
}
{
  "type": "metrics",
  "items": [ { "label": "Time to Market Reduction", "value": "40%" } ]
}

## Constraints & Integrity
- Use CHECK constraints for enum domain or CREATE TYPE for enums (e.g., CREATE TYPE content_status AS ENUM (...)).
- BEFORE DELETE triggers on core content tables to cascade soft delete (set deleted_at) instead of physical delete if business rule requires retention.
- Row Level Security (RLS) not required for public content but can be enabled for defense-in-depth on admin tables (users, audit_log).

## Index Strategy
- B-Tree for equality and ordering: slugs, status, published_at.
- GIN for arrays/tags & full text vectors.
- Partial indexes example: CREATE INDEX idx_blog_posts_published ON blog_posts(published_at) WHERE status='published';
- Consider covering index for frequent listing: (status, published_at DESC, id) INCLUDE (title, slug, excerpt).

## Performance Considerations
- Denormalize frequently needed display fields (e.g., roles_cached) to avoid joins on every auth check.
- Precompute aggregated homepage snapshot JSON in separate cache store not DB heavy.
- Use connection pooling (PgBouncer) for high read concurrency.

## Migrations Workflow
- Tool: Prisma or Knex (recommend Prisma for DX + type safety). Map enums carefully (Prisma native enums).
- Migration naming: YYYYMMDDHHMM__description.sql
- Add data seed script for baseline taxonomy (roles, initial admin, default navigation, tags).

## Backup & Retention
- Nightly logical backups (pg_dump) + point-in-time recovery via WAL archiving.
- Retain 7 daily, 4 weekly, 6 monthly snapshots.

## Example Query Patterns
List published blog posts:
SELECT id, slug, title, excerpt, published_at FROM blog_posts WHERE status='published' ORDER BY published_at DESC LIMIT $1 OFFSET $2;

Search multi-entity (union):
(SELECT 'blog' AS type, slug, title, ts_rank(search_vector, plainto_tsquery($1)) rank FROM blog_posts WHERE search_vector @@ plainto_tsquery($1) AND status='published')
UNION ALL
(SELECT 'case' AS type, slug, title, ts_rank(search_vector, plainto_tsquery($1)) rank FROM case_studies WHERE search_vector @@ plainto_tsquery($1) AND status='published')
ORDER BY rank DESC LIMIT 20;

## Data Lifecycle
- Draft → Published → Archived (retain for historical analytics; exclude from listings).
- Media scanning pipeline: status moves pending_scan → active after AV scan success.
- Form submissions older than 24 months anonymized (GDPR style) by clearing PII fields inside payload while keeping aggregated stats.

## Assumptions & Open Items
- Single-language (English) initial; add locale field later for i18n.
- tags approach chosen: dedicated tags table + mapping for governance (avoid uncontrolled growth of free text arrays).
- Log retention external (ELK or cloud logs) – audit_log remains lean (rotation policy maybe archive older than 2 years).
- Search weighting simplistic; can refine using BM25 in external search later.

Schema aligns with API endpoints (02-backend-apis.md) and content structures (01-site-structure.md). Data flow details in 04-data-flow.md.
