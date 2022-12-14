# Webflow to Stackbit

This is Nextjs version of a Webflow site. It demonstrates how to port a Webflow site to Stackbit using Next.js and Contentful.

![](/docs/images/Screenshot%202022-09-23%20at%2011.27.10%20AM.png)


<p align="center">The Webflow Site</p>


## Technologies Used:

- Next.js
- [Stackbit](https://stackbit.com)
- Contentful

## Installation and Usage

<ul class="text-field">
    <li> Clone the repo</li>
    <br>
    <li>yarn install</li>
    <br>
    <li>yarn run dev</li>
    <br>
    <li>Create a <a href="https://contentul.com">Contentful account</a> and create a space and generate the following keys: <code>an access token in contentful management token, contentful delivery / preview tokens.</code></li>
    <br>
    <li>Create the following content models. <code>Button, Post, PostFeed, Page, Hero, Icon, IconsField</code></li>
    <br>
    <li>The <code>Page </code> content model should have the following fields:</li>
    <br>
    <li>The <code>Post</code> content model should have the following fields:</li>
    <br>
    <li>The <code>PostFeed</code> content model should have the following fields:</li>
    <br>
    <li>The <code>Hero</code>content model should have the following fields:</li>
    <br>
    <li>The <code>Icon</code>content model should have the following fields:</li>
    <br>
    <li>The <code>Button</code> content model should have the following fields:</li>
    <br>
    <li>The <code>IconsField</code>content model should have the following fields:</li>
    <br>
    <li>Install the Stackbit CLI. Then open a new terminal window in the same project directory and run the Stackbit Dev server:
     
    npm install -g @stackbit/cli
    stackbit dev -c contentful --contentful-space-id <space_id> --contentful-preview-token <preview_token> --contentful-access-token <access_token>
      
 
   </li>
</p>

<strong>This README is a Work in Progress.</strong>
