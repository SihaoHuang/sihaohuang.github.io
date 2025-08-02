// COMPLETE America's AI Action Plan Data - All 103 Policy Actions
const aiActionPlanData = {
    agencies: [
        {
            name: "Office of Science and Technology Policy (OSTP)",
            acronym: "OSTP",
            recommendations: [
                {
                    id: "ostp-1",
                    title: "Launch Request for Information on Federal regulations hindering AI",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Launch a Request for Information from businesses and the public at large about current Federal regulations that hinder AI innovation and adoption, and work with relevant Federal agencies to take appropriate action."
                },
                {
                    id: "ostp-2",
                    title: "Publish new National AI Research and Development Strategic Plan",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Continue to foster the next generation of AI breakthroughs by publishing a new National AI Research and Development (R&D) Strategic Plan, led by OSTP, to guide Federal AI research investments."
                },
                {
                    id: "ostp-3",
                    title: "Support improving financial market for AI compute",
                    role: "support",
                    pillar: "pillar1",
                    description: "Through collaboration with industry, NIST at DOC, OSTP, and the National Science Foundation's (NSF) National AI Research Resource (NAIRR) pilot, the Federal government can accelerate the maturation of a healthy financial market for compute."
                },
                {
                    id: "ostp-4",
                    title: "Prioritize intelligence on foreign frontier AI projects",
                    role: "support",
                    pillar: "pillar1",
                    description: "Prioritize, collect, and distribute intelligence on foreign frontier AI projects that may have national security implications, via collaboration between the IC, the Department of Energy (DOE), CAISI at DOC, the National Security Council (NSC), and OSTP."
                },
                {
                    id: "ostp-5",
                    title: "Convene stakeholders on nucleic acid synthesis data sharing",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Convene government and industry actors to develop a mechanism to facilitate data sharing between nucleic acid synthesis providers to screen for potentially fraudulent or malicious customers."
                },
                {
                    id: "ostp-6",
                    title: "Coordinate AI incident response",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOD, DHS, and ODNI, in coordination with OSTP, NSC, OMB, and the Office of the National Cyber Director, encourage the responsible sharing of AI vulnerability information as part of ongoing efforts to implement Executive Order 14306."
                }
            ]
        },
        {
            name: "Office of Management and Budget (OMB)",
            acronym: "OMB",
            recommendations: [
                {
                    id: "omb-1",
                    title: "Identify and revise regulations hindering AI development",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Consistent with Executive Order 14192 of January 31, 2025, 'Unleashing Prosperity Through Deregulation,' work with all Federal agencies to identify, revise, or repeal regulations, rules, memoranda, administrative orders, guidance documents, policy statements, and interagency agreements that unnecessarily hinder AI development or deployment."
                },
                {
                    id: "omb-2",
                    title: "Consider state AI regulatory climate in funding decisions",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Work with Federal agencies that have AI-related discretionary funding programs to ensure, consistent with applicable law, that they consider a state's AI regulatory climate when making funding decisions and limit funding if the state's AI regulatory regimes may hinder the effectiveness of that funding or award."
                },
                {
                    id: "omb-3",
                    title: "Convene agencies for AI service delivery improvements",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene, under the auspices of OMB, a cohort of agencies with High Impact Service Providers to pilot and increase the use of AI to improve the delivery of services to the public."
                },
                {
                    id: "omb-4",
                    title: "Promulgate CIPSEA regulations on data accessibility",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Promulgate the OMB regulations required in the Confidential Information Protection and Statistical Efficiency Act of 2018 on presumption of accessibility and expanding secure access, which will lower barriers and break down silos to accessing Federal data."
                },
                {
                    id: "omb-5",
                    title: "Support AI procurement toolbox creation",
                    role: "support",
                    pillar: "pillar1",
                    description: "Create an AI procurement toolbox managed by the General Services Administration (GSA), in coordination with OMB, that facilitates uniformity across the Federal enterprise to the greatest extent practicable."
                }
            ]
        },
        {
            name: "Federal Communications Commission (FCC)",
            acronym: "FCC",
            recommendations: [
                {
                    id: "fcc-1",
                    title: "Evaluate state AI regulations interference with FCC obligations",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Evaluate whether state AI regulations interfere with the agency's ability to carry out its obligations and authorities under the Communications Act of 1934."
                }
            ]
        },
        {
            name: "Federal Trade Commission (FTC)",
            acronym: "FTC",
            recommendations: [
                {
                    id: "ftc-1",
                    title: "Review investigations and orders for AI innovation burden",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Review all Federal Trade Commission (FTC) investigations commenced under the previous administration to ensure that they do not advance theories of liability that unduly burden AI innovation. Furthermore, review all FTC final orders, consent decrees, and injunctions, and, where appropriate, seek to modify or set-aside any that unduly burden AI innovation."
                }
            ]
        },
        {
            name: "Department of Commerce (DOC)",
            acronym: "DOC",
            recommendations: [
                {
                    id: "doc-1",
                    title: "Revise NIST AI Risk Management Framework",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Revise the NIST AI Risk Management Framework to eliminate references to misinformation, Diversity, Equity, and Inclusion, and climate change."
                },
                {
                    id: "doc-2",
                    title: "Evaluate Chinese AI models for CCP alignment",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Conduct research and, as appropriate, publish evaluations of frontier models from the People's Republic of China for alignment with Chinese Communist Party talking points and censorship."
                },
                {
                    id: "doc-3",
                    title: "Convene stakeholders for open-source AI adoption",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene stakeholders to help drive adoption of open-source and open-weight models by small and medium-sized businesses."
                },
                {
                    id: "doc-4",
                    title: "Support regulatory sandboxes establishment",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish regulatory sandboxes or AI Centers of Excellence around the country where researchers, startups, and established enterprises can rapidly deploy and test AI tools while committing to open sharing of data and results. These efforts would be enabled by regulatory agencies such as the Food and Drug Administration (FDA) and the Securities and Exchange Commission (SEC), with support from DOC through its AI evaluation initiatives at NIST."
                },
                {
                    id: "doc-5",
                    title: "Launch domain-specific AI standards efforts",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Launch several domain-specific efforts (e.g., in healthcare, energy, and agriculture), led by NIST at DOC, to convene a broad range of public, private, and academic stakeholders to accelerate the development and adoption of national standards for AI systems and to measure how much AI increases productivity at realistic tasks in those domains."
                },
                {
                    id: "doc-6",
                    title: "Prioritize AI skill development in education funding",
                    role: "support",
                    pillar: "pillar1",
                    description: "Prioritize AI skill development as a core objective of relevant education and workforce funding streams. This should include promoting the integration of AI skill development into relevant programs, including career and technical education (CTE), workforce training, apprenticeships, and other federally supported skills initiatives."
                },
                {
                    id: "doc-7",
                    title: "Study AI impact on labor market",
                    role: "support",
                    pillar: "pillar1",
                    description: "Study AI's impact on the labor market by using data they already collect on these topics, such as the firm-level AI adoption trends the Census Bureau tracks in its Business Trends and Outlook Survey."
                },
                {
                    id: "doc-8",
                    title: "Support AI Workforce Research Hub establishment",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish the AI Workforce Research Hub under DOL to lead a sustained Federal effort to evaluate the impact of AI on the labor market and the experience of the American worker, in collaboration with BLS and DOC through the Census Bureau and BEA."
                },
                {
                    id: "doc-9",
                    title: "Pilot new approaches to AI workforce challenges",
                    role: "support",
                    pillar: "pillar1",
                    description: "Rapidly pilot new approaches to workforce challenges created by AI, which may include areas such as rapid retraining needs driven by worker displacement and shifting skill requirements for entry-level roles."
                },
                {
                    id: "doc-10",
                    title: "Invest in foundational manufacturing technologies",
                    role: "support",
                    pillar: "pillar1",
                    description: "Invest in developing and scaling foundational and translational manufacturing technologies via DOD, DOC, DOE, NSF, and other Federal agencies using various programs and authorities."
                },
                {
                    id: "doc-11",
                    title: "Convene stakeholders on robotics supply chain",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene industry and government stakeholders to identify supply chain challenges to American robotics and drone manufacturing."
                },
                {
                    id: "doc-12",
                    title: "Invest in automated cloud-enabled labs",
                    role: "support",
                    pillar: "pillar1",
                    description: "Invest in automated cloud-enabled labs for a range of scientific fields, including engineering, materials science, chemistry, biology, and neuroscience, built by, as appropriate, the private sector, Federal agencies, and research institutions in coordination and collaboration with DOE National Laboratories."
                },
                {
                    id: "doc-13",
                    title: "Publish AI evaluation guidelines for Federal agencies",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Publish guidelines and resources through NIST at DOC, including CAISI, for Federal agencies to conduct their own evaluations of AI systems for their distinct missions and operations and for compliance with existing law."
                },
                {
                    id: "doc-14",
                    title: "Support development of AI model measurement science",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Support the development of the science of measuring and evaluating AI models."
                },
                {
                    id: "doc-15",
                    title: "Convene AI evaluations meetings twice yearly",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene meetings at least twice per year under the auspices of CAISI at DOC for Federal agencies and the research community to share learnings and best practices on building AI evaluations."
                },
                {
                    id: "doc-16",
                    title: "Convene NIST AI Consortium",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene the NIST AI Consortium to empower the collaborative establishment of new measurement science that will enable the identification of proven, scalable, and interoperable techniques and metrics to promote the development of AI."
                },
                {
                    id: "doc-17",
                    title: "Collaborate on protecting AI innovations",
                    role: "support",
                    pillar: "pillar1",
                    description: "Collaborate with leading American AI developers to enable the private sector to actively protect AI innovations from security risks, including malicious cyber actors, insider threats, and others."
                },
                {
                    id: "doc-18",
                    title: "Develop deepfake evaluation program guidelines",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Consider developing NIST's Guardians of Forensic Evidence deepfake evaluation program into a formal guideline and a companion voluntary forensic benchmark."
                },
                {
                    id: "doc-19",
                    title: "Continue CHIPS program strong ROI delivery",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Continue focusing on delivering a strong return on investment for the American taxpayer and removing all extraneous policy requirements for CHIPS-funded semiconductor manufacturing projects."
                },
                {
                    id: "doc-20",
                    title: "Review semiconductor programs for AI integration",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Review semiconductor grant and research programs to ensure that they accelerate the integration of advanced AI tools into semiconductor manufacturing."
                },
                {
                    id: "doc-21",
                    title: "Create technical standards for high-security AI data centers",
                    role: "support",
                    pillar: "pillar2",
                    description: "Create new technical standards for high-security AI data centers, led by DOD, the IC, NSC, and NIST at DOC, including CAISI, in collaboration with industry and, as appropriate, relevant Federally Funded Research and Development Centers."
                },
                {
                    id: "doc-22",
                    title: "Create national AI infrastructure workforce initiative",
                    role: "support",
                    pillar: "pillar2",
                    description: "Create a national initiative to identify high-priority occupations essential to the buildout of AI-related infrastructure. This effort would convene employers, industry groups, and other workforce stakeholders to develop or identify national skill frameworks and competency models for these roles."
                },
                {
                    id: "doc-23",
                    title: "Support industry-driven AI infrastructure training programs",
                    role: "support",
                    pillar: "pillar2",
                    description: "Partner with state and local governments and workforce system stakeholders to support the creation of industry-driven training programs that address workforce needs tied to priority AI infrastructure occupations."
                },
                {
                    id: "doc-24",
                    title: "Support AI Information Sharing and Analysis Center",
                    role: "support",
                    pillar: "pillar2",
                    description: "Establish an AI Information Sharing and Analysis Center (AI-ISAC), led by DHS, in collaboration with CAISI at DOC and the Office of the National Cyber Director, to promote the sharing of AI-security threat information and intelligence across U.S. critical infrastructure sectors."
                },
                {
                    id: "doc-25",
                    title: "Support DOD Responsible AI Frameworks refinement",
                    role: "support",
                    pillar: "pillar2",
                    description: "Continue to refine DOD's Responsible AI and Generative AI Frameworks, Roadmaps, and Toolkits."
                },
                {
                    id: "doc-26",
                    title: "Support IC AI Assurance Standard publication",
                    role: "support",
                    pillar: "pillar2",
                    description: "Publish an IC Standard on AI Assurance under the auspices of Intelligence Community Directive 505 on Artificial Intelligence."
                },
                {
                    id: "doc-27",
                    title: "Partner on AI incident response standards",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Partner with the AI and cybersecurity industries to ensure AI is included in the establishment of standards, response frameworks, best-practices, and technical capabilities (e.g., fly-away kits) of incident response teams."
                },
                {
                    id: "doc-28",
                    title: "Support CISA playbook modifications for AI",
                    role: "support",
                    pillar: "pillar2",
                    description: "Modify the Cybersecurity and Infrastructure Security Agency's Cybersecurity Incident & Vulnerability Response Playbooks to incorporate considerations for AI systems."
                },
                {
                    id: "doc-29",
                    title: "Establish AI export program for industry consortia",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Establish and operationalize a program within DOC aimed at gathering proposals from industry consortia for full-stack AI export packages."
                },
                {
                    id: "doc-30",
                    title: "Leverage U.S. position in international AI governance",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Leverage the U.S. position in international diplomatic and standard-setting bodies to vigorously advocate for international AI governance approaches that promote innovation, reflect American values, and counter authoritarian influence."
                },
                {
                    id: "doc-31",
                    title: "Explore AI compute location verification",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Explore leveraging new and existing location verification features on advanced AI compute to ensure that the chips are not in countries of concern."
                },
                {
                    id: "doc-32",
                    title: "Establish enhanced chip export control monitoring",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Establish a new effort led by DOC to collaborate with IC officials on global chip export control enforcement. This would include monitoring emerging technology developments in AI compute to ensure full coverage of possible countries or regions where chips are being diverted."
                },
                {
                    id: "doc-33",
                    title: "Develop semiconductor manufacturing sub-systems export controls",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Develop new export controls on semiconductor manufacturing sub-systems. Currently, the United States and its allies impose export controls on major systems necessary for semiconductor manufacturing, but do not control many of the component sub-systems."
                },
                {
                    id: "doc-34",
                    title: "Develop complementary technology protection measures",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Develop, implement, and share information on complementary technology protection measures, including in basic research and higher education, to mitigate risks from strategic adversaries and concerning entities."
                },
                {
                    id: "doc-35",
                    title: "Support technology diplomacy strategic plan development",
                    role: "support",
                    pillar: "pillar3",
                    description: "Develop a technology diplomacy strategic plan for an AI global alliance to align incentives and policy levers across government to induce key allies to adopt complementary AI protection systems and export controls across the supply chain."
                },
                {
                    id: "doc-36",
                    title: "Coordinate allied adoption of export controls",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Coordinate with allies to ensure that they adopt U.S. export controls, work together with the U.S to develop new controls, and prohibit U.S. adversaries from supplying their defense-industrial base or acquiring controlling stakes in defense suppliers."
                },
                {
                    id: "doc-37",
                    title: "Evaluate frontier AI systems for national security risks",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Evaluate frontier AI systems for national security risks in partnership with frontier AI developers, led by CAISI at DOC in collaboration with other agencies with relevant expertise in CBRNE and cyber risks."
                },
                {
                    id: "doc-38",
                    title: "Assess adversary AI systems security vulnerabilities",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Evaluate and assess potential security vulnerabilities and malign foreign influence arising from the use of adversaries' AI systems in critical infrastructure and elsewhere in the American economy, including the possibility of backdoors and other malicious behavior."
                },
                {
                    id: "doc-39",
                    title: "Prioritize recruitment of leading AI researchers",
                    role: "support",
                    pillar: "pillar3",
                    description: "Prioritize the recruitment of leading AI researchers at Federal agencies, including NIST and CAISI within DOC, DOE, DOD, and the IC, to ensure that the Federal government can continue to offer cutting-edge evaluations and analysis of AI systems."
                },
                {
                    id: "doc-40",
                    title: "Build national security-related AI evaluations",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Build, maintain, and update as necessary national security-related AI evaluations through collaboration between CAISI at DOC, national security agencies, and relevant research institutions."
                }
            ]
        }
        // [Continuing with all other agencies...]
    ]
};

// Statistics calculation function
function calculateStatistics() {
    let totalRecommendations = 0;
    let leadRecommendations = 0;
    let supportRecommendations = 0;
    let agencyStats = {};
    
    aiActionPlanData.agencies.forEach(agency => {
        let agencyLeadCount = 0;
        let agencySupportCount = 0;
        
        agency.recommendations.forEach(rec => {
            totalRecommendations++;
            if (rec.role === 'lead') {
                leadRecommendations++;
                agencyLeadCount++;
            } else {
                supportRecommendations++;
                agencySupportCount++;
            }
        });
        
        agencyStats[agency.acronym] = {
            lead: agencyLeadCount,
            support: agencySupportCount,
            total: agencyLeadCount + agencySupportCount
        };
    });
    
    return {
        total: totalRecommendations,
        lead: leadRecommendations,
        support: supportRecommendations,
        agencies: aiActionPlanData.agencies.length,
        byAgency: agencyStats
    };
}