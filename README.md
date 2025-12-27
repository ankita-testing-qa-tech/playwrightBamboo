**Playwright Automation – Demo Web Shop**
This project contains UI automation tests using Playwright (JavaScript) for the Demo Web Shop application.
"Website: https://demowebshop.tricentis.com".
The framework follows Page Object Model (POM), supports data-driven testing, and runs in GitHub Actions CI.

**Tech Stack**
Playwright (JavaScript).
Node.js.
Postman (API Testing).
GitHub Actions (CI/CD).

**Project Structure**
pages/ : Page Object files.
tests/ : Playwright test cases.
test-data/ : JSON test data.
postman/ : Postman API collection.
manual-testcases/ : Manual test cases (Excel).
performance/ : Performance test approach.
.github/workflows/ : GitHub Actions CI.

**Test Coverage**
UI Automation.
Login.
Add multiple products to cart.
Price calculation validation.
Checkout flow.

**API Automation (Postman)**
POST – Create Pet.
GET – Fetch Pet by ID.

**Manual Testing**
5 critical test cases covering core flows.

**Environment Variables**
Create a .env file in project root:
DEMO_EMAIL=your_email@gmail.com (testone7083@gmail.com)
DEMO_PASSWORD=your_password (Pass@123)

Do not commit .env file to GitHub.

**Setup & Run Tests**
Install Dependencies. 
npm install. 
Install Playwright Browsers. 
npx playwright install. 

**Run Tests**
npx playwright test. 
View Report. 
npx playwright show-report. 
CI/CD
GitHub Actions automatically runs tests on push.
Playwright HTML report is generated in CI. 

**API Testing (Postman)**
Import Postman collection from postman/ folder.
Uses environment variables for baseUrl and petId.

**Author**
Ankita Pardeshi
QA Engineer – Manual & Automation
