---
title: LangChain
description: Using the LangChain package to orchestrate LLM applications
---

The simple Python demos you have written with the OpenAI SDK have some noise that can be removed.  As your applications get more complex, dealing with noise won't be the only issue.  Managing the different pieces of the LLM application such as models, prompts and content will need extra attention.  As these problems come up often, there are Python packages to help manage, or orchestrate the complex nature.  LangChain is the package we will use in this workshop.

Inside of the LangChain package, the different pieces of the LLM application are defined in reusable classes.  Then you sequence the pieces as components in a chain.  The chain is then invoked to return an output.