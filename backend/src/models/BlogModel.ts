import { pool } from '../config/db';
import { createId } from '@paralleldrive/cuid2';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  tags: string[];
  readingMinutes: number;
  heroImage: any;
  seo: any;
  publishedAt: Date;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class BlogModel {
  static async all(): Promise<Blog[]> {
    const { rows } = await pool.query('SELECT * FROM blog_posts ORDER BY "createdAt" DESC');
    return rows;
  }

  static async findBySlug(slug: string): Promise<Blog | null> {
    const { rows } = await pool.query('SELECT * FROM blog_posts WHERE slug = $1 LIMIT 1', [slug]);
    return rows[0] || null;
  }

  static async create(data: { title: string; slug: string; excerpt?: string; body: string; tags?: string[]; heroImage?: any; authorId: string }): Promise<Blog> {
    const id = createId();
    const { rows } = await pool.query(
      'INSERT INTO blog_posts (id, title, slug, excerpt, body, tags, "heroImage", "authorId", "readingMinutes", "publishedAt", seo, "createdAt", "updatedAt") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW(),NOW()) RETURNING *',
      [
        id, 
        data.title, 
        data.slug, 
        data.excerpt || '', 
        data.body, 
        data.tags && data.tags.length > 0 ? data.tags : null, 
        data.heroImage ? JSON.stringify(data.heroImage) : null,
        data.authorId, 
        5, 
        new Date(), 
        {}
      ]
    );
    return rows[0];
  }

  static async update(id: string, data: Partial<Pick<Blog, 'title' | 'slug' | 'excerpt' | 'body' | 'tags' | 'heroImage'>>): Promise<Blog | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let idx = 1;
    for (const [k, v] of Object.entries(data)) {
      fields.push(`"${k}" = $${idx++}`);
      // Handle JSON fields - heroImage comes as object from controller
      if (k === 'heroImage' && v !== null && v !== undefined) {
        values.push(JSON.stringify(v));
      } else {
        values.push(v);
      }
    }
    if (!fields.length) return this.findById(id);
    values.push(id);
    const { rows } = await pool.query(
      `UPDATE blog_posts SET ${fields.join(', ')}, "updatedAt" = NOW() WHERE id = $${idx} RETURNING *`,
      values
    );
    return rows[0] || null;
  }

  static async findById(id: string): Promise<Blog | null> {
    const { rows } = await pool.query('SELECT * FROM blog_posts WHERE id = $1 LIMIT 1', [id]);
    return rows[0] || null;
  }

  static async delete(id: string): Promise<void> {
    await pool.query('DELETE FROM blog_posts WHERE id = $1', [id]);
  }
}