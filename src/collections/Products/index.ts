import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  //   admin: {
  //     defaultColumns: ['name', 'email'],
  //     useAsTitle: 'name',
  //   },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stock',
      type: 'number',
      defaultValue: 0,
    },
    // {
    //   name: 'category',
    //   type: 'relationship',
    //   relationTo: 'categories',
    // },
  ],
}
