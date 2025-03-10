import type { GetTypeByName } from '@content-collections/core';
import type configuration from '../../content-collections.ts';

export type Post = GetTypeByName<typeof configuration, 'posts'>;
export declare const allPosts: Array<Post>;

export type Legal = GetTypeByName<typeof configuration, 'legal'>;
export declare const allLegals: Array<Legal>;
