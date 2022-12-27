import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/lib/sanity/schemas";
import { projectId, dataset, previewSecretId } from "@/lib/sanity/config";
import settings from "@/lib/sanity/schemas/settings";
import { pageStructure, singletonPlugin } from "@/lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

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
