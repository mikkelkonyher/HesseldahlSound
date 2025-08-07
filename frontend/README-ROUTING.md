# React Router Routing Solutions

## Problem

When deploying a React application that uses React Router for client-side routing, users may encounter 404 errors when:
- Directly accessing a route via URL (e.g., typing `example.com/about` in the browser)
- Refreshing the page on a route other than the root
- Using browser back/forward navigation

This happens because the server is looking for a file at that path, but with client-side routing, all routes should serve the `index.html` file.

## Implemented Solutions

We've implemented multiple solutions to address this issue across different hosting environments:

### 1. Netlify (`_redirects` file)

```
/* /index.html 200
```

This tells Netlify to serve the `index.html` file for any route with a 200 status code.

### 2. Apache Servers (`.htaccess` file)

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
```

These Apache rewrite rules redirect all requests to `index.html` unless the request is for an existing file, directory, or symbolic link.

> **Note about hidden files**: Some FTP clients and deployment tools hide files that start with a dot (.) by default. If you don't see the `.htaccess` file in your build folder after deployment, check your FTP client settings to show hidden files. Alternatively, we've included a `htaccess.txt` file with the same content that you can upload and then rename to `.htaccess` on the server.

### 3. IIS Servers (`web.config` file)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_URI}" pattern="^/(api)" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

This configuration for Microsoft IIS servers handles URL rewriting to support React Router.

### 4. Vercel (`vercel.json` file)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration tells Vercel to rewrite all requests to `index.html`.

### 5. Fallback Solution (`HashRouter`)

As a last resort, we've created an alternative version of the app (`HashRouterApp.js`) that uses `HashRouter` instead of `BrowserRouter`. This approach doesn't require server configuration because the routing happens after the `#` in the URL, which isn't sent to the server.

To use this solution, modify `index.js` to import `HashRouterApp` instead of `App`.

## Deployment Instructions

For detailed deployment instructions, please refer to the `DEPLOYMENT.md` file.