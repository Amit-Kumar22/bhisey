/**
 * Base repository class with common CRUD operations
 */

import { PrismaClient } from '@prisma/client';
import prisma from '../lib/db';

export abstract class BaseRepository<T, CreateData, UpdateData> {
  protected prisma: PrismaClient;
  protected abstract modelName: string;

  constructor() {
    this.prisma = prisma;
  }

  protected get model() {
    return (this.prisma as any)[this.modelName];
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string): Promise<T | null> {
    return this.model.findUnique({
      where: { slug },
    });
  }

  async findMany(options: {
    where?: any;
    orderBy?: any;
    skip?: number;
    take?: number;
    include?: any;
  } = {}): Promise<T[]> {
    return this.model.findMany(options);
  }

  async findManyWithCount(options: {
    where?: any;
    orderBy?: any;
    skip?: number;
    take?: number;
    include?: any;
  } = {}): Promise<{ items: T[]; total: number }> {
    const [items, total] = await Promise.all([
      this.model.findMany(options),
      this.model.count({ where: options.where }),
    ]);

    return { items, total };
  }

  async create(data: CreateData): Promise<T> {
    return this.model.create({
      data,
    });
  }

  async update(id: string, data: UpdateData): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<T> {
    return this.model.delete({
      where: { id },
    });
  }

  async softDelete(id: string): Promise<T> {
    return this.model.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async count(where?: any): Promise<number> {
    return this.model.count({ where });
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.model.count({
      where: { id },
    });
    return count > 0;
  }

  async existsBySlug(slug: string): Promise<boolean> {
    const count = await this.model.count({
      where: { slug },
    });
    return count > 0;
  }

  async search(query: string, fields: string[]): Promise<T[]> {
    const orConditions = fields.map(field => ({
      [field]: {
        contains: query,
        mode: 'insensitive',
      },
    }));

    return this.model.findMany({
      where: {
        OR: orConditions,
      },
    });
  }

  async bulkCreate(data: CreateData[]): Promise<{ count: number }> {
    return this.model.createMany({
      data,
    });
  }

  async bulkUpdate(ids: string[], data: Partial<UpdateData>): Promise<{ count: number }> {
    return this.model.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data,
    });
  }

  async bulkDelete(ids: string[]): Promise<{ count: number }> {
    return this.model.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  // Transaction support
  async transaction<R>(
    fn: (prisma: PrismaClient) => Promise<R>
  ): Promise<R> {
    return this.prisma.$transaction(fn);
  }
}