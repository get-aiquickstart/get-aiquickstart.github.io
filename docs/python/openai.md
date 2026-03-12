# Using the OpenAI SDK

[Link to GitHub Repository](https://github.com/douglasstarnes/getaiquickstart/tree/main/04-openai-sdk)

Experimenting with the playground lets you see the power and possibility of Large Language Models and generative AI.  To integrate that same power and possibility into your applications, you'll need to access an API.  GitHub Models exposes a REST API you can use to bring generative AI into your applications.  The REST API emulates the official OpenAI API that you use to access the OpenAI LLMs.  Being a REST API, you can access it from any programming language that supports HTTP calls.  For popular languages OpenAI maintains SDKs to make that integration less difficult.  SDKs exist for .NET, Go, Java, JavaScript, and the choice for this workshop, Python.  As the GitHub Models API emulates the OpenAI API, you can use the OpenAI SDKs with GitHub Models with a few configuration changes.

## Installing the SDK

The OpenAI Python SDK is distributed as a package like the `tiktoken` package you installed earlier in the workshop.  To install the OpenAI Python SDK, use `pip` and install the `openai` package at the command line:
```bash
pip install openai
```

## Generating a GitHub Developer Token
To authenticate yourself using the OpenAI SDK, you'll need a developer token that is generated from the GitHub web site.

In the browser go to [github.com](github.com) and in the upper right, click on your profile picture.  Click on **Settings** in the drop down menu.  On the left side of the **Settings** page, scroll down to **Developer settings** near the bottom and click it.  Expand **Personal Access Tokens** on the left side.  Then click **Fine-grained tokens** and the **Generate new token** button.  (You may be asked to reauthenticate yourself on the GitHub web site.)

Provide a name for your new token as this is required.  Notice that by default, the token will expire in 30 days but you can choose other durations from the drop down list, set a custom value, or have no expiration at all (this is not recommended).  Next, scroll down to the **Permissions** section and click the **+ Add permissions** button.  A dropdown will appear will the various permissions you can associate with this token.  The only one you need is **Models**.  You can scroll down or search for it.  Once found, check the box next to **Models** to allow access to GitHub Models from this token.

Click the green **Generate token** button.  A popup appears so you can review the settings for the new token.  Click **Generate token** again to actually generate the token.  The next page will show you the token.  Take the warning seriously.  You will not be able to see the token again, so copy it now.

## Storing the Developer Token 

You need a place to store your new developer token.  One popular solution is a `.env` file.  A `.env` file contains a collection of key/value pairs and you would add one for your developer token.  When the `.env` file is loaded using the `python-dotenv` package, you can read the token as an environment variable.  

Since you are using a GitHub Codespace, there is a more convenient option, store the developer token in a secret.  Secrets are a collection of sensitive values that you want to store and access securely.  Once a secret has been added, you'll be able to access it inside of a Codespace as an environment variable.  

From the **Settings** page, scroll down on the left side to **Code, planning and automation** and click on **Codespaces**.  Look at the **Secrets** section.  Click the **New Secret** button.  Here you provide a name for the secret (I'm using `GH_MODELS_TOKEN`), and paste you developer token in the textarea for the value.

Note the **Repository access** dropdown.  You must explicity give repositories access to a secret.  And also, as the message below the dropdown reminds us, at least 1 repository must be selected for the secret to be active.  In the dropdown, select the repository you have been using for the workshop.  Click the **Add secret** button.  If you have any Codespaces open, you'll need to refresh them before they can access the secret.

## Retrieving the Developer Token in Code

In your codespace, in the 04-openai-sdk folder, create a new file named `chat.py`.  At the top of the file, import the `os` module from the Python standard library.  
```python
import os
```

You will use the `os` module to retrieve the value of the secret you added.
```python
GH_MODELS_TOKEN = os.getenv("GH_MODELS_TOKEN")
```

As a sanity check, print the last four characters of the token
```python
print(GH_MODELS_TOKEN[-4:])
```

Run the file.  If you see 4 random characters printed to the terminal pane, you're ready to go!

## Connecting to the OpenAI API

Next you'll need to create a client object to connect to the OpenAI API.  The `OpenAI` client class lives in the `openai` module from the `openai` package you installed earlier.  Now you can import it.
```python
from openai import OpenAI
```

The `OpenAI` client class, for use with GitHub Models, expects two keyword arguments.  The first is the `base_url` endpoint to access the REST API (which is OpenAI compatible) for GitHub Models.  This is always `https://models.github.ai/inference`.  The second is the `api_key` which will be the GitHub developer token stored in the secrets.  You've already retrieved this value.  The code to create the OpenAI client is:
```python
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_token=GH_MODELS_TOKEN
)
```

## Creating Messages

Recall that in the playground you used a system message to define how the model behaves.  You can also send a system message with the OpenAI SDK.  The messages are constructed using Python dictionaries.  Each message dictionary has two keys: `role` that we will look at soon, and `content` which is the prompt in this case.  For system messages the `role` is always set to `system`.  

There are four roles: system, user, assistant and tool.  You just created a system message.  The user message is the prompt that you, the user, send to the model.  The assistant message is the response from the model.  The tool message is used to access external services and tools and is beyond the scope of this workshop.

Now you can create the system message.  Read the  `customer_service_prompt.txt` file and use it for the `content` key.
```python
with open("customer_service_prompt.txt", "r") as f:
    customer_service_prompt = "".join(f.readlines())

system_message = {
    "role": "system",
    "content": customer_service_prompt
}
```

And for the user message, create another dictionary with a `role` key set to `user`:
```python
user_message = {
    "role": "user",
    "content": "I was charged twice for the same item. What do I do?"
}
```

## Chatting Using the SDK

To send the messages to the model, and get the generated response, you call `client.chat.completions.create`.  This method accepts a list of messages.  These are the dictionaries created in the previous section.  This is also where you tell the SDK which model you want to use.  Optionally, you can tell the SDK the temperature and top_p to use.  And there are other keyword arguments for parameters that are beyond the scope of this workshop.
```python
response = client.chat.completions.create(
    messages=[system.message, user_message],
    model="openai/gpt-4.1-nano",
    temperature=0.3,
    top_p=0.7
)
```

The `create` method will return a response that can have multiple completions. (By default it is just one.)  Those completions are in a list of `choices`.  Each choice has a `message` which has `content`.  That `content` is the text of the response.
```python
print(response.choices[0].message.content)
```

## Creating a Chatbot with Message History