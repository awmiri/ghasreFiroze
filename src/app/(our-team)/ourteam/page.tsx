"use client";

import React from "react";
import { Mail, Star } from "lucide-react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import AboutTeam from "@/components/template/ourteam/AboutTeam";
import LeaderContent from "@/components/template/ourteam/LeaderContent";
import SeoContent from "@/components/template/ourteam/SeoContent";
import EmploysContent from "@/components/template/ourteam/EmploysContent";

const TeamPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      <div className="fixed -top-48 -right-48 w-150 h-160 rounded-full bg-gradient-radial from-emerald-500/8 to-transparent pointer-events-none" />
      <div className="fixed -bottom-48 -left-48 w-125 h-125 rounded-full bg-gradient-radial from-blue-500/6 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-275 mx-auto px-5 md:px-10 pb-12 md:pb-20 pt-27">
        <AboutTeam />

        <LeaderContent />

        <SeoContent />

        <EmploysContent />
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .border-r-3 {
          border-right-width: 3px;
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
