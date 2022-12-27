# JAMStack Starter Template - Next.js & Sanity CMS

JAMStack Starter is a starter template built with Next.js, Tailwind CSS & Sanity CMS by [Web3Templates](https://web3templates.com/).

<a href="https://vercel.com/new/clone?demo-title=JAMStack%20Starter&demo-description=Starter%20template%20built%20with%20Next.js%2013%20and%20Sanity%20CMS%20v3%20&%20%20Tailwind%20CSS.&demo-url=https://jamstack-starter-sanity.vercel.app/&demo-image=https://user-images.githubusercontent.com/1884712/209567303-4ed1ec44-5c37-4f33-a6c0-410187186cde.png&project-name=Jamstack%20Starter&repository-name=jamstack-website&repository-url=https://github.com/surjithctly/jamstack-starter&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx">
<img width="259" alt="Deploy to Vercel & Sanity" src="https://user-images.githubusercontent.com/1884712/169833532-1007b9aa-1456-4386-9526-7b5b46b094ed.png">
</a>

## Live Demo

**https://jamstack-starter-sanity.vercel.app/**

# Installation

## Step 1: Clone & Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=JAMStack%20Starter&demo-description=Starter%20template%20built%20with%20Next.js%2013%20and%20Sanity%20CMS%20v3%20&%20%20Tailwind%20CSS.&demo-url=https://jamstack-starter-sanity.vercel.app/&demo-image=https://user-images.githubusercontent.com/1884712/209567303-4ed1ec44-5c37-4f33-a6c0-410187186cde.png&project-name=Jamstack%20Starter&repository-name=jamstack-website&repository-url=https://github.com/surjithctly/jamstack-starter&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

Click the above button to deploy for this template on vercel. It is the easist way to clone the repo, configure sanity and deploy to vercel.

**The above deploy will automatically configure the following:**

- Create new Repository in Github
- Signup/Login to Sanity CMS (if not already)
- Create a Sanity Project
- Install Sanity Integration in Vercel
- Add required CORS & API settings in the project
- Add required `.env` variables
- Deploy Sanity Studio - Content Manager
- Deploy to Vercel

## Step 2: Add Content

Once you have deployed the website, visit `https://your-published-url.com/studio` URL and add your content before visiting your website. Or you will see a blank / broken website. To import demo data as seen in the demo, follow the below steps inside.

## Step 3: Set up the project locally

1. Clone the github repo you have created in step 1
2. Run the following command to link vercel & pull the `.env` variables

```bash
npx vercel link
```

Then run the following command

```bash
npx vercel env pull
```

3. Open the Project in VSCode and open the terminal
4. Run the following commands from terminal

```bash
npm install
# or
pnpm install
```

## Step 3: Import Demo Data

To look like what you have seen in the demo, with all the content and images, follow the below steps:

Run the following commands from terminal

```bash
npm run import
# or
pnpm import
```

## Step 4: Finish it up!

Now, refresh your published URL again and you will be able to see your website. To continue develop locally, run the following command

```bash
npm run dev
# or
pnpm dev
```

Now your project should be up and the Next.js frontend will be running on http://localhost:3000. Sanity Studio can be accessed using http://localhost:3000/studio.

# Local Development

If you cannot use the One-Click Deploy option, or if you want to set it up from scratch or to host it on other provider, follow these steps.

## Step 1: Clone this repo

Click on the [**Use this Template**](https://github.com/surjithctly/jamstack-starter/generate) button above to create a new repository from this template. Alternatively, you can run the below command to clone this repo to your local system.

```bash
git clone https://github.com/surjithctly/jamstack-starter.git yourProjectName
# or
git clone https://github.com/surjithctly/jamstack-starter.git .
```

## Step 2: Install Packages

Once you have cloned the repo to your localhost, install the dependencies using the following command.

```bash
npm install
# or
pnpm install
```

## Step 3: Configure Sanity

If you already have a sanity project, you can skip this part, just add the `projectId` and `dataset` as mentioned below. If you want to create a new Sanity Project, follow the steps.

Run the following command in the terminal.

```bash
npm create sanity@latest
# or
pnpm create sanity@latest
```

It will ask you to Login/Signup with Sanity, Create a Project or Choose an existing one.

> **Warning**
>
> **DO NOT INSTALL THE DEPENDENCIES OR ADD PROJECT FILES.**
> Exit the command after the project is created.

Once you have the project head over to https://sanity.io/manage to copy the Project ID and Dataset name.

Change `.env.local.example` placed in the root folder and rename it to `.env.local`. Then add your project ID, Dataset and Revalidate Secret in that file.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_REVALIDATE_SECRET=
```

### Develop Locally

Once everything is setup, You can start develop locally by running the following command

```bash
npm run dev
# or
pnpm dev
```

Now your project should be up and the Next.js frontend will be running on http://localhost:3000.
Sanity Studio can be accessed using http://localhost:3000/studio.

# Help & Support

If you have trouble setting up this starter template, join on our [Discord Community](https://web3templates.com/discord) to ask for help.
