// src/components/TopCompanies.js
import React from 'react';
import '../assets/top_companies.css';

const TopCompanies = () => {
  const companies = [
    {
      category: "MNCs",
      hiringCount: "1.9K+",
      logos: ["companies_logo/claas.gif", "companies_logo/ldc.gif", "companies_logo/cowi.gif", "companies_logo/puma.gif"], 
    },
    {
      category: "Fintech",
      hiringCount: "111",
      logos: ["companies_logo/comp1.gif", "companies_logo/comp2.gif", "companies_logo/comp3.gif", "companies_logo/comp4.gif"],
    },
    {
      category: "FMCG & Retail",
      hiringCount: "128",
      logos: ["companies_logo/comp5.gif", "companies_logo/comp6.gif", "companies_logo/comp7.gif", "companies_logo/comp8.gif"],
    },
    {
      category: "Startups",
      hiringCount: "419",
      logos: ["companies_logo/comp9.gif", "companies_logo/comp10.gif", "companies_logo/comp11.gif", "companies_logo/comp12.gif"],
    },
    {
      category: "Edtech",
      hiringCount: "154",
      logos: ["companies_logo/comp13.gif", "companies_logo/comp14.gif", "companies_logo/comp15.gif", "companies_logo/comp16.gif"],
    },
  ];

  return (
    <div className="top-companies">
      <h2>Top companies hiring now</h2>
      <div className="companies-list">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <h3>{company.category}</h3>
            <p>{company.hiringCount} are actively hiring</p>
            <div className="company-logos">
              {company.logos.map((logo, idx) => (
                <img key={idx} src={require(`../assets/${logo}`)} alt={company.category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
