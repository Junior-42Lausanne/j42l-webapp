## Purpose

This app has the objective of supporting the recruitment efforts of various Junior organizations across the 42 network. Students can create their profile and apply to projects.

## Tech stack

-   [Typescript](https://www.typescriptlang.org/)
-   [Next.js](https://nextjs.org)
-   [Better Auth](https://www.better-auth.com) (authentication)
-   [Kysely](https://kysely.dev/) (SQL query builder)
-   [shadcn/ui](https://ui.shadcn.com/) (React components)

## Getting Started

0. If you haven't done it yet, install Docker on your computer

1. Clone this repo.

2. Copy `.env.example` to `.env`. You can change the values of the environment variables if you wish

3. Run the following command to start the Next.js development server and the Postgresql database:

```bash
docker compose -f compose.yml -f compose.local.yml up -d --build
```

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Git workflow

The git workflow that we use is [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

In summary:

-   Production code is in the `main` branch, and is automatically deployed. Merging into the `main` branch is restricted.
-   The `dev` branch holds the code waiting to be deployed to production. Merging to the `dev` branch requires a pull request and at least one review.
-   New features are added using feature branches (e.g., `feat-visual-home-page`), which are then merged into the `dev` branch.

## Project structure

To maintain a clean structure, we will mostly follow the [Project Structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) suggested in the [Bulletproof React repo](https://github.com/alan2207/bulletproof-react). Read the page to understand where different files go.

The suggestions in the whole repo are pretty good, so read it if you're interested.

## Basic coding standards

-   The `src/app` folder contains only files related to routing (`layout.tsx`, `page.tsx`, `loading.tsx`, etc.), and no other components. Related components should be put in the `src/components` folder, or the relevant `src/features/[featureName]/components` folder.
-   Components exported from `page.tsx` files should be short and readable. Break down the page into subcomponents that are implemented in a `components` folder.
-   Try to keep other components simple too, extracting functionality to sub-components, custom hooks or separate functions as appropriate.
-   A file should contain only one component, except for small helper, presentational components that can be in the same file.

## User roles

The application will be used by various users that have different permission levels. Here are the roles that a user can have (single role per user):

-   `user`: Basic role for authenticated users. Key permissions:
    -   Manage own user profile
    -   Browse and view available projects
    -   Apply to a project position
    -   View their open applications
    -   Browse and view Junior profiles
-   `junior-member`: Role for Junior members. Key permissions:
    -   Everything that the `user` role can do
    -   Create and edit projects for their own Junior
    -   View and manage project applications (accept, reject)
    -   Browser users and their profiles
-   `junior-admin`: Role for a Junior administrator. Key permissions:
    -   Everything that the `junior-member` can do
    -   Edit Junior profile for their own organization
    -   Manage Junior members for their own organization
-   `app-admin`: Role for the application administrator. Key permissions:
    -   Everything that the `junior-admin` can do
    -   Add/remove Junior organizations and set Junior administrator
    -   Ban users

## Sitemap

The site will have the following pages:

### Home Page

-   `/` : Home page (Access level: `public`)

### Profile

-   `/profile` : View the profile of the currently logged in user (Access level: `user`)
-   `/profile/edit` : Edit the profile of the currently logged in user (Access level: `user`)

### Projects

-   `/projects` : Browse projects (Access level: `user`)
-   `/projects/[projectId]` : View project details (Access level: `user`)
-   `/projects/[projectId]/applications` : Manage project applications (Access level: `junior-member`)
-   `/projects/create` : Create new project (Access level: `junior-member`)
-   `/projects/edit` : Edit existing project (Access level: `junior-member`)

### Applications

-   `/applications` : View applications of the currently logged in user (Access level: `user`)
-   `/applications/create?position=[positionId]` : Apply to a project position (Access level: `user`)
-   `/applications/[applicationId]` : View application details (Access level: `user`)
-   `/applications/[applicationId]/edit` : Edit application details (Access level: `user`)

### Juniors

-   `/juniors` : View list of participating Junior organizations (Access leve: `user`)
-   `/juniors/[juniorId]` : View profile of a Junior organization (Access level: `user`)
-   `/juniors/create` : Create new Junior organization (Access level: `app-admin`)
-   `/juniors/edit` : Edit own Junior organization's profile (Access level: `junior-admin`)

### Users

-   `/users` : Browse registered users (Access level: `junior-member`)
-   `/users/[userId]` : View user profile (Access level: `junior-member`)

## Database structure

This is the basic structure of the database excluding the authentication tables, with the main fields for each table. Additional fields can be added to support the various features of the application.

| Table            | Fields                                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| junior           | id, schoolIdentifier, name, description, image                                                                              |
| project          | id, juniorId, name, description, status (draft, recruiting_school, recruiting_all, closed), createdAt, createdBy, updatedAt |
| project_position | id, projectId, name, description, count, createdAt, createdBy, updatedAt                                                    |
| application      | id, userId, positionId, status (open, accepted, rejected), createdAt, updatedAt                                             |
