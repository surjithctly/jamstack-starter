import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { schemaTypes } from "./sanity/schemas";
import { projectId, dataset, previewSecretId } from "./sanity/config";
import settings from "./sanity/schemas/settings";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];

export default defineConfig({
  name: "default",
  title: "Jamstack Starter",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["settings"]),
    visionTool(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
});
