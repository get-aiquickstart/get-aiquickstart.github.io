# Using the OpenAI SDK

Experimenting with the playground lets you see the power and possibility of Large Language Models and generative AI.  To integrate that same power and possibility into your applications, you'll need to access an API.  GitHub Models exposes a REST API you can use to bring generative AI into your applications.  The REST API emulates the official OpenAI API that you use to access the OpenAI LLMs.  Being a REST API, you can access it from any programming language that supports HTTP calls.  For popular languages OpenAI maintains SDKs to make that integration less difficult.  SDKs exist for .NET, Go, Java, JavaScript, and the choice for this workshop, Python.  As the GitHub Models API emulates the OpenAI API, you can use the OpenAI SDKs with GitHub Models with a few configuration changes.

## Installing the SDK

The OpenAI Python SDK is distributed as a package like the `tiktoken` package you installed earlier in the workshop.  To install the OpenAI Python SDK, use `pip` and install the `openai` package at the command line:
```bash
pip install openai
```