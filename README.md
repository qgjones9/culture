<!-- vscode-markdown-toc -->
* [Dependencies](#Dependencies)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
## <a name='Dependencies'></a>Dependencies
### Install dependencies
`npm install`
### DynamoDDB
`npm install dynamoose`
### Airbnb Eslint
`npx install-peerdeps --dev eslint-config-airbnb-base`
- Add "extends": "airbnb-base" to your .eslintrc.
```bash
echo '{"extends": "airbnb-base"}' >> .eslintrc
```
### aws-sdk
`npm install aws-sdk`
### Enable server restart on file changes
`npm install --save-dev nodemon`