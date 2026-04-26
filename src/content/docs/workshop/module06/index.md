---
title: Interactive Development with Jupyter Notebook
description: Interactive Development with Jupyter Notebook
---

# Interactive Development with Jupyter Notebook (in progress)

Most developers are familiar with the development workflow where you store code in a file, and then execute it (directly with an interpreter or indirectly with a compiler) all at once. Then you evaluate the effectiveness of the code, make edits and improvements, and execute it all at once again. In the data science and machine learning area, this workflow still has its place. When prototyping and experimenting, interactive computing can provide benefits that we will cover in this section.

## Jupyter Notebook

The tool many data scientists and machine learning engineers use for interactive computing is Jupyter notebook. With Jupyter notebook, you place code in _cells_. A cell is executed independently of other cells. This way, you can edit a single cell, execute it, and avoid having run code from other cells making development much faster.

Visual Studio Code, and thus GitHub Codespaces, supports Jupyter notebook inside of the UI. Before you can work with Jupyter notebooks in GitHub Codespaces, you'll need to install the Jupyter notebook extension from the Extensions panel.

## --

## Creating a Chatbot with History

Earlier in the workshop, you saw how to use the OpenAI Python SDK to chat with an LLM. But there is a limitation. Here is the code to chat with the LLM. Copy and paste it into a cell and run it.

```python
import os
from openai import OpenAI

GH_MODELS_TOKEN = os.getenv("GH_MODELS_TOKEN")

with open("customer_service_prompt.txt", "r") as f:
    customer_service_prompt = "".join(f.readlines())

client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=GH_MODELS_TOKEN
)

system_message = {
    "role": "system",
    "content": customer_service_prompt
}

user_message = {
    "role": "user",
    "content": "I was charged twice for the same item.  What do I do?"
}

response = client.chat.completions.create(
    messages=[system_message, user_message],
    model="openai/gpt-4.1-mini",
    temperature=0.3,
    top_p=0.7
)

print(response.choices[0].message.content)
```

The response I received was:

```
Hello! I'm sorry to hear that you were charged twice for the same item. Let's get this sorted out for you.

Please follow these steps:
1. Check your order confirmation and bank or credit card statement to confirm the duplicate charge.
2. If you have an account with us, log in and review your recent orders to verify the duplicate.
3. Contact our customer service team directly with your order number and details about the duplicate charge.

If you provide me with your order number, I can help start the process for you. Thank you for your patience!
```

Let's say we need to know where to find the order number. Create a new user message for the request:

```python
user_message_2 = {
    "role": "user",
    "content": "Where can I find my order number?"
}
```
