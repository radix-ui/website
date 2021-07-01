import rehypeHighlightCode from '@lib/rehype-highlight-code';
import rehypeMetaAttribute from '@lib/rehype-meta-attribute';
import { defineDocument, fromLocalContent } from 'contentlayer/source-local';
import remarkSlug from 'remark-slug';

export const PrimitiveDoc = defineDocument(() => ({
  name: 'PrimitiveDoc',
  filePathPattern: `primitives/**/*.mdx`,
  fileType: 'mdx',
  fields: {
    metaTitle: {
      type: 'string',
      required: true,
    },
    metaDescription: {
      type: 'string',
      required: false,
    },
    metaImage: {
      type: 'string',
      required: false,
    },
    name: {
      type: 'string',
      required: false,
    },
    aria: {
      type: 'string',
      required: false,
    },
    publishedName: {
      type: 'string',
      required: false,
    },
    features: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (_) => _._raw.flattenedPath },
  },
}));

export default fromLocalContent({
  contentDirPath: 'data',
  schema: [PrimitiveDoc],
  mdx: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [rehypeMetaAttribute, rehypeHighlightCode],
  },
});
