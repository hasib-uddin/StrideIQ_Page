
'use client'
import React from "react";
import Layout from "@/components/layout/Layout";
import CardSection from "@/components/page/CardSection";
import CoporateCards from "@/components/page/CoporateCards";
import HeroSection from "@/components/page/HeroSection";
import PolicyCardSection from "@/components/page/PolicyCardSection";
import ExpenseSection from "@/components/page/ExpenseSection";
import AutomationSection from "@/components/page/AutomationSection";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <PolicyCardSection/>
        <CardSection/>
        <CoporateCards/>
         <ExpenseSection/>
        <AutomationSection/>
      </Layout>

    </div>
  );
}
