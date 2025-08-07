# Understanding the Dual .htaccess Files

## Why There Are Two .htaccess Files

This project includes two versions of the Apache configuration file:

1. `.htaccess` - The standard Apache configuration file
2. `htaccess.txt` - An identical copy with a visible file extension

## Purpose

The dual files serve a specific purpose:

- **Hidden File Issue**: Many FTP clients and deployment tools hide files that begin with a dot (`.`) by default
- **Deployment Solution**: Having both versions ensures you can always upload the configuration regardless of your FTP client settings
- **Identical Content**: Both files contain exactly the same rewrite rules for client-side routing

## How to Use

### When Deploying to Apache Servers (like Simply.com)

1. **If your FTP client shows hidden files**: Upload the `.htaccess` file directly
2. **If your FTP client hides dot files**: 
   - Upload `htaccess.txt`
   - Then rename it to `.htaccess` on the server

### Important Notes

- Only the `.htaccess` file (not `htaccess.txt`) will be recognized by Apache servers
- Both files are included in the build output intentionally
- Do not modify one file without updating the other to keep them in sync

For more detailed deployment instructions, please refer to the `DEPLOYMENT.md` file.