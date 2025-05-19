# Strapi Setup Guide

After the Docker containers start, follow these steps to configure Strapi for the Revamp-it website.

## First-time Setup

1. Access the Strapi admin panel at `http://localhost:1337/admin`
2. Create your first administrator account
3. Follow the steps below to configure internationalization and content types

## Configure Internationalization

1. Go to Settings > Internationalization
2. Add the following languages:
   - German (de) - default
   - English (en)
   - French (fr)
   - Italian (it)

## Create Content Types

### 1. Workshop

Create a new Collection Type named "Workshop" with the following fields:
- Title (Text, required) - enable localization
- Description (Rich Text, required) - enable localization
- Date (Date, required)
- Time (Time, required)
- Location (Text, required) - enable localization
- Image (Media, single file)
- Capacity (Number, integer)
- Status (Enumeration: "scheduled", "canceled", "completed")
- Slug (UID, based on Title) - enable localization

### 2. Page

Create a new Collection Type named "Page" with the following fields:
- Title (Text, required) - enable localization
- Content (Rich Text, required) - enable localization
- Slug (UID, based on Title) - enable localization
- MetaTitle (Text) - enable localization
- MetaDescription (Text) - enable localization
- Featured Image (Media, single file)
- Status (Enumeration: "draft", "published", "archived")

### 3. Project

Create a new Collection Type named "Project" with the following fields:
- Name (Text, required) - enable localization
- Description (Rich Text, required) - enable localization
- Status (Enumeration: "active", "completed", "in-development")
- Image (Media, single file)
- Link (Text)
- Slug (UID, based on Name) - enable localization

### 4. Team Member

Create a new Collection Type named "TeamMember" with the following fields:
- Name (Text, required)
- Role (Text, required) - enable localization
- Bio (Rich Text) - enable localization
- Photo (Media, single file)
- Email (Email)

## Configure Permissions

1. Go to Settings > Roles
2. Edit the "Public" role
3. Under "Permissions", allow "find" and "findOne" for all content types that should be publicly accessible

## Create Menu Items

Create a new Single Type named "MainMenu" with the following fields:
- Menu Items (Repeatable Component)

Create a Component called "MenuItem" with the following fields:
- Label (Text, required) - enable localization
- URL (Text)
- Target (Enumeration: "_self", "_blank")
- Children (Repeatable Component, same MenuItem structure)

## Final Steps

1. Create some sample content in each content type
2. Test the API endpoints to ensure they're working correctly

## Content Migration

Once basic setup is complete, follow the content migration plan to import existing website content. 