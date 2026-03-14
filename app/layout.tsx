import "./globals.css";

export const metadata = {
title: "Shahul Hameed Portfolio",
description: "IT Infrastructure & Network Security Specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}