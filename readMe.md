# Convention Guides

- Documents
  # Diary Web Application Convention Guide
  ## 1. Project Structure
  ### 1.1 Root Directory
  - **index.html**: Main HTML file.
  - **style.css**: Main CSS file.
  - **script.js**: Main JavaScript file.
  - **assets/**: Directory for images, icons, and other media.
  - **components/**: Directory for reusable components.
    - **nav.js**
    - **footer.js**
    - user.js
    - create.js
    - update.js
    - explore.js
    - plan.js
  - **css/: Directory for additional CSS files.**
    - button.css
    - themes.css
    - nav.css
  - **pages/: Directory for additional HTML files.**
    - home.html
    - signup.html
    - create.htlm
    - update.html
    - explore.html
    - plans.html
  ### 1.2 Example Directory Structure
  ```css

  diary-app/
  │
  ├── index.html
  ├── style.css
  ├── script.js
  │
  ├── assets/
  │   ├── images/
  │   ├── icons/
  │
  ├── pages/
  │   ├── create.html
  │   ├── edit.html
  │   └── delete.html
  |		└── plan.html
  │   ├── home.html
  │   ├── aboutus.html
  │   ├── loading.html
  │   ├── login.html
  │   ├── signup.html
  │
  ├── style/
  │   ├── button.css
  │   └── appearance.css
  |		└── nav.css
  │   └── footer.css
  |		└── loading.css
  |		└── plan.css
  |		└── authorization.css
  |
  │
  └── components/
      ├── navigation.js
      ├── edit.js
      └── create.js
      └── delete.js
      └── ulity.js
      └── apprearance.js
      └── footer.js
      └── user.js
      └── plan.js

  ```
  ## 2. HTML Conventions
  ### 2.1 File Naming
  - Use lowercase and hyphens (e.g., `entry-form.html`).
  ### 2.2 Indentation
  - Use 2 spaces per indentation level.
  ### 2.3 Tags
  - Use semantic HTML5 tags (e.g., `<header>`, `<footer>`, `<main>`, `<article>`, `<section>`).
  ### 2.4 Attributes
  - Use double quotes for attribute values (e.g., `class="entry"`).
  ### 2.5 Comments
  - Use `<!-- Comment -->` to describe sections or complex parts.
  - Explain in detail of each functionality and code line.
  ### 2.6 Example
  ```html
  <!-- Entry Form Component -->
  <article class="entry">
    <header class="entry__header">
      <h1 class="entry__title">Diary Entry</h1>
    </header>
    <section class="entry__body">
      <p class="entry__text">Today was a great day...</p>
    </section>
    <footer class="entry__footer">
      <button class="entry__edit">Edit</button>
      <button class="entry__delete">Delete</button>
    </footer>
  </article>
  ```
  ## 3. CSS Conventions
  ### 3.1 File Naming
  - Use lowercase and hyphens (e.g., `reset.css`).
  ### 3.2 Selectors
  - Use class selectors for styling (e.g., `.entry-title`).
  ### 3.3 Naming
  - Use BEM (Block, Element, Modifier) methodology:
    - Block: `.entry`
    - Element: `.entry__title`
    - Modifier: `.entry--highlighted`
  ### 3.4 Properties Order
  - Follow a logical order (e.g., display, box model, typography, visual).
  ### 3.5 Comments
  - Use `/* Comment */` to describe sections or specific styles.
  ### 3.6 Units
  - Use relative units (e.g., `rem`, `%`) for sizing.
  ### 3.7 Example
  ```css
  /* Entry Component */
  .entry {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .entry__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .entry__text {
    font-size: 1rem;
    line-height: 1.5;
  }

  .entry--highlighted {
    background-color: #f9f9f9;
  }
  ```
  ## 4. JavaScript Conventions
  ### 4.1 File Naming
  - Use lowercase and hyphens (e.g., `entry.js`).
  ### 4.2 Indentation
  - Use 2 spaces per indentation level.
  ### 4.3 Variables
  - Use `camelCase` for variables and functions.
  ### 4.4 Constants
  - Use `UPPER_CASE` for constant values.
  ### 4.5 Functions
  - Use function declarations for named functions and function expressions for anonymous functions.
  ### 4.6 Comments
  - Use `//` for single-line comments and `/* */` for multi-line comments.
  ### 4.7 ES6 Features
  - Use `let` and `const` instead of `var`.
  - Prefer arrow functions for anonymous functions.
  ### 4.8 Code Organization
  - Group related functions in modules.
  - Use IIFE (Immediately Invoked Function Expressions) to encapsulate code.
  ### 4.9 Example
  ```jsx
  // entry.js
  const entries = [];

  const addEntry = (title, text) => {
    const entry = {
      id: Date.now(),
      title,
      text,
    };
    entries.push(entry);
    saveEntries();
    return entry;
  };

  const saveEntries = () => {
    localStorage.setItem("entries", JSON.stringify(entries));
  };

  const loadEntries = () => {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      return JSON.parse(storedEntries);
    }
    return [];
  };

  (() => {
    // Initialize entries from localStorage
    entries.push(...loadEntries());
  })();
  ```
  ## 5. Coding Standards
  ### 5.1 Readability
  - Write clean, readable code.
  - Use meaningful variable and function names.
  ### 5.2 Reusability
  - Write modular, reusable code.
  - Avoid code duplication.
  ### 5.3 Responsiveness
  - Ensure the application is responsive and works on various devices.
  ### 5.4 Accessibility
  - Follow web accessibility standards (e.g., ARIA roles, alt text for images).
  ## 6. Version Control
  ### 6.1 Commits
  - Write clear, concise commit messages.
  - Use present tense (e.g., "Add entry form").
  ### 6.2 Branching
  - Use branches for new features and bug fixes.
  - Follow a naming convention (e.g., `feature/entry-form`, `bugfix/header`).
  ### Git Convention
  1. Git/GitHub:
     1. Remote Repository:

        - Creating Issue and choosing label:
          - Feature branch:
            - Feature-Issue : issue description.
            - Details : describe about the problem in detail
          - Release branch:
            - Release-version : release description.
            - Details : describe about the problem in detail
          - Bug-fix branch:
            - Bugfix : issue description
            - Details : describe about the problem in detail
          - Hot-fix branch:
            - Hotfix : issue description
            - Details : describe about the problem in detail
        - Workspace setup:
          - Assign the one who work on the issue.
          - Set the situation of the issue.
          - Match the project.
          - After finish, assign the reviewer
          - Make a code review.

        <aside>
        💡 Note: Pay attention to all aspects of the issue (title message, detail description, assigner, reviewer, label, project)

        </aside>

     2. Local Repository:

        - Branching the branch:
          - Name the branch according to the actual problem and what to do with that branch.
          - Feature branch:
            - command e.g : git flow feature start nav-bar
              - result of naming : feature/nav-bar
          - Release branch:
            - command e.g : git flow release start 1.0
              - result of naming : release/1.0
          - Bug-fix branch:
            - command e.g : git flow bugfix start {the actual problem} release/{name of the release branch}
              - result of naming : bugfix/{bugfix branch name}
          - Hot-fix branch:
            - command e.g : git flow hotfix start {name of the released version (tag)}, e.g : 1.1
              - result of naming : hotfix/1.1

        <aside>
        💡 Note: Everyone should name the branch according to the actual problem and what to do with that branch.

        </aside>

        - Commit message :
          - Commit branch :
            - feature : { describe about the problem in detail, which part you’ve worked on }
              - feature : home-page, add a menu button to navbar of home page.
            - release : { describe about the release version in detail }
              - release : release team website version 1.0
            - bugfix : { describe about the bug on the pre-release version }
              - bugfix : fixed the bug on pre-release version 1.0, error on register user account.
            - hotfix : { describe about the problem in detail, which part you’ve worked on and fixed }
              - hotfix : home-page, quick fix on released version 1.0, error on nav-bar and hero section.

        <aside>
        💡 Note: Give a meaningful commit message.

        </aside>
  ## 7. Deployment
  ### 7.1 Hosting
  - Hosting service (Vercel).
  ### 7.2 Testing
  - Test the application in different browsers and devices before deployment.
  ***
  ## 8. Web Application Design Standard
  ### 8.1 Screen Size Responsiveness
  - Screen size using tailwind :
  | Class            | Properties         |
  | ---------------- | ------------------ |
  | max-w-screen-sm  | max-width: 640px;  |
  | max-w-screen-md  | max-width: 768px;  |
  | max-w-screen-lg  | max-width: 1024px; |
  | max-w-screen-xl  | max-width: 1280px; |
  | max-w-screen-2xl | max-width: 1536px; |
  - Screen responsive using tailwind :
  | Breakpoint prefix | Minimum width | CSS                                |
  | ----------------- | ------------- | ---------------------------------- |
  | sm                | 640px         | @media (min-width: 640px) { ... }  |
  | md                | 768px         | @media (min-width: 768px) { ... }  |
  | lg                | 1024px        | @media (min-width: 1024px) { ... } |
  | xl                | 1280px        | @media (min-width: 1280px) { ... } |
  | 2xl               | 1536px        | @media (min-width: 1536px) { ... } |
  ### 8.2 Typography
  Fonts :
  Font-Style : **Roboto**, sans-serif. (For the main)
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1eae2e72-7484-4991-b7d8-ff8695b87196/8d780891-c395-4bd5-8b80-2431c3d70191/Untitled.png)
  Font-Style : **Bebas Neue**, sans-serif. (For the Title)
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1eae2e72-7484-4991-b7d8-ff8695b87196/529ec8a0-f86e-4643-b2d5-48533fbad08c/Untitled.png)
  Font Size
  Title : [64px]
  Heading : [26px]
  Description : [16px]
  Paragraph : [14px]
  Description : [12px]
  ### 8.3 Color
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1eae2e72-7484-4991-b7d8-ff8695b87196/53e8fd09-b255-4ad9-8c7a-7e731f6748d1/Untitled.png)
  Background
  #ffffff
  #55f2c3
  #343a40
  #212529
  #000000
  ## Text colors:
  #ffffff
  #55f2c3
  #000000
  ## Border colors: 3
  #cccccc
  #db4437
  #4267b2
