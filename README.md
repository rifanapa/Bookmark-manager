This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Note: This website is currently optimized for desktop view only. Mobile devices may experience layout inconsistencies. Responsive design improvements are planned for future updates.

Bookmark Manager

A simple Bookmark Manager Web Application built using:

-Next.js

-Firebase (Authentication + Firestore Database)

-Deployed on Vercel
Link : https://bookmark-manager-ajlr10agt-rifanapas-projects.vercel.app/

How to Use the Website
1️. Login

Open the website.

From the Home page, click on Sign In with Google.

Authenticate using your Google account.

2️. Go to Dashboard

After successful login, you will be redirected to the Dashboard.

3️. Add a Bookmark

Click on the “Add Bookmark” button.

Enter:

-Title

-URL

Click the Create button.

Your bookmark will be saved successfully.

You can repeat this process to add multiple bookmarks anytime.

4️. Logout

Once your work is done, click the Logout button.

You can log in again anytime to access and add more bookmarks.

Tech Stack:

Frontend: Next.js

Authentication: Firebase Google Authentication

Database: Firebase Firestore (Real-time database)

Hosting: Vercel

Challenges Faced:
-Google Authentication with Supabase

Initially, I attempted to integrate Google Authentication using Supabase, but I found it challenging to configure properly within the given timeframe.

To ensure smooth functionality, I switched to Firebase Authentication, which provided:

Easier Google Sign-In setup

Reliable authentication handling

Real-time database support

-Delete Button Issue

I initially implemented a Delete button for bookmarks. However:

It was not functioning properly.

Fixing it required restructuring parts of the code.

Due to time constraints, I decided not to include the delete functionality in the current version.

Rather than risk breaking the entire application, I chose to prioritize stability.

Future Improvements:

In the future, I plan to:

-Properly implement and test the Delete Bookmark feature

-Improve UI/UX design

-Optimize performance

-Enhance overall code structure

-Add editing functionality for bookmarks

As I continue improving my development skills, I look forward to enhancing this project further.

Conclusion:

This project demonstrates:

Authentication integration

Real-time database usage

State management in Next.js

Deployment to production

Thank you for checking out this project!
