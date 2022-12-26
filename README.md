# JAMStack Starter Template - Next.js & Sanity CMS

JAMStack Starter is a starter template built with Next.js, Tailwind CSS & Sanity CMS by [Web3Templates](https://web3templates.com/).

<a href="https://vercel.com/new/clone?demo-title=JAMStack%20Starter&demo-description=Starter%20template%20built%20with%20Next.js%2013%20and%20Sanity%20CMS%20v3%20&%20%20Tailwind%20CSS.&demo-url=https://jamstack-starter-sanity.vercel.app/&demo-image=https://user-images.githubusercontent.com/1884712/209567303-4ed1ec44-5c37-4f33-a6c0-410187186cde.png&project-name=Jamstack%20Starter&repository-name=jamstack-website&repository-url=https://github.com/surjithctly/jamstack-starter&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx">
<img width="259" alt="Deploy to Vercel & Sanity" src="https://user-images.githubusercontent.com/1884712/169833532-1007b9aa-1456-4386-9526-7b5b46b094ed.png">
</a>

## Live Demo

**[See Live Demo →](https://jamstack-starter-sanity.vercel.app/)**

# Installation

## Step 1: Clone & Deploy

<a href="https://vercel.com/new/clone?demo-title=JAMStack%20Starter&demo-description=Starter%20template%20built%20with%20Next.js%2013%20and%20Sanity%20CMS%20v3%20&%20%20Tailwind%20CSS.&demo-url=https://jamstack-starter-sanity.vercel.app/&demo-image=https://user-images.githubusercontent.com/1884712/209567303-4ed1ec44-5c37-4f33-a6c0-410187186cde.png&project-name=Jamstack%20Starter&repository-name=jamstack-website&repository-url=https://github.com/surjithctly/jamstack-starter&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx">
<img width="259" alt="Deploy to Vercel & Sanity" src="https://user-images.githubusercontent.com/1884712/169833532-1007b9aa-1456-4386-9526-7b5b46b094ed.png">
</a>

Click the above button for one-click clone & deploy for this template. It is the easist way to clone the repo, configure sanity and deploying to vercel. Click the button above and just follow the steps. It will help you to configure:

- Create new Repository in Github
- Signup/Login to Sanity CMS (if not already)
- Create a Sanity Project
- Install Sanity Integration in Vercel
- Add required CORS & API settings in the project
- Add required `.env` variables
- Deploy Sanity Studio - Content Manager
- Deploy to Vercel

## Step 2: Add Content

Once you have a published site, visit `https://your-published-url.com/studio` URL and add your content before visiting your website. Or you will see a blank / broken website. To import demo data, follow the below steps inside.

## Step 3: Import Demo Data

To look like what you have seen in the demo, with all the content and images, follow the below steps:

- Clone the github repo you have created
- run `npm sanity import` command from terminal

## Local Development

Again, we recommend you to use the one-click deploy first which will create a github repo. You can then clone the github repo to your local system and change following `.env` variables.

### Run Next.js frontend

You can use the normal Next.js method to run the frontend. Just run the following command and a live server will open on `http://localhost:3000`

```
yarn dev
```

### Run Sanity Studio CMS

1. Install Sanity CLI globally (if not already)

```
npm install -g @sanity/cli
```

2. Run

To run sanity studio server, run the following command in your terminal. It will open a live server on `http://localhost:3333`

```
npm run sanity
# or
pnpm sanity
```
