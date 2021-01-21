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

#### Collections
All editable content types are defined in the ```collections``` field of your ```config.yml``` file, and display in the left sidebar of the Content page of the editor UI.
For eg:
``` 
collections:
  - label: "Blog"
    name: "blog"
    folder: "_posts/blog"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Body", name: "body", widget: "markdown"}
```
Refer: https://www.netlifycms.org/docs/collection-types/

#### File collections
A files collection contains one or more uniquely configured files. Unlike items in folder collections, which repeat the same configuration over all files in the folder, each item in a files collection has an explicitly set path, filename, and configuration. This can be useful for unique files with a custom set of fields, like a settings file or a custom landing page with a unique content structure.
For eg:
```
collections:
  - label: "Pages"
    name: "pages"
    files:
      - label: "About Page"
        name: "about"
        file: "site/content/about.yml"
        fields:
          - {label: Title, name: title, widget: string}
          - {label: Intro, name: intro, widget: markdown}
          - label: Team
            name: team
            widget: list
            fields:
              - {label: Name, name: name, widget: string}
              - {label: Position, name: position, widget: string}
              - {label: Photo, name: photo, widget: image}
      - label: "Locations Page"
        name: "locations"
        file: "site/content/locations.yml"
        fields:
          - {label: Title, name: title, widget: string}
          - {label: Intro, name: intro, widget: markdown}
          - label: Locations
            name: locations
            widget: list
            fields:
              - {label: Name, name: name, widget: string}
              - {label: Address, name: address, widget: string}
```
Refer: https://www.netlifycms.org/docs/collection-types/#file-collections

#### Field Type
```- {label: "Description", name: "description", widget: "text"}```
Refer: https://www.netlifycms.org/docs/widgets/

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

