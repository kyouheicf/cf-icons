Cloudflare Icons 
https://cf-icons.pages.dev/ for your architecture diagram,
<br/>
which is pulled from this npm public package [@cloudflare/component-logo](https://www.npmjs.com/package/@cloudflare/component-logo) and [@cloudflare/component-icon](https://www.npmjs.com/package/@cloudflare/component-icon)

![top](./top.png)

To deploy on Cloudflare Pages, use the following env parameter

```shell
CI = false
YARN_VERSION = 1
ACCOUNT_HASH = YOUR_ACCOUNT_HASH
```

To reflect the latect icons data from component-icon, use the following command

```shell:
cd cf-icons

npm i @cloudflare/component-icon
mkdir -p src/components/reactsvgs
cp -n node_modules/@cloudflare/component-icon/es/reactsvgs/* src/components/reactsvgs/
sed -i "" -e '1s/^/\/\* eslint-disable import\/first \*\/\n/' src/components/reactsvgs/*.js
```

To pull the latect icons data from cloudflare-docs, use the following command

```shell:
git clone https://github.com/cloudflare/cloudflare-docs.git && cd $(basename $_ .git)
# Delete files except for data directry
ls|egrep -v '^data$'|xargs rm -fr  
# yml to svg
grep "logo:" -rl data| sed 'p;s/\.yml/\.svg/' | xargs -n2 mv
# Delete other files
cd data && ls | grep -v -E '.svg' | xargs rm -r && cd ..
# Replace with SVG content
sed -i "" -n 's/logo: //p' data/*.svg
# Remove other tag
sed -i "" -e 's/<defs>.*<\/defs>//g' data/*.svg
sed -i "" -e 's/<\/linearGradient><\/defs>//g' data/*.svg
# fill="#0051c3"
sed -i "" -e 's/ fill="[^"]*"//g' data/*.svg
sed -i "" -e 's/<svg/<svg fill="#0051c3"/g' data/*.svg
# Remove width height
sed -i "" -e 's/ width="[^"]*"//g' data/*.svg
sed -i "" -e 's/ height="[^"]*"//g' data/*.svg
```

To upload SVG into Cloudflare Images for external URL reference

```
# cd TO_SVG_FILES_DIR
ls -1 | while read line
do
  curl -vvv --request POST \
    https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/images/v1 \
    -H "X-Auth-Email: $EMAIL" \
    -H "X-Auth-Key: $APIKEY" \
    --form 'file=@./'$line'' \
    --form 'id='$(basename $line .svg)''
done
```

Another great icon library is also here

- [Brand Icons - Cloudflare Datamining](https://cfdata.lol/icons/)