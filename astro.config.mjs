// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://aiquickst.art",
  integrations: [
    starlight({
      title: "AI QuickStart",
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-3GTSPZR1PG',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GTSPZR1PG');
          `,
        },
      ],
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
            {
              label: "Chat History",
              slug: "curriculum/chat_history",
            },
            {
              label: "LangChain (in progress)",
              slug: "curriculum/langchain",
            }
          ]
        }
      ],
    }),
  ],
});
