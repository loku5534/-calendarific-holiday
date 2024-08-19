# About The Project

## Running the Project

To get started with this project, please follow these steps:

1. **Clone the Repository:**
   - Begin by cloning the repository to your local machine. Open your terminal or command prompt and execute the following command:
     ```bash
     git clone [repository-url]
     ```
   - Replace `[repository-url]` with the URL of the repository you want to clone.

2. **Set Up Environment Variables:**
   - Navigate to the root directory of the cloned project.
   - Create a new file named `.env` in this directory.
   - Copy the content from the `.example.env` file into your newly created `.env` file.
   - Update the placeholder values in the `.env` file with the actual values relevant to your environment.

3. **Install Dependencies:**
   - Ensure that Node.js is installed on your machine.
   - Install all necessary dependencies by running the following command:
     ```bash
     npm install
     ```
   - This command will read the `package.json` file and install all the dependencies listed within.

4. **Start the Project:**
   - To launch the project, use the following command:
     ```bash
     npm run start
     ```
   - This command will start the application, which should now be accessible based on the configuration provided in your `.env` file.

## Available Endpoints

1. **`/countries`:**
   - This endpoint retrieves a list of all available countries.

2. **`/holidays`:**
   - This endpoint accepts two query parameters: `country` and `year`.
   - For example, to fetch holiday data for Pakistan in 2024, use the following URL:
     ```plaintext
     /holidays?country=PK&year=2024
     ```

## Running Tests

The project utilizes Jest for testing. To execute the tests, follow these steps:

1. **Run the Test Command:**
   - Use the following command to run all tests:
     ```bash
     npm run test
     ```
   - This command will execute all defined test cases and display the results.
