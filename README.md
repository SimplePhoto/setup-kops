# Setup Kops
## Install a specific version of kops binary on the runner.

Acceptable values are latest or any semantic version string like 1.15.0. Use this action in workflow to define which version of kops will be used.

```yaml
- uses: SimplePhoto/setup-kops@master
  with:
    version: '<version>'
  id: install
```
Refer to the action metadata file for details about all the inputs https://github.com/SimplePhoto/setup-kops/blob/master/action.yml

## Building
- `npm run package`
- `git add -A`
- `git commit -m "Your commit message goes here"`
