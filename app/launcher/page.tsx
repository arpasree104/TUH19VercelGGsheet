"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const links=[["/","หน้าผู้ลงทะเบียน","primary"],["/admin","หน้าเจ้าหน้าที่","blue"],["/reviewer","Reviewer Portal","gold"],["/scanner","Check-in / Scanner","blue"]] as const;
function Launcher(){const p=useSearchParams();const cid=p.get("conferenceId")??process.env.NEXT_PUBLIC_DEFAULT_CONFERENCE_ID??"CONF-TUH-QF-2569";return <main className="launcher"><section className="launcherCard"><div className="logos"><img src="https://img2.pic.in.th/logo-020c27d3e8c360c016.png" alt="TUH"/><img src="https://img1.pic.in.th/images/logo-04.png" alt="HACC"/></div><h1>TUH 19 &amp; HA-Regional 1</h1><p>เลือกหน้าที่ต้องการเปิด</p><div className="launcherGrid">{links.map(([href,label,variant])=><a key={href} className={variant} href={`${href}?conferenceId=${encodeURIComponent(cid)}`}>{label}</a>)}</div></section></main>}
export default function LauncherPage(){return <Suspense fallback={<div>กำลังโหลด…</div>}><Launcher/></Suspense>}
