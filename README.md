## Daily-Expense-Tracker

💸 React Native Personal Finance Tracker

A clean and efficient personal finance tracking app built with React Native, styled using Tailwind CSS via NativeWind, and powered by AsyncStorage for data persistence.

✨ Features
💰 Add Transactions:

Enter Amount

Choose Category (Food, Groceries, Shopping, Transport, Bills)

Select Payment Method (Cash, Card, UPI)

📊 Dashboard Overview:

Dynamic calculation of Total Income, Spent & Balance

Static card for quick insights

🧾 Transaction List:

Displays latest transactions first

Delete unwanted transactions (no edit feature — re-entry is simpler)

📂 View All Transactions:

Paginated transaction history

Smart filters:

Sort by Amount (Ascending, Descending)

Filter by Category or Payment Method

🛠 Tech Stack
⚛️ React Native

🧩 Redux Toolkit

🗂️ AsyncStorage

🎨 Tailwind CSS via NativeWind

🖌️ React Native Paper (UI components)

🧱 React Native Vector Icons

📸 Screenshots / Demo
Home Screen Transaction List with Filters Add Transaction Screen

📂 Add your screenshots in a screenshots/ folder in your repo for the images to display correctly.

📝 Notes
I chose not to add an edit feature — it's easier to delete and re-add a transaction if needed.

Data is stored locally using AsyncStorage — making the app fully offline-capable.

Designed with simplicity and responsiveness in mind using Tailwind + NativeWind.

📦 Installation
bash
Copy
Edit
git clone https://github.com/your-username/finance-tracker-native.git
cd finance-tracker-native
npm install
npx expo start
