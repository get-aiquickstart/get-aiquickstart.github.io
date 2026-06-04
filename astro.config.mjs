// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://aiquickst.art",
  integrations: [
    starlight({
      title: "AI QuickStart",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        // {
        //   label: "Overview",
        //   slug: "workshop/module01",
        // },
        {
          label: "Current Version",
          items: [
            {
              label: "Onboarding",
              slug: "workshop/module02",
            },
            {
              label: "Python Development with GitHub Codespaces",
              slug: "workshop/module03",
            },
            {
              label: "GitHub Models",
              slug: "workshop/module04",
            },
            {
              label: "OpenAI SDK",
              slug: "workshop/module05",
            },
            {
              label: "Interactive Development with Jupyter Notebook",
              slug: "workshop/module06",
            },
            {
              label: "LangChain",
              slug: "workshop/module07",
            },
            {
              label: "Retrieval Augmented Generation (RAG)",
              slug: "workshop/module08",
            } 
          ]
        },
        {
          label: "Beta Version (in progress)",
          items: [
            {
              label: "Onboarding",
              slug: "curriculum/onboarding",
            },
            {
              label: "Python Development",
              slug: "curriculum/python_development",
            },
            {
              label: "GitHub Models",
              slug: "curriculum/github_models",
            },
            {
              label: "OpenAI SDK",
              slug: "curriculum/openai_sdk",
            },
          ]
        }
      ],
    }),
  ],
});
