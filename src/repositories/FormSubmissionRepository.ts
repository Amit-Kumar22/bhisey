/**
 * Form submission repository for contact forms and applications
 */

import { BaseRepository } from './BaseRepository';

export interface CreateFormSubmissionData {
  formType: string;
  payload: any; // JSON data
  status?: string;
  meta: any; // JSON metadata
  jobId?: string;
  reviewerId?: string;
}

export interface UpdateFormSubmissionData {
  status?: string;
  notes?: string;
  reviewerId?: string;
}

export class FormSubmissionRepository extends BaseRepository<any, CreateFormSubmissionData, UpdateFormSubmissionData> {
  protected modelName = 'formSubmission';

  async findByFormType(formType: string): Promise<any[]> {
    return this.model.findMany({
      where: { formType },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByStatus(status: string): Promise<any[]> {
    return this.model.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<any[]> {
    return this.model.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: string, status: string, reviewerId?: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: {
        status,
        ...(reviewerId && { reviewerId }),
        updatedAt: new Date(),
      },
    });
  }

  async getSubmissionStats(): Promise<{
    total: number;
    new: number;
    reviewed: number;
    archived: number;
  }> {
    const [total, newCount, reviewedCount, archivedCount] = await Promise.all([
      this.model.count(),
      this.model.count({ where: { status: 'NEW' } }),
      this.model.count({ where: { status: 'REVIEWED' } }),
      this.model.count({ where: { status: 'ARCHIVED' } }),
    ]);

    return {
      total,
      new: newCount,
      reviewed: reviewedCount,
      archived: archivedCount,
    };
  }
}

export const formSubmissionRepository = new FormSubmissionRepository();