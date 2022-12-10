import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { apiVersion, dataset, previewSecretId, projectId } from './sanity/lib/config'
import settings from './sanity/schemas/settings'
import { pageStructure, singletonPlugin } from './sanity/plugins/settings'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"]

export default defineConfig({
  name: 'default',
  title: 'Sanity v3 Test',
  basePath: '/studio',
  projectId: projectId || 'edlnx0sb',
  dataset: dataset || 'production',

  plugins: [deskTool({
    structure: pageStructure([settings]),
    // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
    // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
  }), singletonPlugin(["settings"]), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
