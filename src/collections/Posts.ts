import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'post',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Posts
