"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const db_1 = require("../config/db");
const cuid2_1 = require("@paralleldrive/cuid2");
class BlogModel {
    static async all() {
        const { rows } = await db_1.pool.query('SELECT * FROM blog_posts ORDER BY "createdAt" DESC');
        return rows;
    }
    static async findBySlug(slug) {
        const { rows } = await db_1.pool.query('SELECT * FROM blog_posts WHERE slug = $1 LIMIT 1', [slug]);
        return rows[0] || null;
    }
    static async create(data) {
        const id = (0, cuid2_1.createId)();
        const { rows } = await db_1.pool.query('INSERT INTO blog_posts (id, title, slug, excerpt, body, tags, "heroImage", "authorId", "readingMinutes", "publishedAt", seo, "createdAt", "updatedAt") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW(),NOW()) RETURNING *', [
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
        ]);
        return rows[0];
    }
    static async update(id, data) {
        const fields = [];
        const values = [];
        let idx = 1;
        for (const [k, v] of Object.entries(data)) {
            fields.push(`"${k}" = $${idx++}`);
            // Handle JSON fields - heroImage comes as object from controller
            if (k === 'heroImage' && v !== null && v !== undefined) {
                values.push(JSON.stringify(v));
            }
            else {
                values.push(v);
            }
        }
        if (!fields.length)
            return this.findById(id);
        values.push(id);
        const { rows } = await db_1.pool.query(`UPDATE blog_posts SET ${fields.join(', ')}, "updatedAt" = NOW() WHERE id = $${idx} RETURNING *`, values);
        return rows[0] || null;
    }
    static async findById(id) {
        const { rows } = await db_1.pool.query('SELECT * FROM blog_posts WHERE id = $1 LIMIT 1', [id]);
        return rows[0] || null;
    }
    static async delete(id) {
        await db_1.pool.query('DELETE FROM blog_posts WHERE id = $1', [id]);
    }
}
exports.BlogModel = BlogModel;
//# sourceMappingURL=BlogModel.js.map