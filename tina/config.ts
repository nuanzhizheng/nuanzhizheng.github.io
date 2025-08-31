import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Comment these out for local mode
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "A brief description of the page",
          },
          {
            type: "rich-text",
            name: "aboutContent",
            label: "About Content",
            description: "Main about section content",
            isBody: true,
          },
          {
            type: "image",
            name: "profileImage",
            label: "Profile Image",
            description: "Profile photo",
          },
        ],
      },
    ],
  },
});
