/**
 * Service repository for service management
 */

// import { Service } from '@prisma/client';
import { BaseRepository } from './BaseRepository';

export interface CreateServiceData {
  slug: string;
  name: string;
  excerpt: string;
  hero: any; // JSON data
  bodySections: any[]; // JSON array
  tags: string[];
  publishedAt?: Date;
}

export interface UpdateServiceData {
  slug?: string;
  name?: string;
  excerpt?: string;
  hero?: any;
  bodySections?: any[];
  tags?: string[];
  publishedAt?: Date;
}

export class ServiceRepository extends BaseRepository<any, CreateServiceData, UpdateServiceData> {
  protected modelName = 'service';

  async findPublished(): Promise<any[]> {
    return this.model.findMany({
      where: {
        publishedAt: {
          not: null,
          lte: new Date(),
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findPublishedBySlug(slug: string): Promise<any | null> {
    return this.model.findFirst({
      where: { 
        slug,
        publishedAt: {
          not: null,
          lte: new Date(),
        },
      },
    });
  }

  async findByTags(tags: string[]): Promise<any[]> {
    return this.model.findMany({
      where: {
        tags: {
          hasSome: tags,
        },
        publishedAt: {
          not: null,
          lte: new Date(),
        },
      },
    });
  }

  async publish(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: { publishedAt: new Date() },
    });
  }

  async unpublish(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: { publishedAt: null },
    });
  }
}

export const serviceRepository = new ServiceRepository();