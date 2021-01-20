# Eleventy Template

Starter Template for building static websites.

# Folder structure
   1. -- /dist : static files for deployment will generate here
   2. -- /src/data : it include settings, links, navigation yaml file which will be generated from the backend  
   3. -- /src/includes : contains layout of the page and modules
   4. -- /src/includes/modules : create modules for the website
   5. -- /src/includes/partials : header, navbar, footer etc. modules.
   5. -- /src/admin : contains files to modify backend 

## Getting Started

#### 1\. Clone this Repository

#### 2\. Navigate to the directory

#### 3\. Install dependencies

```
npm install
```

#### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

#### 5\. Run Eleventy

```
npm run serve
```

## Making changes in the backend

#### 1\. Open ```/src/admin/config.yml``` file.

#### 2\. Add custom fields here and save it will reflect in the local backend.

## Reflect changes in the netlify backend

#### 1\. Push the files with the changes 

```
git push origin main
````

#### 2\. Netlify will automatically run the build command and deploy the website. 

## How to use 11ty plugins

#### 1\. Open ```.eleventy.js``` file and include plugin. 

#### 2\. Now use shortcode anywhere ith the code it will process that shortcode and replace it with the output.

## Image auto compress

use this shortcode ```{% responsiveimage src, alt, sizes %}``` in place of img tag.

