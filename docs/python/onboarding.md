# 01 - Onboarding

In this section, you will learn how to set up the development environment that will be used throughout the rest of the workshop.

The first thing you will need is a free, personal GitHub account. If you have an account that is managed by your organization, it might not work because your administrator may have disabled some features that we will be using.  But if you don't have a free, personal GitHub account, you can create one.  Again, they're free!

Go to the following URL which is the repository for the workshop materials: [https://bit.ly/getaiquickstart](https://bit.ly/getaiquickstart).

Click the **Fork** button in the upper right of the page.  This will create a copy of the repository in your GitHub account.

Go to the forked repository in your account and click the green **Code** button.  Click the **Codespaces** tab and then the plus icon to create a new Codespace.  This will open a new browser tab with Visual Studio Code running in the browser.  

A little bit about GitHub Codespaces.  This is a cloud-based environment where you will be able to write and run all of the demos and exercises for the workshop.  You don't need to download or install anything to your local machine.  Everything runs in the cloud and will be accessible from the browser.  And it's also free to get started.  You can use Codespaces for free, up to 60 hours per month.  And this will be more than enough for this workshop.

By now, you should be able to see the GitHub Codespace in your browser.  Before configuring the Codespace, let's set a value that will help you conserve your free hours.  Go back to the repository page in GitHub and click your profile picture in the upper right corner.  Click on **Settings** and then on **Codespaces** under **Code, planning, and automation** in the left sidebar.  Scroll down the **Default idle timeout**.  This is the amount of time that your Codespace will remain active when you are not using it.  By default it is set to 30 minutes, but you can change it to any value between 5 and 240 minutes.  I find 5 minutes to be a bit limiting so I like to leave it at 10 minutes.  Be sure to click the **Save** button after changing the value.

Go back to the Codespace.  You can also manually shut the Codespace down when you are done using it.  Click the button in the lower left corner of the Codespace that includes the generated name of the Codespace.  This will open up the Command Pallette in the center of the window.  Click on **Stop Current Codespace** and the Codespace will save its state and immediately shut down.  

## Installing Extensions for Python Development

Now you'll install some extensions to support the development of Python applications.  Visual Studio Code supports a wide range of development workflows through the tens of thousands of extensions available in the Visual Studio Code Marketplace.  You can also install extensions directly inside of Visual Studio Code from the Extensions panel in the sidebar.  Either click the Extensions panel icon, or use the keyboard shortcut **Ctrl-Shift-X** or **Cmd-Shift-X** on macOS.

### Python

At the top of the Extensions panel, search for `python` in the text input.  The extension you are looking for is from Microsoft.  It will probably be at the top of the results as the Microsoft Python extension has long been the most popular with well over one hundred million downloads.  Click the blue **Install** button to install the extension.  The Microsoft Python extension will provide most of the tools you will need to develop Python applications in Visual Studio Code.  This includes syntax highlighting, code completion, virtual environment management and unit testing.  

### Ruff

Next search for `ruff`. Install the extension from Astral Software.  You may be prompted to trust the extension before installing it.  With Ruff, this is fine but you should always be care when installing extensions that are new.  You use Ruff to lint your Python code for errors and also for consistent formatting.  

You can configure Visual Studio Code to automatically format your code with Ruff when it is saved.  Press **Ctrl-Shift-P** (or **Cmd-Shift-P** on macOS) to open the Command Pallette.  Search for the command `Settings` and select the option to configure setting via the UI.  In the new tab, search for `format`.  In the dropdown for the default formatter select Ruff.  Also check the box next to Format Code on Save.  The setting will save automatically so you can close the tab.

