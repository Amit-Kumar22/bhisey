"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const db_1 = require("../config/db");
class BlogModel {
    static async all() {
        const { rows } = await db_1.pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
        return rows;
    }
    static async findBySlug(slug) {
        const { rows } = await db_1.pool.query('SELECT * FROM blogs WHERE slug = $1 LIMIT 1', [slug]);
        return rows[0] || null;
    }
    static async create(data) {
        const { rows } = await db_1.pool.query('INSERT INTO blogs (title, slug, content) VALUES ($1,$2,$3) RETURNING *', [data.title, data.slug, data.content]);
        return rows[0];
    }
    static async update(id, data) {
        const fields = [];
        const values = [];
        let idx = 1;
        for (const [k, v] of Object.entries(data)) {
            fields.push(`${k} = $${idx++}`);
            values.push(v);
        }
        if (!fields.length)
            return this.findById(id);
        values.push(id);
        const { rows } = await db_1.pool.query(`UPDATE blogs SET ${fields.join(', ')}, updated_at = NOW() WHERE id = $${idx} RETURNING *`, values);
        return rows[0] || null;
    }
    static async findById(id) {
        const { rows } = await db_1.pool.query('SELECT * FROM blogs WHERE id = $1 LIMIT 1', [id]);
        return rows[0] || null;
    }
    static async delete(id) {
        await db_1.pool.query('DELETE FROM blogs WHERE id = $1', [id]);
    }
}
exports.BlogModel = BlogModel;
//# sourceMappingURL=BlogModel.js.map