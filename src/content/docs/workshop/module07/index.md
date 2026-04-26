---
title: LangChain
description: Using the LangChain package to orchestrate LLM applications
---

The simple Python demos you have written with the OpenAI SDK have some noise that can be removed. As your applications get more complex, dealing with noise won't be the only issue. Managing the different pieces of the LLM application such as models, prompts and content will need extra attention. As these problems come up often, there are Python packages to help manage, or orchestrate the complex nature. LangChain is the package we will use in this workshop.

Inside of the LangChain package, the different pieces of the LLM application are defined in reusable classes. Then you sequence the pieces as components in a chain. The chain is then invoked to return an output.

## LangChain packages and modules

Installing and importing LangChain is slightly more involved than the packages and modules you've seen thus far. You'll need to install the core LangChain package and the packages for any LLM providers you want to access. For this module, we will use OpenAI. Therefore, you'll need to install the `langchain` and `langchain-openai` packages. As `langchain-openai` depends on `langchain` you can just install `langchain-openai`.

```bash
pip install langchain-openai
```

There are a number of modules you'll need to import. As you saw in a previous modules, you'll want the `os` module from the Python standard library in addition to the `load_dotenv` function from the `dotenv` module.

For LangChain you'll use three modules. First import the `ChatPromptTemplate` class from the `langchain_core.prompts` module. This class gives you a reusable template for constructing prompts. Then from `langchain_core.output_parsers`, import the `StrOutputParser` class. This class returns the string content from an LLM response. And from the `langchain_openai` module, import the `ChatOpenAI` class. This class represents an LLM provided by OpenAI. In this module we will use gpt-4o-mini.

```python
import os

from dotenv import load_dotenv
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langcahin_openai import ChatOpenAI
```

Retrieve your GitHub personal access token from the `.env` file to authenticate your application with GitHub Models.

```python
GITHUB_MODELS_ACCESS_TOKEN = os.getenv("GITHUB_MODELS_ACCESS_TOKEN")
```

## Prompt templates

The `ChatPromptTemplate` class creates a reusable template that is the used to prompt a chat model. There are several ways to use it but the most straightforward is by calling the `from_message` class method. The `from_messages` method accepts a list of messages. The OpenAI SDK accepted a list of Python dictionaries for the messages. LangChain uses tuples instead of dictionaries.

```python
prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are an expert Python tutor."),
        ("user", "Example what a {topic} is, with one runnable example,")
    ]
)
```

Since this is a template, the `{topic}` in the user message tuple will be replaced with a value when the chain is invoked.

## LLMs

The `ChatOpenAI` class represents an LLM from OpenAI. Provide the initializer with several keyword arguments:

- `base_url` - since we are using GitHub Models, we have to point `ChatOpenAI` at the appropriate provider
- `api_key` - the GitHub personal access token you stored in the `.env` file
- `model` - the name of the LLM, in this module we will use gpt-4o-mini
- `temperature` - let the model be creative, but not too much

```python
llm = ChatOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=GITHUB_MODELS_ACCESS_TOKEN,
    model="gpt-4o-mini",
    temperature=0.7
)
```

## Output parsers

When using the OpenAI SDK you had to drill down into the response object to get the message content. In the previous module this was simply a string but LLMs can also generate structured output such as JSON and other formats as well. Output parsers help extract content from the response in the proper format. In this example, the content will be a string. The `StrOutputParser` class will work for this purpose.

```python
parser = StrOutputParser()
```

## Constructing a chain

We now have three components:

- `prompt` to create a prompt from a template
- `llm` to generate a response based on a prompt
- `parser` to extract the content from the response

In other words the result of `prompt` is the input to `llm` and the result of `llm` is the input to `parser` and the result of `parser` is the content we expect. We use the components along with LangChain Expression Language, or LCEL, to form a chain.

```python
chain = prompt | llm | parser
```

The pipe (|) operator connects the output of a component to the input of the next one.
