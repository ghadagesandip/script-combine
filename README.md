# script-combine

This gives a walk through of how to use grunt packages for css, js minification and combine scripts and how to use processhtml 

## Prerequisites
Before going forward, you need to have following packages installed on your system
1. nodejs(npm which gettting installed with nodejs) 
2. bower (if you don't have installed you can insatlled using `npm install -g bower`)
3. grunt (if you don't have installed you can insatlled using `npm install -g grunt-cli`)

## Installation 
1. clone dir
2. cd in cloned dir
3. run following command (which will install node packages in project dir)
```bash
npm install
```
4. Now run following command to install frontend dependencies
```bash
bower install
```
5. Now visit `localhost/dir/app`
It will show you simple html file with two css and js files loaded which are minfied.

6. Run following command to combine js and css files

```bash
grunt
````
you will find new js and css and index.html file created in dist folder

7. you can view it here `localhost/dir/dist`


