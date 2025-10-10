"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStudyModel = void 0;
const db_1 = require("../config/db");
const cuid2_1 = require("@paralleldrive/cuid2");
class CaseStudyModel {
    static async all() {
        const { rows } = await db_1.pool.query('SELECT * FROM case_studies ORDER BY "createdAt" DESC');
        return rows;
    }
    static async findBySlug(slug) {
        const { rows } = await db_1.pool.query('SELECT * FROM case_studies WHERE slug = $1 LIMIT 1', [slug]);
        return rows[0] || null;
    }
    static async findById(id) {
        const { rows } = await db_1.pool.query('SELECT * FROM case_studies WHERE id = $1 LIMIT 1', [id]);
        return rows[0] || null;
    }
    static async create(data) {
        const id = (0, cuid2_1.createId)();
        const { rows } = await db_1.pool.query('INSERT INTO case_studies (id, title, slug, "clientName", industry, challenge, solution, results, "techStack", "heroImage", "publishedAt", "createdAt", "updatedAt") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW(),NOW()) RETURNING *', [
            id,
            data.title,
            data.slug,
            data.clientName,
            data.industry,
            data.challenge,
            data.solution,
            data.results && data.results.length > 0 ? JSON.stringify(data.results) : null,
            data.techStack && data.techStack.length > 0 ? data.techStack : null,
            data.heroImage ? JSON.stringify(data.heroImage) : null,
            new Date()
        ]);
        return rows[0];
    }
    static async update(id, data) {
        const fields = [];
        const values = [];
        let idx = 1;
        for (const [k, v] of Object.entries(data)) {
            fields.push(`"${k}" = $${idx++}`);
            // Handle JSON fields - heroImage and results come as objects from controller
            if (k === 'heroImage' && v !== null && v !== undefined) {
                values.push(JSON.stringify(v));
            }
            else if (k === 'results' && v !== null && v !== undefined) {
                values.push(JSON.stringify(v));
            }
            else {
                values.push(v);
            }
        }
        if (!fields.length)
            return this.findById(id);
        values.push(id);
        const { rows } = await db_1.pool.query(`UPDATE case_studies SET ${fields.join(', ')}, "updatedAt" = NOW() WHERE id = $${idx} RETURNING *`, values);
        return rows[0] || null;
    }
    static async delete(id) {
        await db_1.pool.query('DELETE FROM case_studies WHERE id = $1', [id]);
    }
}
exports.CaseStudyModel = CaseStudyModel;
//# sourceMappingURL=CaseStudyModel.js.map