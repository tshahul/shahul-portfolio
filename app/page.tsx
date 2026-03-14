"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {

useEffect(() => {
document.documentElement.style.scrollBehavior = "smooth";
}, []);

return (

<main className="min-h-screen bg-black text-white cyber-grid">

{/* NAVBAR */}

<nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-green-500 z-50">

<div className="max-w-6xl mx-auto flex justify-between px-6 py-4">

<h1 className="text-green-400 font-bold text-lg">
Shahul Hameed
</h1>

<div className="space-x-6 text-sm text-gray-300">

<a href="#summary">Summary</a>
<a href="#experience">Experience</a>
<a href="#education">Education</a>
<a href="#stack">Technology</a>
<a href="#contact">Contact</a>

</div>

</div>

</nav>

<div className="max-w-6xl mx-auto px-6 pt-32">

{/* HERO */}

<section className="relative grid md:grid-cols-2 gap-12 items-center mb-24">

{/* Floating Tech Icons */}

<div className="floating-icons">
<Image src="/icons/cloud.png" alt="cloud" width={60} height={60} className="float-icon icon1"/>
<Image src="/icons/network.png" alt="network" width={60} height={60} className="float-icon icon2"/>
<Image src="/icons/security.png" alt="security" width={60} height={60} className="float-icon icon3"/>
<Image src="/icons/cisco.png" alt="cisco" width={60} height={60} className="float-icon icon4"/>
</div>

{/* LEFT SIDE */}

<div>

<h1 className="text-5xl font-bold text-green-400 leading-tight drop-shadow-[0_0_10px_#00ff88]">
IT Infrastructure & Network Security Specialist
</h1>

<p className="mt-4 text-gray-300">
Senior IT Administrator • 16+ Years Experience
</p>

<p className="mt-6 text-gray-400 max-w-xl">
CCNP Enterprise certified IT professional experienced in enterprise networking,
firewall security, virtualization, Windows Server environments and Microsoft infrastructure.
</p>

{/* BUTTONS */}

<div className="mt-8 flex flex-wrap gap-4 items-center">

<a
href="/Shahul-CV.pdf"
className="bg-green-500 text-black px-6 py-3 rounded hover:bg-green-400 transition"
>
Download CV
</a>

<a
href="https://www.linkedin.com/in/shahul86/"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 border border-green-500 px-5 py-3 rounded text-green-400 hover:bg-green-500 hover:text-black transition"
>
<FaLinkedin size={20}/>
LinkedIn
</a>

<a
href="https://instagram.com/yourusername"
target="_blank"
className="flex items-center gap-2 border border-green-500 px-5 py-3 rounded text-green-400 hover:bg-green-500 hover:text-black transition"
>
<FaInstagram size={20}/>
Instagram
</a>

<a
href="https://facebook.com/yourusername"
target="_blank"
className="flex items-center gap-2 border border-green-500 px-5 py-3 rounded text-green-400 hover:bg-green-500 hover:text-black transition"
>
<FaFacebook size={20}/>
Facebook
</a>

</div>

</div>

{/* RIGHT SIDE */}

<div className="flex justify-center">

<Image
src="/images/profile2.jpg"
alt="profile"
width={260}
height={260}
className="rounded-full border-4 border-green-500 shadow-[0_0_25px_#00ff88]"
/>

</div>

</section>
{/* PROFILE SUMMARY */}

<section id="summary" className="mb-24">

<h2 className="text-2xl text-green-400 mb-4">
Profile Summary
</h2>

<p className="text-gray-400 max-w-3xl">
Experienced IT Systems & Infrastructure Specialist with strong expertise in networking,
server administration and enterprise IT infrastructure management. CCNP Enterprise certified
with expertise in routing & switching, firewall security, VPNs and virtualization.
</p>

</section>

{/* PROFESSIONAL HIGHLIGHTS */}

<section className="mb-24">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

<div className="highlight-box">
<h3 className="text-3xl text-green-400 font-bold">16+</h3>
<p className="text-gray-400">Years Experience</p>
</div>

<div className="highlight-box">
<h3 className="text-3xl text-green-400 font-bold">CCNP</h3>
<p className="text-gray-400">Enterprise Certified</p>
</div>

<div className="highlight-box">
<h3 className="text-3xl text-green-400 font-bold">50+</h3>
<p className="text-gray-400">Networks Managed</p>
</div>

<div className="highlight-box">
<h3 className="text-3xl text-green-400 font-bold">500+</h3>
<p className="text-gray-400">Systems Supported</p>
</div>

</div>

</section>

{/* WORK EXPERIENCE */}

<section id="experience" className="mb-24">

<h2 className="text-2xl text-green-400 mb-6">
Work Experience
</h2>

<div className="space-y-10 border-l border-green-500 pl-6">

<div>
<h3 className="font-semibold">
IT Administrator — Silver Oak Properties (Dubai)
</h3>
<p className="text-green-400 text-sm">Nov 2022 – Present</p>
</div>

<div>
<h3 className="font-semibold">
IT Administrator — Trust Holdings LLC (Dubai)
</h3>
<p className="text-green-400 text-sm">Sep 2019 – Nov 2022</p>
</div>

<div>
<h3 className="font-semibold">
IT Support Engineer — Sydney Cars & Barq Systems (Qatar)
</h3>
<p className="text-green-400 text-sm">Jan 2013 – Sep 2018</p>
</div>

<div>
<h3 className="font-semibold">
IT Engineer — Mobisat IT Solution (Dubai)
</h3>
<p className="text-green-400 text-sm">Jun 2008 – Mar 2012</p>
</div>

</div>

</section>

{/* EDUCATION */}

<section id="education" className="mb-24">

<h2 className="text-2xl text-green-400 mb-6">
Education
</h2>

<div className="space-y-6">

<div>
<h3 className="font-semibold">
Master of Science – Cyber Forensics & Information Security
</h3>
<p className="text-gray-400">Madras University</p>
</div>

<div>
<h3 className="font-semibold">
Bachelor of Computer Applications
</h3>
<p className="text-gray-400">Alagappa University</p>
</div>

</div>

</section>

{/* CERTIFICATIONS */}

<section id="certifications" className="mb-24">

<h2 className="text-2xl text-green-400 mb-8">
Certifications
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

<div className="cert-card">
<img src="/certs/ccnp.png"/>
<p>CCNP Enterprise</p>
</div>

<div className="cert-card">
<img src="/certs/enarsi.png"/>
<p>CISCO-ENARSI</p>
</div>

<div className="cert-card">
<img src="/certs/encore.png"/>
<p>CISCO-ENCORE</p>
</div>

</div>

</section>

{/* TECHNOLOGY STACK */}

<section id="stack" className="mb-24">

<h2 className="text-2xl text-green-400 mb-8">
Technology Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

<div className="tech-icon"><Image src="/icons/cisco.png" alt="cisco" width={60} height={60}/><p>Cisco</p></div>
<div className="tech-icon"><Image src="/icons/windows.png" alt="windows" width={60} height={60}/><p>Windows Server</p></div>
<div className="tech-icon"><Image src="/icons/vmware.png" alt="vmware" width={60} height={60}/><p>VMware</p></div>
<div className="tech-icon"><Image src="/icons/microsoft365.png" alt="m365" width={60} height={60}/><p>Microsoft 365</p></div>
<div className="tech-icon"><Image src="/icons/network.png" alt="network" width={60} height={60}/><p>Networking</p></div>
<div className="tech-icon"><Image src="/icons/firewall.png" alt="firewall" width={60} height={60}/><p>Firewall</p></div>
<div className="tech-icon"><Image src="/icons/cloud.png" alt="cloud" width={60} height={60}/><p>Cloud</p></div>
<div className="tech-icon"><Image src="/icons/iot.png" alt="IOT" width={60} height={60}/><p>IOT</p></div>

</div>

</section>

{/* ENTERPRISE TECHNOLOGIES */}

<section className="mb-24">

<h2 className="text-2xl text-green-400 mb-8">
Enterprise Technologies I Work With
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

<div className="tech-box"><Image src="/icons/cisco.png" alt="cisco" width={60} height={60}/><p>Cisco Networking</p></div>
<div className="tech-box"><Image src="/icons/fortinet.png" alt="fortinet" width={60} height={60}/><p>Fortinet Firewall</p></div>
<div className="tech-box"><Image src="/icons/vmware.png" alt="vmware" width={60} height={60}/><p>VMware Virtualization</p></div>
<div className="tech-box"><Image src="/icons/windows.png" alt="windows" width={60} height={60}/><p>Windows Server</p></div>
<div className="tech-box"><Image src="/icons/azure.png" alt="azure" width={60} height={60}/><p>Microsoft Azure</p></div>
<div className="tech-box"><Image src="/icons/office365.png" alt="office365" width={60} height={60}/><p>Office 365</p></div>
<div className="tech-box"><Image src="/icons/ad.png" alt="ad" width={60} height={60}/><p>Active Directory</p></div>
<div className="tech-box"><Image src="/icons/backup.png" alt="backup" width={60} height={60}/><p>Veeam Backup</p></div>

</div>

</section>

{/* CONTACT */}

<section id="contact" className="mb-24">

<h2 className="text-2xl text-green-400 mb-4">
Contact
</h2>

<p className="text-gray-400">Dubai, United Arab Emirates</p>
<p className="text-gray-400">Email: mt.shahul@gmail.com</p>
<p className="text-gray-400">Phone: +971 566461253</p>

<p className="text-green-400 mt-2">
LinkedIn: linkedin.com/in/shahul86
</p>

</section>

<footer className="border-t border-green-500 pt-6 text-center text-gray-500">
© 2026 Shahul Hameed
</footer>

</div>

</main>

);

}