# 💸 React Native Personal Finance Tracker

A beautifully crafted personal finance tracker built with **React Native**, styled using **Tailwind CSS via NativeWind**, and powered by **AsyncStorage** for local data persistence. This app helps users manage and monitor their daily finances with a clean, intuitive UI and powerful features.

---

## ✨ Features

- **💰 Add Transactions**

  - Enter transaction amount
  - Choose category: `Food`, `Groceries`, `Shopping`, `Transport`, `Bills`
  - Select payment method: `Cash`, `Card`, `UPI`

- **📊 Dashboard Overview**

  - Displays real-time **Income**, **Spent**, and **Current Balance**
  - Static insight cards for quick overviews

- **🧾 Dynamic Transaction List**

  - Most recent transactions displayed first
  - Ability to delete any transaction (no edit — for simplicity, just re-add)

- **📂 View All Transactions**
  - Paginated history view for long transaction lists
  - Filter support:
    - Sort by **Amount**: `Ascending` or `Descending`
    - Filter by **Category** and **Payment Method**

---

## 🛠 Tech Stack

| Tech                     | Purpose                        |
| ------------------------ | ------------------------------ |
| ⚛️ React Native          | App development                |
| 🧩 Redux Toolkit         | State management               |
| 🗂️ AsyncStorage          | Local storage for transactions |
| 🎨 Tailwind + NativeWind | Styling & layout               |
| 🖌️ React Native Paper    | UI components                  |
| 🧱 Vector Icons          | Category & UI icons            |

---

## 📸 Screenshots / Demo

| 🏠 Dashboard | 🧾 Transactions with Filters | ➕ Add Transaction |
|-------------|------------------------------|--------------------|
| ![Home](./src/screenshots/home.jpg) | ![Filters](./src/screenshots/filters.jpg) | ![Add](./src/screenshots/add.jpg) |

---

### 🎥 Demo Video

[![Watch Demo](https://img.youtube.com/vi/2Pmmqnk_kG8/0.jpg)](https://www.youtube.com/watch?v=2Pmmqnk_kG8)

---

## 📝 Notes

- 🔁 **No Edit Option**: Simplified UX — if a transaction is incorrect, just delete and re-add it.
- 📴 **Offline Support**: Data is stored locally via AsyncStorage, so no internet connection is required.
- 🎨 **Clean Design**: Built with Tailwind via NativeWind for a modern, consistent UI.

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/finance-tracker-native.git
cd finance-tracker-native
npm install
npx react-native run-android

```

# 🙌 Author

**Kamlesh Kandpal**

- | [🔗 GitHub](https://github.com/KamleshKandpal1) | [🔗 LinkedIn](https://www.linkedin.com/in/kamlesh-kandpal/) | [🌐 Portfolio](https://kamlesh-kandpal.vercel.app/)
