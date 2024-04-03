"use client";
import { useSearchParams, usePathname } from "next/navigation";
import React from "react";

const HistoryPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  function updateSorting(sortOrder: "asc" | "desc") {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  return (
    <div className="text-center">
      <button className="btn" onClick={() => updateSorting("asc")}>
        Sort Ascending
      </button>

      <button className="btn" onClick={() => updateSorting("desc")}>
        Sort Descending
      </button>
      <button className="btn" onClick={() => switchLocale("en")}>
        English
      </button>
      <button className="btn" onClick={() => switchLocale("fr")}>
        French
      </button>
    </div>
  );
};

export default HistoryPage;
