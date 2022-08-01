# 🖥️ Stack

- `NextJS`: for infra + bootstrap.
- `Emotion`: for css-in-js lib.
- `Prettier`: for code standard.
- `Husky`: for infra hook.
- `React-Outside-Click-Handler`: for helping detect outside clicks \o/.

# 🎯 Design Requirements

Please design and build a simple spreadsheet. The spreadsheet should have the following specifications:

- support at least 100 rows (visually indexed by numbers) and at least 30 columns visually indexed by the alphabet (A, B, C, .. etc)
- when the user clicks on an individual cell, the cell should visually highlight in some way. See Example:
- When the user starts typing when the cell is visually highlighted (such as after the first click), then any keyboard input should show up in the cell.
- If the cell's value starts with "=", then we know that what follows the "=" needs to be a reference to another cell. So if the user enters "=A1" in a cell, that cell will display the same value as A1. You do not need to implement any other types of formulas other than a simple straight reference.
- If a referenced cell changes, then the displayed content of dependent cells need to immediately change - this includes also dependent cells of dependent cells. For example if A1 is the number 42, and B2 references A1, and C3 references B2, then C3 should show 42. If A1 is changed to 36, both B2 and C3 needs to also change to 36.
- Your spreadsheet should be able to handle circular references gracefully without throwing a stack overflow exception or causing a crash. Circular references are situations where, for example (but not limited to):
  - A1 references A2
  - A2 references A3
  - A3 references A1
    The circular reference can be a chain of references of any length. Your spreadsheet should output some type of error to notify the user of the existence of the circular reference and allow the user to remedy the issue.
- Somewhere on the page, the user also needs to be able to generate a unique link back to the same spreadsheet. This link can be copied and pasted into a different browser window which will open the same spreadsheet. You do not need to worry about read/write permissions. Going to the root url will create a new spreadsheet.

# 🖥️ Stack Requirements

- You must use React for the frontend.
- You may use any general purpose open source library.
  - **Exceptions:** You may **NOT** use any libraries specific to creating spreadsheets, evaluating formulas (e.g. https://github.com/handsontable/formula-parser) or the like.
- You must have some type of persistent data structure such that the link to an existing spreadsheet will work. To that end, you may need to store the state of the spreadsheet in localStorage or sessionStorage. You need not implement an API backend.

# 🔥 Criteria

Your work will be judged on:

- The structure and quality of your code
- The ability for your code to achieve the functionality described above

To be respectful of your time, you will not receive additional credit for implementing additional functionality not provided in the design requirements above.

# ✉️ Submission

You can provide your codebase in the form a github or gitlab repo and email the link to [john.zeller@getampla.com](mailto:john.zeller@getampla.com) and [jie.zhou@getampla.com](mailto:jie.zhou@getampla.com)
