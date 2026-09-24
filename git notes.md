# Clone from Existing Repository
> Before cloning from any EXISTING repository, be sure that your folder is EMPTY.

> If your folder "SEEMS" empty but still gets an error of "Folder is not empty", check your file explorer 'view' settings and allow "Show hidden files".
1. Copy the repository GIT URL (the one that ends with ".git").
2. Enter the command on your terminal

``` bash
git clone {URL} .
```

3. After cloning, the default branch you will be on is the 'default' branch of the repository which usually is 'main'.

4. Switch into your desired branch.
``` bash
git switch {branch}
```

# Pull Project
> Make sure that your project is initialized, verify it using:
``` bash
git remote -v
```

1. Fetch to update your local repository
``` bash
git fetch
```

2. Pull the project.
> Pull on the current branch you are in.
``` bash
git pull
```

> Pull on another branch
``` bash
git pull origin {branch name}
```


# Push Your Project
> Make sure that your terminal is in the proper path (your project path itself).

1. Connect your project to your repository.
``` bash
git remote add origin {URL}
```

2. Add your project files.
``` bash
git add {file or '.'}
```

3. Commit your changes with a message.
``` bash
git commit -m "{Message...}"
```

4. Create a branch which usually is 'main' for your first and default branch.
``` bash
git branch -M {branch name}
```

5. Push your project.
``` bash
git push -u origin {branch name}
```