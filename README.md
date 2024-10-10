Workflow Course Assignment
Goal
The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a software package. You will do this by configuring tools, creating workflows and defining tests that improve the efficiency of the development process.
Brief
Quality Assurance (QA) is an essential practice throughout the software development lifecycle. However, it is common to build a Minimum Viable Product (MVP) first and then focus on improving its quality later. For this assignment, you will work individually to improve the quality of an existing application by implementing various development workflows and creating a comprehensive testing strategy. This will include configuring tools, identifying bugs, and creating tests.
Process
1.	Fork the Project Repository: Start by creating a fork to your GitHub account.
2.	Create a New Branch: Name this branch workflow for easy identification. 
a.	It’s a good idea to use sub-branches for each task or group of tasks. E.g. workflow-tools workflow-testing workflow-fixes
b.	Make sure to keep all changes in the workflow branch as this will be needed for the PR. So if you do use sub-branches, make sure they are merged into the workflow branch.
3.	Set Up Development Tools:
a.	Configure the ESLint and Prettier packages including npm commands to lint & format
b.	Set up commit hooks to ensure code is checked before being committed
4.	Set Up Testing Tools:
a.	Configure Jest for unit testing and test these cases:
i.	The login function stores a token when provided with valid credentials
ii.	The logout function clears the token from browser storage
b.	Configure Cypress for end-to-end testing and test these cases:
i.	The user can log in with the login form with valid credentials
ii.	The user cannot submit the login form with invalid credentials and is shown a message.
iii.	The user can log out with the logout button
5.	Submit Your Work:
a.	Open a Pull Request (PR) from the workflow branch into your default branch. Do not use the “upstream” default branch, that is, don’t create a PR into the original repo.
b.	Do not merge the PR.
c.	Request a review from peers, incorporate feedback, and make any necessary changes.
d.	Submit your PR link on Moodle or Teams according to your study plan version.
Delivery Instructions
•	You must deliver an open Pull Request (PR) link from the "workflow" branch into your fork’s default branch.
•	There is no requirement to host the forked project.
Important Notes
•	Test Failure: In some cases, a well written test will still fail if the project does not meet the expectations. For example, the project may not show user error messages. In this case the test case The user cannot submit the login form with invalid credentials and is shown a message. should fail. Writing tests that always pass is not the purpose of this assignment.
•	Issues: While working on another project you may encounter bugs or issues with this project. If a test is failing, create a new Issue to contact the project owner. If you wish to offer a fix for this bug, please do so in a separate Pull Request, for example from the branch worfklow-fixes.
Resources
•	Noroff Social Media Application
![image](https://github.com/user-attachments/assets/d9be3641-97af-45b7-8bab-97a3eab4ca64)
