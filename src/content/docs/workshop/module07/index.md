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
