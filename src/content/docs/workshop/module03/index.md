---
title: Python Development with GitHub Codespaces
description: Python Development with GitHub Codespaces
---

# Python Development with GitHub Codespaces

[Link to GitHub Repository](https://github.com/douglasstarnes/getaiquickstart/tree/main/02-github-codespaces)

In this section, you will get some practice using GitHub Codepsaces to write and execute Python code.

## Tokenization

The first exercise will require a Python package named `tiktoken`. This package implements the tokenization algorithm used by some of the LLMs from OpenAI.

You'll install `tiktoken` from the command line. Press _Ctrl-`_ to open the terminal panel in the GitHub Codespace.

Install the `tiktoken` package with the command:

```bash
pip install tiktoken
```

In the **Explorer** pane in the GitHub Codespace, create a new file in the `02-github-codespaces` folder and name it `tokens.py`.

At the top of `tokens.py` import the `tiktoken` module.

```python
import tiktoken
```

You'll need some text to convert to tokens. Create a variable named text. Use a triple quoted string to support multiple lines.

```python
text = """

"""
```

Open the file `02-github-codespaces/about_gen_ai.txt`. Copy the content and paste it between the pair of triple quotes.

An encoding will determine how to convert the text to token. The `tiktoken` package implements several encoding algorithms including `cl100K_base`. This encoding is used by many modern OpenAI LLMs such as GPT-4.

```python
enc = tiktoken.get_encoding("cl100k_base")
```

Use the encoding to encode the text and return a list of tokens.

```python
tokens = enc.encode(text)
```

Print the tokens.

```python
print(tokens)
```

To run `tokens.py` you can click the run button in the upper right of the GitHub Codespace. Alternatively, you can open the terminal panel with _Ctrl-`_ and invoke the Python interpreter, passing it the name of the file to execute.

```bash
$ python tokens.py
```

You'll see a list of numbers. Each number represents all or part of a word.

## Exploring Tokens

You can also convert the tokens back into text by decoding them with the `decode` method.

```python
decoded_text = enc.decode(tokens)
print(decoded_text)
```

Run the file `tokens.py` again to see the decoded text. As a sanity check, compare the original and decoded text.

```python
if decoded_text == text:
  print("Original and decoded text are the same")
else:
  print("Something went wrong")
```

Again, each numeric token represents all or part of a word. On average each token represents about three-quarters of a word. Thus, 1000 tokens would be needed to represent roughly 750 words. Let's test this theory by computing the ratio of words in the text to tokens.

```python
num_words = len(text.split(" "))
num_tokens = len(tokens)
print(f"The text has {num_words} and was encoded into {num_tokens} tokens.")
print(f"Ratio of words to tokens: {num_words / num_tokens}")
```
