import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'id',
  },
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
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
        },
        {
          name: 'quantity',
          type: 'number',
        },
        {
          name: 'priceAtPurchase',
          type: 'number',
        },
      ],
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'paid', 'shipped', 'cancelled'],
      defaultValue: 'pending',
    },
  ],
}
