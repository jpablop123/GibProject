"use client";
import { useState, useEffect } from "react";

interface Country {
   id: string;
   country: string;
   costPerLb: number;
   costPerKg: number;
   minPrice: number;
   insurancePercentage: number;
   taxPercentage: number;
}

export default function AdminDashboard() {
   const [selectedTab, setSelectedTab] = useState("dashboard");
   const [countries, setCountries] = useState<Country[]>([]);

   // ✅ Fetch Countries (Only Once)
   useEffect(() => {
      const fetchCountries = async () => {
         try {
            const response = await fetch("/api/admin/countries");
            if (!response.ok) throw new Error("Failed to fetch countries");
            const data = await response.json();
            setCountries(data.countries.map(c => ({
               ...c,
               costPerLb: c.costPerLb ?? 0,
               costPerKg: c.costPerKg ?? 0,
               minPrice: c.minPrice ?? 0,
               insurancePercentage: c.insurancePercentage ?? 0,
               taxPercentage: c.taxPercentage ?? 0,
            })));
         } catch (error) {
            console.error("Error fetching countries:", error);
         }
      };

      fetchCountries();
   }, []);

   // ✅ Update Country Shipping Quotes
   const handleUpdateCountry = async (id: string, updatedData: Partial<Country>) => {
      try {
         const response = await fetch(`/api/admin/countries`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...updatedData }),
         });

         if (!response.ok) throw new Error(`Failed to update: ${response.status}`);

         // ✅ Update state with new values
         setCountries((prev) =>
            prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
         );
      } catch (error) {
         console.error("Update failed:", error);
      }
   };

   return (
      <div style={styles.container}>
         {/* Sidebar */}
         <aside style={styles.sidebar}>
            <h2 style={styles.logo}>Admin Panel</h2>
            <ul style={styles.nav}>
               <li style={selectedTab === "dashboard" ? styles.activeTab : styles.tab} onClick={() => setSelectedTab("dashboard")}>
                  Dashboard
               </li>
               <li style={selectedTab === "quotes" ? styles.activeTab : styles.tab} onClick={() => setSelectedTab("quotes")}>
                  Manage Quotes
               </li>
               <li style={selectedTab === "countries" ? styles.activeTab : styles.tab} onClick={() => setSelectedTab("countries")}>
                  Manage Countries
               </li>
            </ul>
         </aside>

         {/* Main Content */}
         <main style={styles.main}>
            {selectedTab === "dashboard" && <h1>Welcome to the Admin Dashboard</h1>}

            {selectedTab === "countries" && (
               <>
                  <h1>Manage Country Pricing</h1>
                  <table style={styles.table}>
                     <thead>
                        <tr>
                           <th>Country</th>
                           <th>Cost per LB</th>
                           <th>Cost per KG</th>
                           <th>Min Price</th>
                           <th>Insurance (%)</th>
                           <th>Tax (%)</th>
                        </tr>
                     </thead>
                     <tbody>
                        {countries.map((country) => (
                           <tr key={country.id}>
                              <td>{country.country}</td>
                              {["costPerLb", "costPerKg", "minPrice", "insurancePercentage", "taxPercentage"].map((field) => (
                                 <td key={field}>
                                    <input
                                       type="number"
                                       value={country[field as keyof Country] ?? 0}
                                       onChange={(e) => handleUpdateCountry(country.id, { [field]: parseFloat(e.target.value) || 0 })}
                                    />
                                 </td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </>
            )}
         </main>
      </div>
   );
}

// ✅ Styles
const styles = {
   container: { display: "flex", height: "100vh", backgroundColor: "#f4f4f4" },
   sidebar: { width: "250px", background: "#1E293B", color: "white", padding: "20px" },
   logo: { fontSize: "22px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" },
   nav: { listStyle: "none", padding: 0 },
   tab: { padding: "12px", cursor: "pointer", transition: "0.3s", borderRadius: "5px" },
   activeTab: { padding: "12px", cursor: "pointer", background: "#475569", borderRadius: "5px" },
   main: { flex: 1, padding: "20px", background: "#ffffff", borderRadius: "10px", margin: "20px" },
   table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px" },
};
