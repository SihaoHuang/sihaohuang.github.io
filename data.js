// UPDATED VERSION - PILLAR FIXES
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
                    description: "Led by the Office of Science and Technology Policy (OSTP), launch a Request for Information from businesses and the public at large about current Federal regulations that hinder AI innovation and adoption, and work with relevant Federal agencies to take appropriate action."
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
                    pillar: "pillar3",
                    description: "Prioritize, collect, and distribute intelligence on foreign frontier AI projects that may have national security implications, via collaboration between the IC, the Department of Energy (DOE), CAISI at DOC, the National Security Council (NSC), and OSTP."
                },
                {
                    id: "ostp-5",
                    title: "Convene stakeholders on nucleic acid synthesis data sharing",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Led by OSTP, convene government and industry actors to develop a mechanism to facilitate data sharing between nucleic acid synthesis providers to screen for potentially fraudulent or malicious customers."
                },
                {
                    id: "ostp-6",
                    title: "Collaborate on AI compute location verification",
                    role: "support",
                    pillar: "pillar3",
                    description: "Led by DOC, OSTP, and NSC in collaboration with industry, explore leveraging new and existing location verification features on advanced AI compute to ensure that the chips are not in countries of concern."
                },
                {
                    id: "ostp-7",
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
                    description: "Led by the Office of Management and Budget (OMB) and consistent with Executive Order 14192 of January 31, 2025, \"Unleashing Prosperity Through Deregulation,\" work with all Federal agencies to identify, revise, or repeal regulations, rules, memoranda, administrative orders, guidance documents, policy statements, and interagency agreements that unnecessarily hinder AI development or deployment."
                },
                {
                    id: "omb-2",
                    title: "Consider state AI regulatory climate in funding decisions",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by OMB, work with Federal agencies that have AI-related discretionary funding programs to ensure, consistent with applicable law, that they consider a state's AI regulatory climate when making funding decisions and limit funding if the state's AI regulatory regimes may hinder the effectiveness of that funding or award."
                },
                {
                    id: "omb-3",
                    title: "Create AI procurement toolbox",
                    role: "support",
                    pillar: "pillar1",
                    description: "Create an AI procurement toolbox managed by the General Services Administration (GSA), in coordination with OMB, that facilitates uniformity across the Federal enterprise to the greatest extent practicable."
                },
                {
                    id: "omb-4",
                    title: "Convene agencies for AI service delivery improvements",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene, under the auspices of OMB, a cohort of agencies with High Impact Service Providers to pilot and increase the use of AI to improve the delivery of services to the public."
                },
                {
                    id: "omb-5",
                    title: "Coordinate AI incident response activities",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOD, DHS, and ODNI, in coordination with OSTP, NSC, OMB, and the Office of the National Cyber Director, encourage the responsible sharing of AI vulnerability information as part of ongoing efforts to implement Executive Order 14306."
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
                    description: "Led by the Federal Communications Commission (FCC), evaluate whether state AI regulations interfere with the agency's ability to carry out its obligations and authorities under the Communications Act of 1934."
                }
            ]
        },
        {
            name: "Federal Trade Commission (FTC)",
            acronym: "FTC",
            recommendations: [
                {
                    id: "ftc-1",
                    title: "Review FTC investigations for AI innovation burden",
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
                    description: "Led by the Department of Commerce (DOC) through the National Institute of Standards and Technology (NIST), revise the NIST AI Risk Management Framework to eliminate references to misinformation, Diversity, Equity, and Inclusion, and climate change."
                },
                {
                    id: "doc-2",
                    title: "Evaluate Chinese AI models for CCP alignment",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOC through NIST's Center for AI Standards and Innovation (CAISI), conduct research and, as appropriate, publish evaluations of frontier models from the People's Republic of China for alignment with Chinese Communist Party talking points and censorship."
                },
                {
                    id: "doc-3",
                    title: "Support improving financial market for AI compute",
                    role: "support",
                    pillar: "pillar1",
                    description: "Through collaboration with industry, NIST at DOC, OSTP, and the National Science Foundation's (NSF) National AI Research Resource (NAIRR) pilot, the Federal government can accelerate the maturation of a healthy financial market for compute."
                },
                {
                    id: "doc-4",
                    title: "Convene stakeholders for open-source AI adoption",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOC through the National Telecommunications and Information Administration (NTIA), convene stakeholders to help drive adoption of open-source and open-weight models by small and medium-sized businesses."
                },
                {
                    id: "doc-5",
                    title: "Support regulatory sandboxes for AI testing",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish regulatory sandboxes or AI Centers of Excellence around the country where researchers, startups, and established enterprises can rapidly deploy and test AI tools while committing to open sharing of data and results. These efforts would be enabled by regulatory agencies such as the Food and Drug Administration (FDA) and the Securities and Exchange Commission (SEC), with support from DOC through its AI evaluation initiatives at NIST."
                },
                {
                    id: "doc-6",
                    title: "Launch domain-specific AI standards development",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Launch several domain-specific efforts (e.g., in healthcare, energy, and agriculture), led by NIST at DOC, to convene a broad range of public, private, and academic stakeholders to accelerate the development and adoption of national standards for AI systems and to measure how much AI increases productivity at realistic tasks in those domains."
                },
                {
                    id: "doc-7",
                    title: "Support prioritizing intelligence on foreign AI projects",
                    role: "support",
                    pillar: "pillar3",
                    description: "Prioritize, collect, and distribute intelligence on foreign frontier AI projects that may have national security implications, via collaboration between the IC, the Department of Energy (DOE), CAISI at DOC, the National Security Council (NSC), and OSTP."
                },
                {
                    id: "doc-8",
                    title: "Support AI skill development in education and workforce",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by the Department of Labor (DOL), the Department of Education (ED), NSF, and DOC, prioritize AI skill development as a core objective of relevant education and workforce funding streams."
                },
                {
                    id: "doc-9",
                    title: "Study AI's impact on labor market",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by the Bureau of Labor Statistics (BLS) and DOC through the Census Bureau and the Bureau of Economic Analysis (BEA), study AI's impact on the labor market by using data they already collect on these topics."
                },
                {
                    id: "doc-10",
                    title: "Support AI Workforce Research Hub",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish the AI Workforce Research Hub under DOL to lead a sustained Federal effort to evaluate the impact of AI on the labor market and the experience of the American worker, in collaboration with BLS and DOC through the Census Bureau and BEA."
                },
                {
                    id: "doc-11",
                    title: "Pilot new approaches to AI workforce challenges",
                    role: "support",
                    pillar: "pillar1",
                    description: "At DOL and DOC, rapidly pilot new approaches to workforce challenges created by AI, which may include areas such as rapid retraining needs driven by worker displacement and shifting skill requirements for entry-level roles."
                },
                {
                    id: "doc-12",
                    title: "Support foundational manufacturing technologies investment",
                    role: "support",
                    pillar: "pillar1",
                    description: "Invest in developing and scaling foundational and translational manufacturing technologies via DOD, DOC, DOE, NSF, and other Federal agencies using various programs and authorities."
                },
                {
                    id: "doc-13",
                    title: "Convene stakeholders on robotics supply chain challenges",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOC through NTIA, convene industry and government stakeholders to identify supply chain challenges to American robotics and drone manufacturing."
                },
                {
                    id: "doc-14",
                    title: "Support AI-enabled science investment",
                    role: "support",
                    pillar: "pillar1",
                    description: "Through NSF, DOE, NIST at DOC, and other Federal partners, invest in automated cloud-enabled labs for a range of scientific fields."
                },
                {
                    id: "doc-15",
                    title: "Support AI interpretability technology development",
                    role: "support",
                    pillar: "pillar1",
                    description: "Launch a technology development program led by the Defense Advanced Research Projects Agency in collaboration with CAISI at DOC and NSF, to advance AI interpretability, AI control systems, and adversarial robustness."
                },
                {
                    id: "doc-16",
                    title: "Support AI hackathon initiative coordination",
                    role: "support",
                    pillar: "pillar1",
                    description: "The DOD, DOE, CAISI at DOC, the Department of Homeland Security (DHS), NSF, and academic partners should coordinate an AI hackathon initiative to solicit the best and brightest from U.S. academia to test AI systems."
                },
                {
                    id: "doc-17",
                    title: "Publish AI evaluation guidelines for Federal agencies",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Publish guidelines and resources through NIST at DOC, including CAISI, for Federal agencies to conduct their own evaluations of AI systems for their distinct missions and operations and for compliance with existing law."
                },
                {
                    id: "doc-18",
                    title: "Support science of measuring AI models",
                    role: "support",
                    pillar: "pillar1",
                    description: "Support the development of the science of measuring and evaluating AI models, led by NIST at DOC, DOE, NSF, and other Federal science agencies."
                },
                {
                    id: "doc-19",
                    title: "Convene AI evaluations meetings",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Convene meetings at least twice per year under the auspices of CAISI at DOC for Federal agencies and the research community to share learnings and best practices on building AI evaluations."
                },
                {
                    id: "doc-20",
                    title: "Convene NIST AI Consortium",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOC, convene the NIST AI Consortium to empower the collaborative establishment of new measurement science that will enable the identification of proven, scalable, and interoperable techniques and metrics to promote the development of AI."
                },
                {
                    id: "doc-21",
                    title: "Support protection of commercial AI innovations",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by DOD, DHS, CAISI at DOC, and other appropriate members of the IC, collaborate with leading American AI developers to enable the private sector to actively protect AI innovations from security risks."
                },
                {
                    id: "doc-22",
                    title: "Develop deepfake evaluation program guidelines",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by NIST at DOC, consider developing NIST's Guardians of Forensic Evidence deepfake evaluation program into a formal guideline and a companion voluntary forensic benchmark."
                },
                {
                    id: "doc-23",
                    title: "Continue CHIPS Program delivery",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by DOC's revamped CHIPS Program Office, continue focusing on delivering a strong return on investment for the American taxpayer and removing all extraneous policy requirements for CHIPS-funded semiconductor manufacturing projects."
                },
                {
                    id: "doc-24",
                    title: "Review semiconductor programs for AI integration",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by DOC, review semiconductor grant and research programs to ensure that they accelerate the integration of advanced AI tools into semiconductor manufacturing."
                },
                {
                    id: "doc-25",
                    title: "Support high-security data center standards",
                    role: "support",
                    pillar: "pillar2",
                    description: "Create new technical standards for high-security AI data centers, led by DOD, the IC, NSC, and NIST at DOC, including CAISI, in collaboration with industry."
                },
                {
                    id: "doc-26",
                    title: "Support AI infrastructure workforce initiative",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOL and DOC, create a national initiative to identify high-priority occupations essential to the buildout of AI-related infrastructure."
                },
                {
                    id: "doc-27",
                    title: "Support AI infrastructure training programs",
                    role: "support",
                    pillar: "pillar2",
                    description: "Through DOL, DOE, ED, NSF, and DOC, partner with state and local governments and workforce system stakeholders to support the creation of industry-driven training programs that address workforce needs tied to priority AI infrastructure occupations."
                },
                {
                    id: "doc-28",
                    title: "Establish AI Information Sharing and Analysis Center",
                    role: "support",
                    pillar: "pillar2",
                    description: "Establish an AI Information Sharing and Analysis Center (AI-ISAC), led by DHS, in collaboration with CAISI at DOC and the Office of the National Cyber Director."
                },
                {
                    id: "doc-29",
                    title: "Support secure-by-design AI promotion",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOD in collaboration with NIST at DOC and ODNI, continue to refine DOD's Responsible AI and Generative AI Frameworks, Roadmaps, and Toolkits."
                },
                {
                    id: "doc-30",
                    title: "Support IC AI assurance standard",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by ODNI in consultation with DOD and CAISI at DOC, publish an IC Standard on AI Assurance under the auspices of Intelligence Community Directive 505 on Artificial Intelligence."
                },
                {
                    id: "doc-31",
                    title: "Partner on AI incident response standards",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by NIST at DOC, including CAISI, partner with the AI and cybersecurity industries to ensure AI is included in the establishment of standards, response frameworks, best-practices, and technical capabilities of incident response teams."
                },
                {
                    id: "doc-32",
                    title: "Establish AI export program",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Establish and operationalize a program within DOC aimed at gathering proposals from industry consortia for full-stack AI export packages."
                },
                {
                    id: "doc-33",
                    title: "Leverage U.S. position in international AI governance",
                    role: "support",
                    pillar: "pillar3",
                    description: "Led by DOS and DOC, leverage the U.S. position in international diplomatic and standard-setting bodies to vigorously advocate for international AI governance approaches that promote innovation, reflect American values, and counter authoritarian influence."
                },
                {
                    id: "doc-34",
                    title: "Explore AI compute location verification",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Led by DOC, OSTP, and NSC in collaboration with industry, explore leveraging new and existing location verification features on advanced AI compute to ensure that the chips are not in countries of concern."
                },
                {
                    id: "doc-35",
                    title: "Establish enhanced chip export control monitoring",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Establish a new effort led by DOC to collaborate with IC officials on global chip export control enforcement."
                },
                {
                    id: "doc-36",
                    title: "Develop semiconductor manufacturing sub-systems export controls",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Led by DOC, develop new export controls on semiconductor manufacturing sub-systems."
                },
                {
                    id: "doc-37",
                    title: "Support technology protection measures development",
                    role: "support",
                    pillar: "pillar3",
                    description: "Led by DOC and DOS and in coordination with NSC, DOE, and NSF, develop, implement, and share information on complementary technology protection measures, including in basic research and higher education, to mitigate risks from strategic adversaries and concerning entities."
                },
                {
                    id: "doc-38",
                    title: "Support technology diplomacy for AI alliance",
                    role: "support",
                    pillar: "pillar3",
                    description: "Develop a technology diplomacy strategic plan for an AI global alliance to align incentives and policy levers across government to induce key allies to adopt complementary AI protection systems and export controls across the supply chain, led by DOS in coordination with DOC, DOD, and DOE."
                },
                {
                    id: "doc-39",
                    title: "Coordinate allied adoption of export controls",
                    role: "support",
                    pillar: "pillar3",
                    description: "Led by DOC and DOD, coordinate with allies to ensure that they adopt U.S. export controls, work together with the U.S to develop new controls, and prohibit U.S. adversaries from supplying their defense-industrial base."
                },
                {
                    id: "doc-40",
                    title: "Evaluate frontier AI systems for national security risks",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Evaluate frontier AI systems for national security risks in partnership with frontier AI developers, led by CAISI at DOC in collaboration with other agencies with relevant expertise in CBRNE and cyber risks."
                },
                {
                    id: "doc-41",
                    title: "Assess adversary AI systems security vulnerabilities",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Led by CAISI at DOC in collaboration with national security agencies, evaluate and assess potential security vulnerabilities and malign foreign influence arising from the use of adversaries' AI systems in critical infrastructure and elsewhere in the American economy."
                },
                {
                    id: "doc-42",
                    title: "Support AI researcher recruitment at Federal agencies",
                    role: "support",
                    pillar: "pillar3",
                    description: "Prioritize the recruitment of leading AI researchers at Federal agencies, including NIST and CAISI within DOC, DOE, DOD, and the IC, to ensure that the Federal government can continue to offer cutting-edge evaluations and analysis of AI systems."
                },
                {
                    id: "doc-43",
                    title: "Support national security AI evaluations",
                    role: "support",
                    pillar: "pillar3",
                    description: "Build, maintain, and update as necessary national security-related AI evaluations through collaboration between CAISI at DOC, national security agencies, and relevant research institutions."
                }
            ]
        },
        {
            name: "Department of Defense (DOD)",
            acronym: "DOD",
            recommendations: [
                {
                    id: "dod-1",
                    title: "Update joint DOD-IC AI adoption assessments",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by the Department of Defense (DOD) in coordination with the Office of the Director of National Intelligence (ODNI), regularly update joint DOD-Intelligence Community (IC) assessments of the comparative level of adoption of AI tools by the United States, its competitors, and its adversaries' national security establishments."
                },
                {
                    id: "dod-2",
                    title: "Identify DOD AI workforce requirements",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Identify the talent and skills DOD's workforce requires to leverage AI at scale. Based on this identification, implement talent development programs to meet AI workforce requirements and drive the effective employment of AI-enabled capabilities."
                },
                {
                    id: "dod-3",
                    title: "Establish AI & Autonomous Systems Virtual Proving Ground",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Establish an AI & Autonomous Systems Virtual Proving Ground at DOD, beginning with scoping the technical, geographic, security, and resourcing requirements necessary for such a facility."
                },
                {
                    id: "dod-4",
                    title: "Develop streamlined AI workflow automation",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Develop a streamlined process within DOD for classifying, evaluating, and optimizing workflows involved in its major operational and enabling functions, aiming to develop a list of priority workflows for automation with AI."
                },
                {
                    id: "dod-5",
                    title: "Secure priority computing access agreements",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Prioritize DOD-led agreements with cloud service providers, operators of computing infrastructure, and other relevant private sector entities to codify priority access to computing resources in the event of a national emergency."
                },
                {
                    id: "dod-6",
                    title: "Develop Senior Military Colleges AI hubs",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Grow our Senior Military Colleges into hubs of AI research, development, and talent building, teaching core AI skills and literacy to future generations."
                }
            ]
        },
        {
            name: "Department of Labor (DOL)",
            acronym: "DOL",
            recommendations: [
                {
                    id: "dol-1",
                    title: "Lead AI skill development prioritization",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by the Department of Labor (DOL), the Department of Education (ED), NSF, and DOC, prioritize AI skill development as a core objective of relevant education and workforce funding streams."
                },
                {
                    id: "dol-2",
                    title: "Lead AI labor market impact study",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by the Bureau of Labor Statistics (BLS) and DOC through the Census Bureau and the Bureau of Economic Analysis (BEA), study AI's impact on the labor market by using data they already collect on these topics."
                },
                {
                    id: "dol-3",
                    title: "Establish AI Workforce Research Hub",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Establish the AI Workforce Research Hub under DOL to lead a sustained Federal effort to evaluate the impact of AI on the labor market and the experience of the American worker."
                },
                {
                    id: "dol-4",
                    title: "Fund rapid retraining for AI displacement",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOL, leverage available discretionary funding, where appropriate, to fund rapid retraining for individuals impacted by AI-related job displacement."
                },
                {
                    id: "dol-5",
                    title: "Create AI infrastructure workforce initiative",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by DOL and DOC, create a national initiative to identify high-priority occupations essential to the buildout of AI-related infrastructure."
                },
                {
                    id: "dol-6",
                    title: "Expand Registered Apprenticeships for AI infrastructure",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by DOL, expand the use of Registered Apprenticeships in occupations critical to AI infrastructure."
                }
            ]
        },
        {
            name: "National Science Foundation (NSF)",
            acronym: "NSF",
            recommendations: [
                {
                    id: "nsf-1",
                    title: "Support NAIRR pilot and compute access",
                    role: "support",
                    pillar: "pillar1",
                    description: "Through collaboration with industry, NIST at DOC, OSTP, and the National Science Foundation's (NSF) National AI Research Resource (NAIRR) pilot, the Federal government can accelerate the maturation of a healthy financial market for compute."
                },
                {
                    id: "nsf-2",
                    title: "Partner on AI research community access",
                    role: "support",
                    pillar: "pillar1",
                    description: "Partner with leading technology companies to increase the research community's access to world-class private sector computing, models, data, and software resources as part of the NAIRR pilot."
                },
                {
                    id: "nsf-3",
                    title: "Build NAIRR operations capability",
                    role: "support",
                    pillar: "pillar1",
                    description: "Build the foundations for a lean and sustainable NAIRR operations capability that can connect an increasing number of researchers and educators across the country to critical AI resources."
                },
                {
                    id: "nsf-4",
                    title: "Support AI skill development programs",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by the Department of Labor (DOL), the Department of Education (ED), NSF, and DOC, prioritize AI skill development as a core objective of relevant education and workforce funding streams."
                }
            ]
        },
        {
            name: "Department of Energy (DOE)",
            acronym: "DOE",
            recommendations: [
                {
                    id: "doe-1",
                    title: "Support intelligence on foreign AI projects",
                    role: "support",
                    pillar: "pillar3",
                    description: "Prioritize, collect, and distribute intelligence on foreign frontier AI projects that may have national security implications, via collaboration between the IC, the Department of Energy (DOE), CAISI at DOC, the National Security Council (NSC), and OSTP."
                },
                {
                    id: "doe-2",
                    title: "Invest in automated cloud-enabled labs",
                    role: "support",
                    pillar: "pillar1",
                    description: "Through NSF, DOE, NIST at DOC, and other Federal partners, invest in automated cloud-enabled labs for a range of scientific fields, including engineering, materials science, chemistry, biology, and neuroscience."
                },
                {
                    id: "doe-3",
                    title: "Establish secure compute environments",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish secure compute environments within NSF and DOE to enable secure AI use-cases for controlled access to restricted Federal data."
                },
                {
                    id: "doe-4",
                    title: "Expand AI training opportunities at national labs",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOE, expand the hands-on research training and development opportunities for undergraduate, graduate, and postgraduate students and educators, leveraging expertise and capabilities in AI across its national laboratories."
                }
            ]
        },
        {
            name: "Department of Homeland Security (DHS)",
            acronym: "DHS",
            recommendations: [
                {
                    id: "dhs-1",
                    title: "Establish AI Information Sharing and Analysis Center",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Establish an AI Information Sharing and Analysis Center (AI-ISAC), led by DHS, in collaboration with CAISI at DOC and the Office of the National Cyber Director."
                },
                {
                    id: "dhs-2",
                    title: "Issue AI vulnerability guidance",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by DHS, issue and maintain guidance to private sector entities on remediating and responding to AI-specific vulnerabilities and threats."
                },
                {
                    id: "dhs-3",
                    title: "Support collaborative AI vulnerability sharing",
                    role: "support",
                    pillar: "pillar2",
                    description: "Ensure collaborative and consolidated sharing of known AI vulnerabilities from within Federal agencies to the private sector as appropriate."
                }
            ]
        },
        {
            name: "Department of State (DOS)",
            acronym: "DOS",
            recommendations: [
                {
                    id: "dos-1",
                    title: "Coordinate AI export deal facilitation",
                    role: "support",
                    pillar: "pillar3",
                    description: "Once consortia are selected by DOC, the Economic Diplomacy Action Group, the U.S. Trade and Development Agency, the Export-Import Bank, the U.S. International Development Finance Corporation, and the Department of State (DOS) should coordinate with DOC to facilitate deals that meet U.S.-approved security requirements and standards."
                },
                {
                    id: "dos-2",
                    title: "Lead international AI governance advocacy",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Led by DOS and DOC, leverage the U.S. position in international diplomatic and standard-setting bodies to vigorously advocate for international AI governance approaches that promote innovation, reflect American values, and counter authoritarian influence."
                },
                {
                    id: "dos-3",
                    title: "Develop technology diplomacy strategic plan",
                    role: "lead",
                    pillar: "pillar3",
                    description: "Develop a technology diplomacy strategic plan for an AI global alliance to align incentives and policy levers across government to induce key allies to adopt complementary AI protection systems and export controls across the supply chain, led by DOS in coordination with DOC, DOD, and DOE."
                }
            ]
        },
        {
            name: "Department of Justice (DOJ)",
            acronym: "DOJ",
            recommendations: [
                {
                    id: "doj-1",
                    title: "Issue deepfake adjudication guidance",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by the Department of Justice (DOJ), issue guidance to agencies that engage in adjudications to explore adopting a deepfake standard similar to the proposed Federal Rules of Evidence Rule 901(c)."
                },
                {
                    id: "doj-2",
                    title: "File comments on deepfake evidence rules",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by DOJ's Office of Legal Policy, file formal comments on any proposed deepfake-related additions to the Federal Rules of Evidence."
                }
            ]
        },
        {
            name: "Department of the Treasury",
            acronym: "Treasury",
            recommendations: [
                {
                    id: "treasury-1",
                    title: "Issue AI training tax guidance",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Led by the Department of the Treasury, issue guidance clarifying that many AI literacy and AI skill development programs may qualify as eligible educational assistance under Section 132 of the Internal Revenue Code."
                }
            ]
        },
        {
            name: "General Services Administration (GSA)",
            acronym: "GSA",
            recommendations: [
                {
                    id: "gsa-1",
                    title: "Manage AI procurement toolbox",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Create an AI procurement toolbox managed by the General Services Administration (GSA), in coordination with OMB, that facilitates uniformity across the Federal enterprise to the greatest extent practicable."
                },
                {
                    id: "gsa-2",
                    title: "Implement Advanced Technology Transfer Program",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Implement an Advanced Technology Transfer and Capability Sharing Program with GSA to quickly transfer advanced AI capabilities and use cases between agencies."
                }
            ]
        },
        {
            name: "Department of Education (ED)",
            acronym: "ED",
            recommendations: [
                {
                    id: "ed-1",
                    title: "Support AI skill development in education funding",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by the Department of Labor (DOL), the Department of Education (ED), NSF, and DOC, prioritize AI skill development as a core objective of relevant education and workforce funding streams."
                },
                {
                    id: "ed-2",
                    title: "Support AI infrastructure training programs",
                    role: "support",
                    pillar: "pillar2",
                    description: "Through DOL, DOE, ED, NSF, and DOC, partner with state and local governments and workforce system stakeholders to support the creation of industry-driven training programs that address workforce needs tied to priority AI infrastructure occupations."
                },
                {
                    id: "ed-3",
                    title: "Support early career AI exposure programs",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOL, ED, and NSF, partner with education and workforce system stakeholders to expand early career exposure programs and pre-apprenticeships that engage middle and high school students in priority AI infrastructure occupations."
                },
                {
                    id: "ed-4",
                    title: "Provide CTE guidance for AI infrastructure occupations",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Through the ED Office of Career, Technical, and Adult Education, provide guidance to state and local CTE systems about how to update programs of study to align with priority AI infrastructure occupations."
                }
            ]
        },
        {
            name: "Defense Advanced Research Projects Agency (DARPA)",
            acronym: "DARPA",
            recommendations: [
                {
                    id: "darpa-1",
                    title: "Lead AI interpretability technology development program",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Launch a technology development program led by the Defense Advanced Research Projects Agency in collaboration with CAISI at DOC and NSF, to advance AI interpretability, AI control systems, and adversarial robustness."
                }
            ]
        },
        {
            name: "Office of the Director of National Intelligence (ODNI)",
            acronym: "ODNI",
            recommendations: [
                {
                    id: "odni-1",
                    title: "Support DOD-IC AI adoption assessments",
                    role: "support",
                    pillar: "pillar1",
                    description: "Led by the Department of Defense (DOD) in coordination with the Office of the Director of National Intelligence (ODNI), regularly update joint DOD-Intelligence Community (IC) assessments of the comparative level of adoption of AI tools."
                },
                {
                    id: "odni-2",
                    title: "Publish IC AI Assurance Standard",
                    role: "lead",
                    pillar: "pillar2",
                    description: "Led by ODNI in consultation with DOD and CAISI at DOC, publish an IC Standard on AI Assurance under the auspices of Intelligence Community Directive 505 on Artificial Intelligence."
                },
                {
                    id: "odni-3",
                    title: "Support AI incident response coordination",
                    role: "support",
                    pillar: "pillar2",
                    description: "Led by DOD, DHS, and ODNI, in coordination with OSTP, NSC, OMB, and the Office of the National Cyber Director, encourage the responsible sharing of AI vulnerability information."
                }
            ]
        },
        {
            name: "National Science and Technology Council (NSTC)",
            acronym: "NSTC",
            recommendations: [
                {
                    id: "nstc-1",
                    title: "Make recommendations on data quality standards",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Direct the National Science and Technology Council (NSTC) Machine Learning and AI Subcommittee to make recommendations on minimum data quality standards for the use of biological, materials science, chemical, physical, and other scientific data modalities in AI model training."
                },
                {
                    id: "nstc-2",
                    title: "Support whole-genome sequencing program exploration",
                    role: "support",
                    pillar: "pillar1",
                    description: "Explore the creation of a whole-genome sequencing program for life on Federal lands, led by the NSTC and including members of the U.S. Department of Agriculture, DOE, NIH, NSF, the Department of Interior, and Cooperative Ecosystem Studies Units."
                }
            ]
        },
        {
            name: "National Security Council (NSC)",
            acronym: "NSC",
            recommendations: [
                {
                    id: "nsc-1",
                    title: "Support intelligence on foreign AI projects",
                    role: "support",
                    pillar: "pillar3",
                    description: "Prioritize, collect, and distribute intelligence on foreign frontier AI projects that may have national security implications, via collaboration between the IC, the Department of Energy (DOE), CAISI at DOC, the National Security Council (NSC), and OSTP."
                },
                {
                    id: "nsc-2",
                    title: "Support high-security data center standards",
                    role: "support",
                    pillar: "pillar2",
                    description: "Create new technical standards for high-security AI data centers, led by DOD, the IC, NSC, and NIST at DOC, including CAISI, in collaboration with industry."
                },
                {
                    id: "nsc-3",
                    title: "Support AI compute location verification",
                    role: "support",
                    pillar: "pillar3",
                    description: "Led by DOC, OSTP, and NSC in collaboration with industry, explore leveraging new and existing location verification features on advanced AI compute to ensure that the chips are not in countries of concern."
                }
            ]
        },
        {
            name: "Chief Artificial Intelligence Officer Council (CAIOC)",
            acronym: "CAIOC",
            recommendations: [
                {
                    id: "caioc-1",
                    title: "Formalize CAIOC as primary AI coordination venue",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Formalize the Chief Artificial Intelligence Officer Council (CAIOC) as the primary venue for interagency coordination and collaboration on AI adoption."
                },
                {
                    id: "caioc-2",
                    title: "Create Federal AI talent-exchange program",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Create a talent-exchange program designed to allow rapid details of Federal staff to other agencies in need of specialized AI talent (e.g., data scientists and software engineers), with input from the Office of Personnel Management."
                },
                {
                    id: "caioc-3",
                    title: "Mandate frontier AI access for Federal employees",
                    role: "lead",
                    pillar: "pillar1",
                    description: "Mandate that all Federal agencies ensure—to the maximum extent practicable—that all employees whose work could benefit from access to frontier language models have access to, and appropriate training for, such tools."
                }
            ]
        },
        {
            name: "Food and Drug Administration (FDA)",
            acronym: "FDA",
            recommendations: [
                {
                    id: "fda-1",
                    title: "Enable regulatory sandboxes for AI testing",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish regulatory sandboxes or AI Centers of Excellence around the country where researchers, startups, and established enterprises can rapidly deploy and test AI tools while committing to open sharing of data and results. These efforts would be enabled by regulatory agencies such as the Food and Drug Administration (FDA) and the Securities and Exchange Commission (SEC)."
                }
            ]
        },
        {
            name: "Securities and Exchange Commission (SEC)",
            acronym: "SEC",
            recommendations: [
                {
                    id: "sec-1",
                    title: "Enable regulatory sandboxes for AI testing",
                    role: "support",
                    pillar: "pillar1",
                    description: "Establish regulatory sandboxes or AI Centers of Excellence around the country where researchers, startups, and established enterprises can rapidly deploy and test AI tools while committing to open sharing of data and results. These efforts would be enabled by regulatory agencies such as the Food and Drug Administration (FDA) and the Securities and Exchange Commission (SEC)."
                }
            ]
        }
    ]
};

// Document-based pillar mapping using actual Action Plan structure
const documentBasedPillarMapping = {
    // PILLAR I: Accelerate AI Innovation - All regulatory, innovation, adoption, and government modernization actions
    
    // Remove Red Tape and Onerous Regulation
    "Led by the Office of Science and Technology Policy (OSTP), launch a Request for Information from businesses and the public at large about current Federal regulations that hinder AI innovation and adoption, and work with relevant Federal agencies to take appropriate action.": "pillar1",
    "Led by the Office of Management and Budget (OMB) and consistent with Executive Order 14192 of January 31, 2025, \"Unleashing Prosperity Through Deregulation,\" work with all Federal agencies to identify, revise, or repeal regulations, rules, memoranda, administrative orders, guidance documents, policy statements, and interagency agreements that unnecessarily hinder AI development or deployment.": "pillar1",
    "Led by OMB, work with Federal agencies that have AI-related discretionary funding programs to ensure, consistent with applicable law, that they consider a state's AI regulatory climate when making funding decisions and limit funding if the state's AI regulatory regimes may hinder the effectiveness of that funding or award.": "pillar1",
    "Led by the Federal Communications Commission (FCC), evaluate whether state AI regulations interfere with the agency's ability to carry out its obligations and authorities under the Communications Act of 1934.": "pillar1",
    "Review all Federal Trade Commission (FTC) investigations commenced under the previous administration to ensure that they do not advance theories of liability that unduly burden AI innovation. Furthermore, review all FTC final orders, consent decrees, and injunctions, and, where appropriate, seek to modify or set-aside any that unduly burden AI innovation.": "pillar1",
    
    // Most other actions are Pillar I by default (innovation, research, adoption, government modernization)
};

// Pillar classifications are now hardcoded in the data structure

function calculateStatistics() {
    // Use hardcoded pillar assignments from data structure
    
    let totalRecommendations = 0;
    let leadRecommendations = 0;
    let supportRecommendations = 0;
    const agencyStats = {};

    aiActionPlanData.agencies.forEach(agency => {
        const leads = agency.recommendations.filter(r => r.role === 'lead').length;
        const supports = agency.recommendations.filter(r => r.role === 'support').length;
        
        agencyStats[agency.acronym] = {
            name: agency.name,
            lead: leads,
            support: supports,
            total: agency.recommendations.length
        };

        totalRecommendations += agency.recommendations.length;
        leadRecommendations += leads;
        supportRecommendations += supports;
    });

    return {
        total: totalRecommendations,
        lead: leadRecommendations,
        support: supportRecommendations,
        agencies: aiActionPlanData.agencies.length,
        byAgency: agencyStats
    };
}