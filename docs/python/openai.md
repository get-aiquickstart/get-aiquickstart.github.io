# Using the OpenAI SDK

Experimenting with the playground lets you see the power and possibility of Large Language Models and generative AI.  To integrate that same power and possibility into your applications, you'll need to access an API.  GitHub Models exposes a REST API you can use to bring generative AI into your applications.  The REST API emulates the official OpenAI API that you use to access the OpenAI LLMs.  Being a REST API, you can access it from any programming language that supports HTTP calls.  For popular languages OpenAI maintains SDKs to make that integration less difficult.  SDKs exist for .NET, Go, Java, JavaScript, and the choice for this workshop, Python.  As the GitHub Models API emulates the OpenAI API, you can use the OpenAI SDKs with GitHub Models with a few configuration changes.

## Installing the SDK

The OpenAI Python SDK is distributed as a package like the `tiktoken` package you installed earlier in the workshop.  To install the OpenAI Python SDK, use `pip` and install the `openai` package at the command line:
```bash
pip install openai
```

To authenticate yourself using the OpenAI SDK, you'll need a developer token that is generated from the GitHub web site.

In the browser go to [github.com](github.com) and in the upper right, click on your profile picture.  Click on **Settings** in the drop down menu.  On the left side of the **Settings** page, scroll down to **Developer settings** near the bottom and click it.  Expand **Personal Access Tokens** on the left side.  Then click **Fine-grained tokens** and the **Generate new token** button.  (You may be asked to reauthenticate yourself on the GitHub web site.)

Provide a name for your new token as this is required.  Notice that by default, the token will expire in 30 days but you can choose other durations from the drop down list, set a custom value, or have no expiration at all (this is not recommended).  Next, scroll down to the **Permissions** section and click the **+ Add permissions** button.  A dropdown will appear will the various permissions you can associate with this token.  The only one you need is **Models**.  You can scroll down or search for it.  Once found, check the box next to **Models** to allow access to GitHub Models from this token.

Click the green **Generate token** button.  A popup appears so you can review the settings for the new token.  Click **Generate token** again to actually generate the token.  The next page will show you the token.  Take the warning seriously.  You will not be able to see the token again, so copy it now.
