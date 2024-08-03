
# Next.js Ad Banner Project

This is a Next.js project with TypeScript integration that displays ad banners on the homepage. It includes functionality for editing ad banners via a bottom sheet interface. 

## Features

- Display a list of ad banners.
- Each banner includes a title, description, CTA (Call-to-Action), image, and background color.
- Edit functionality for each ad banner using a bottom sheet.
- Modular and reusable components.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Sadiquehmd/AdBanners
   cd AdBanners
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to view the application.

## File Structure

- `src/app/page.tsx`: The main page that displays the list of ad banners.
- `src/components/AdBanner.tsx`: Component for rendering individual ad banners.
- `src/components/UploadForm.tsx`: Component for editing ad banners via a bottom sheet.
- `public/adbanner.json`: JSON file containing ad banner data.

## Usage

### Display Ad Banners

Ad banners are fetched from the `adbanner.json` file located in the `public` folder. The banners are displayed on the homepage, and each includes a title, description, CTA button, image, and background template.

### Edit Ad Banners

Each ad banner has an "Edit" button. Clicking this button opens a bottom sheet where users can modify the banner's details. After editing, click "Save" to update the banner.

## Configuration

- **Ad Banner Data:** Update the `public/adbanner.json` file to change or add new ad banners.
- **Styling:** Modify CSS or use styled-components for styling adjustments.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs linting checks.

## Contributing

Feel free to open issues or submit pull requests. Ensure that your contributions adhere to the project's coding standards and best practices.