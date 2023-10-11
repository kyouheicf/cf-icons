Cloudflare Icons 
https://cf-icons.pages.dev/
<br/>
pulled from [@cloudflare/component-icon - npm](https://www.npmjs.com/package/@cloudflare/component-icon)

![top](./top.png)

To deploy on Cloudflare Pages, use the following env parameter

```shell
CI = false
YARN_VERSION = 1
```

To reflect the latect icons data, use the following command

```shell:
npm i @cloudflare/component-icon
mkdir -p src/components/reactsvgs
cp node_modules/@cloudflare/component-icon/es/reactsvgs/* src/components/reactsvgs/
```