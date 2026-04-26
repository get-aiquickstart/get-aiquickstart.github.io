---
title: Retrieval Augmented Generation
description: Grounding LLM responses using your own data
---

The power of LLMs is restricted by several limitations. First, it takes a long time to train them.  They are called **large** language models for a reason.  Continuously retraining foundation models like GPT-5 and Claude Opus is impractical.  At some point there is a limit to recency of the training data.  If you need up to date information, it mandates a different solution.  In addition, foundation models are trained on broad, public data sources.  They won't have access to private datastores behind company or enterprise intranets.  

Fortunately there is a way to provide foundation models access to recent and private information.  And this is called Retrieval Augmented Generation, or RAG.