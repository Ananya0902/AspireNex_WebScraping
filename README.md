# Web Scraping Project

Welcome to our Web Scraping Project repository! This project aims to demonstrate web scraping of Amazon products using Node.js and various tools like ScraperAPI and Cheerio.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project showcases how to scrape product details from Amazon using a Node.js backend. It includes functionalities to fetch product data, store it in a database, and display it on a web interface. The scraping process utilizes ScraperAPI for fetching dynamic content and Cheerio for parsing HTML.

## Features

- **Product Scraping**: Extracts product details such as title, price, availability, images, and description from Amazon URLs.
- **Database Storage**: Stores scraped product data in a MongoDB database.
- **User Interface**: Basic web interface to input Amazon URLs and view scraped products.
- **Email Notifications**: Sends email notifications about scraped products to subscribed users.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd web-scraping-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=<your-mongodb-uri>
     SCRAPER_API_KEY=<your-scraperapi-key>
     SMTP_HOST=<your-smtp-host>
     SMTP_PORT=<your-smtp-port>
     SMTP_USER=<your-smtp-user>
     SMTP_PASS=<your-smtp-password>
     ```

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

3. **Scrape a product:**
   - Enter an Amazon product URL in the provided search bar and click "Scrape".
   - View the scraped product details on the home page.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
```

### Notes:
- **Environment Variables**: Make sure to replace placeholders like `<your-mongodb-uri>`, `<your-scraperapi-key>`, `<your-smtp-host>`, `<your-smtp-port>`, `<your-smtp-user>`, and `<your-smtp-password>` with actual values from your environment setup.
