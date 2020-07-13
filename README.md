# MicroFront End Application Boiler Plate

Micro-frontend for all the buyers information. Including:

- Overview (statistics)
- List
- Details

The project contains a Frontend component (React) as well as an express server.

## Command

- `npx nps local` - Start both the express and sandbox environment. You're almost always going to use this one.
- `npx nps server` - Run local express server (API) only.
- `npx nps sandbox` - Run the sandbox environment (MicroFrontend) only.
- `npx nps sandbox.build` - Build the components from **src** into the /assets folder.
- `npx nps server.build` - Transpile the Express server.

## For Developers

### Micro Frontend Design

This repo is designed to be used as a Microfrontend. It comes with an **express server**, which has an **API** that serves data, and **components** that serves the frontend library scripts.

It is designed to be a self-contained web application to be used within another web application (**parent app**).

### Installation

To run the repository locally, make sure you have MongoDB setup on your machine. Get the latest backup from the administrator.

- Pull the repository down.
- Create an **.env.development** file, if it doesn't already exist.
- Create a `DB_PATH`, in the format of a mongo DB url like: `mongodb://localhost:27017/MyDatabaseName`
- Do an `npm install`
- Done. See commands above

### Directory Structure

Here're some of the key directories that you need to know about.

- **src** - All the React development code. Code in this folder is not design to run directory, but be **build** into the **assets** folder. The transpiled library is then accessed via the express server.
- **srv** - All the express server code in Typescript. You run ONLY this server by doing `npx nps server`. Under the hood, it'll transpile the Express code into the **build** folder, and then run the server from there.
- **sandbox** - This sandbox is to simulate what a **parent app** would do. Because this is a Microfrontend, the React components code are not designed to be imported directly, but through the express server. Sandbox is run by doing `npx nps sandbox`.
- **build** - As mentioned, this folder contains the transpiled Express code, and the express server is run from here.
- **assetss** - This is the destination for all the transpiled components code (from the **src** folder). The parent app and the sandbox, will access the files via the express endpoint `/components/{filename}`
