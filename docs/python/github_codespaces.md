# GitHub Codespaces

In this section, you will get some practice using GitHub Codepsaces to write and execute Python code.  And you will also run Python code inside of a Jupyter notebook.

The first exercise will require a Python package named `tiktoken`.  This package implements the tokenization algorithm used by some of the LLMs from OpenAI.  

You'll install `tiktoken` from the command line.  Press *Ctrl-`* to open the terminal panel in the GitHub Codespace.

In the **Explorer** pane in the GitHub Codespace, create a new file in the `02-github-codespaces` folder and name it `tokens.py`.

At the top of `tokens.py` import the `tiktoken` module.

```python
import tiktoken
```

You'll need some text to convert to tokens.  Create a variable named text.  Use a triple quoted string to support multiple lines.
```python
text = """

"""
```

Open the file `02-github-codespaces/about_gen_ai.txt`. Copy the content and paste it between the pair of triple quotes.

An encoding will determine how to convert the text to token.  The `tiktoken` package implements several encoding algorithms including `cl100K_base`.  This encoding is used by many modern OpenAI LLMs such as GPT-4.
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

To run `tokens.py` you can click the run button in the upper right of the GitHub Codespace.  Alternatively, you can open the terminal panel with *Ctrl-`* and invoke the Python interpreter, passing it the name of the file to execute.
```bash
$ python tokens.py
```
