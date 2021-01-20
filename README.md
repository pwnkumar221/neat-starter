# Eleventy Template

Starter Template for building static websites.

## Getting Started

### 1\. Clone this Repository

### 2\. Navigate to the directory

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run serve
```

## Making changes in the backend

### 1\. Open config.yml file located inside /src/admin folder.

### 2\. Add custom fieldsm here and save it will reflect in the local backend.

## Reflect changes in the netlify backend

### 1\. Push the files with the changes 

```
git push origin main
````

### 2\. Netlify will automatically run the build command and deploy the website. 

## How to use 11ty plugins

### 1\. Open .eleventy.js file and include plugin. 

### 2\. Now use shortcode anywhere ith the code it will process that shortcode and replace it with the output.

## Image auto compress
Please use this shortcode {% responsiveimage src, alt, sizes %} in place of img tag.


